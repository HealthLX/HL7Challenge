var globalVar={};
var menuData =  [];
//Adding pattern for regexp
var patt = /ID|border|width|height|styleCode|cellpadding|cellspacing|rowspan|colspan|href|align|listType|mediaType|br/;


var DroppableContainer = React.createClass ({

    getInitialState: function () {
        return {
            form: null
        }
    },
    onDragEnter(e) {
        e.stopPropagation();
        e.preventDefault();
        $("#droppable-container").css('border', '5px solid #0B85A1');
    },
    onDragOver(e) {
        e.stopPropagation();
        e.preventDefault();
    },
    onDrop(e) {
         $("#droppable-container").css('border', '2px dotted #0B85A1');
         e.preventDefault();

         var files = e.dataTransfer.files;

        // this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
        // Calls web service that receives the XML file and returns it converted to JSON
        var fd = new FormData();
        fd.append( 'file', files[0] );
        $.ajax(
        {
            url: "http://localhost:8088/cda",
            type: "POST",
            data: fd,
            success: function(data)
            {
                //Search for needed part of the document to process
                var allComponents=new Array();
                var title = '[no title defined]';
                if(data.ClinicalDocument.title)
                    title = data.ClinicalDocument.title;
                var patientRole=data.ClinicalDocument.recordTarget.patientRole;

                if(data.ClinicalDocument.component.structuredBody)
                {
                    // Extract needed parts of the document to process them
                    var components = data.ClinicalDocument.component.structuredBody.component;
                    var titles=[];

                    // components contains the sections to display as panels
                    for(let i=0; i<components.length; i++)
                    {
                        let section=components[i].section;
                        let sectionCode='';
                        if(section.code)
                            sectionCode=section.code["@code"];
                        let sectionTitle='[no title defined]';
                        if(section.title)
                            sectionTitle=section.title;
                        let sectionText=section.text;
                        let panelId="panel-"+sectionCode+"-"+i;
                        // tables found inside a section
                        let tableData=[];
                        // other strings found inside a section
                        let otherText=[];

                        console.log("displaying section: "+sectionTitle);

                        // if(section.code["@code"] == "47420-5")
                        // {
                            // if the section only contains a string
                            if(typeof sectionText == "string")
                                otherText.push({"key": "string", "text": sectionText});
                            else
                                for(var item in sectionText)
                                {
                                    // extract tables information
                                    if(item=="table")
                                    {
                                        var tables=sectionText[item];
                                        // if only one table is found make it an array to be able to use the loop in the next step
                                        if(!Array.isArray(tables))
                                            tables=[tables];
                                        for(var numTable=0; numTable<tables.length; numTable++)
                                            tableData.push(getNodeTableData(tables[numTable]));
                                    }
                                    else if(item=="list")
                                    {
                                        var lists=sectionText[item];

                                        if(!Array.isArray(lists))
                                            lists=[lists];

                                        for(var numList=0; numList<lists.length; numList++)
                                        {
                                            var tables=lists[numList];

                                            // if only one table is found make it an array to be able to use the loop in the next step
                                            if(searchString("table", tables))
                                            {
                                                if(!Array.isArray(tables))
                                                    tables=[tables];

                                                for(var numTable=0; numTable<tables.length; numTable++)
                                                {
                                                    var items=tables[numTable].item;

                                                    if(!Array.isArray(items))
                                                        items=[items];

                                                    for(var numItem=0; numItem<items.length; numItem++)
                                                    {
                                                        tableData.push(getNodeTableData(items[numItem].table));

                                                        console.log("numList: "+numList+" numTable: "+numTable+" numItem: "+numItem);
                                                        console.log("caption: "+tables[numTable].caption);
                                                        if(numItem == 0)
                                                            tableData[tableData.length-1].caption = tables[numTable].caption;
                                                    }
                                                }
                                            }
                                            else
                                            {
                                                if(typeof tables == "string")
                                                {
                                                    if(!patt.test(item.toString()))
                                                        otherText.push({"key": "string", "text": getNodeText(tables)});
                                                }
                                                else
                                                    iterate(tables, otherText);
                                            }
                                        }
                                    }
                                    else // print/save texts recursively
                                    {
                                        if(typeof sectionText[item] == "string")
                                        {
                                            if(!patt.test(item.toString()))
                                                otherText.push({"key": "string", "text": getNodeText(sectionText[item])});
                                        }
                                        else
                                            iterate(sectionText[item], otherText);
                                    }
                                }
                        // }
                        /* Added by VV to get the sections, for build the menu. */
                        var titleRef="javascript:goToByScroll('#"+panelId+"');";
                        titles.push({"text": sectionTitle, href: titleRef, "code": sectionCode, "visible": true});
                        /* * */

                        allComponents.push({"type": sectionCode, id: panelId, "title": sectionTitle, "data": tableData, "otherText": otherText});
                    }
                }

                // Close modal window with the upload form when the service call has finished
                if ($('#myModal').is(':visible'))
                    $("#myModal").modal("toggle");

                showOtherSection();
                showTitle(title);

                var originalData = [];
                originalData.push({text: "Patient Details", href: "javascript:goToByScroll('#patientDetails');", icon: "fa fa-users fa-lg"});
                //originalData.push({text: 'Health Status',href: "javascript:goToByScroll('#healthStatus');", icon: 'glyphicon glyphicon-scale'});
                originalData.push({text: "CCDA Sections", icon: "fa fa-code fa-lg", nodes: titles});

                // Render components
                ReactDOM.render(<PanelBox data={allComponents}/>, document.getElementById("panels"));
                ReactDOM.render(<TreeView treeData={originalData} enableLinks={true}/>, document.getElementById("tree_menu"));
                ReactDOM.render(<PatientDetails patientRole={patientRole}/>, document.getElementById("patientDetails"));
                ReactDOM.render(<HealthStatusPanel id="idMain" />, document.getElementById("healthstatus"));
            },
            // Web service call error
            error: function(err)
            {
                var message = "";

                if(err.responseText != null)
                  message = $.parseJSON(err.responseText).errorMessage;
                else if(err.statusText != null)
                  message = err.statusText;

                // service is not active or unreachable
                if(err.status == 0)
                  message = "Service Unavailable";

                // show error message to the user
                showAlert("danger", "Error: "+message);
            },
            processData: false,
            contentType: false
        });
    },
    componentDidMount: function() {
        var tempForm = React.createElement(XMLForm);
        this.setState({form: tempForm});

        ReactDOM.render(tempForm, document.getElementById("modal-container"));
    },
    render: function() {

        return (

            <div id="droppable-container" className="boxed text-center div-center" onDragEnter={this.onDragEnter}
            onDragOver={this.onDragOver} onDrop={this.onDrop}>
                <p><i className="fa fa-file-code-o fa-fw fa-inverse" style={{fontSize: '20em', color: '#000'}}>
                </i></p>
                <h1><span style={{'color':'#000'}}>Click to Upload XML File</span></h1>
            </div>
        );
    }
});


/* Container of panels */
var PanelBox=React.createClass(
{
    getInitialState: function()
    {
        return {
            filter: null
        };
    },

    componentWillMount: function()
    {
        var component=this;
        globalVar.callbackPanelBox=function(filterName)
        {
            component.setState({filter: filters[filterName]});
        };
    },

    // first time load finished
    componentDidMount: function()
    {
        // Use masonry for the layout of the panels
        $("#panels").masonry({itemSelector: ".grid-item"});
    },

    // update finished
    componentDidUpdate: function(prevProps, prevState)
    {
        // Mark all panels as visible in case some were hidden previously
        $(".section-panel").addClass("grid-item").show(0);
        $("#panels").masonry("reloadItems").masonry();
    },

    render: function()
    {
        var filter=this.state.filter;
        var nodes = new Array();

        var nodes = this.props.data.map(function(component, index)
        {
          // if there's a filter set, check ignore the sections that aren't part of it
          if(filter && $.inArray(component.type, filter.sections)==-1)
            return null;

          var panel;
          // font awesome default icon class for panel
          var iconClass="fa-heart-o";

          // Create panels according to their LOINC code
          switch(component.type)
          {
            //Allergies
            case "48765-2":
                iconClass="fa-info-circle";
                break;
            //Medications
            case "10160-0":
                iconClass="fa-asterisk";
                break;
            //Immunizations
            case "11369-6":
                iconClass="fa-medkit";
                break;
            //Plan of care
            case "18776-5":
                iconClass="fa-plus-square";
                break;
            //Encounters
            case "46240-8":
                iconClass="fa-hospital-o";
                break;
            //Problem list
            case "11450-4":
                iconClass="fa-exclamation-triangle";
                break;
            //Procedures
            case "47519-4":
                iconClass="fa-bed";
                break;
            //Results
            case "30954-2":
                iconClass="fa-file-text-o";
                break;
            //Social History
            case "29762-2":
                iconClass="fa-user-plus";
                break;
            //Vital Signs
            case "8716-3":
                iconClass="fa-heartbeat";
                break;
            //Health Concerns Section
            case "75310-3":
                iconClass="fa-ambulance";
                break;
            //Goals Section
            case "61146-7":
                iconClass="fa-list-ul";
                break;
            //Interventions Section
            case "62387-6":
                iconClass="fa-user-md";
                break;
            //Health Status Evaluations/Outcomes Section
            case "11383-7":
                iconClass="fa-heart";
                break;
            //Advance Directives
            case "42348-3":
                iconClass="fa-bolt";
                break;
            //Family History
            case "10157-6":
                iconClass="fa-users";
                break;
            //Functional Status
            case "47420-5":
                iconClass="fa-check-square-o";
                break;
            //Medical Equipment
            case "46264-8":
                iconClass="fa-stethoscope";
                break;
            //Insurance Providers
            case "48768-6":
                iconClass="fa-shield";
                break;
            //Reason For Referral
            case "42349-1":
                iconClass="fa-question-circle-o";
                break;
            //Reason For Visit
            case "29299-5":
                iconClass="fa-question-circle-o";
                break;
            //Instructions
            case "69730-0":
                iconClass="fa-list-alt";
                break;
            }

            var hasSpans = false;

            if(component.data && component.otherText)
            {
                if(component.data.length == 1 && !component.data[0])
                {
                    if(component.otherText.length > 0)
                        panel = (<CollapsiblePanel key={index} id={component.id} title={component.title} data={component.data} iconClass={iconClass}/>);
                }
                else
                {
                    if(component.otherText.length == 0 && component.data.length > 0)
                    {
                        for(var i=0; i < component.data.length; i++)
                            if(component.data[i].hasSpans)
                                hasSpans = true;

                        if(component.data.length == 1 && component.data[0].rows[0].length >= 5 && !hasSpans)
                            panel = (<CollapsiblePanel key={index} id={component.id} title={component.title} data={component.data} iconClass={iconClass}/>);
                        else
                            panel = (<GenericPanel key={index} id={component.id} title={component.title} data={component.data} otherText={component.otherText} iconClass={iconClass}/>);
                    }
                    else
                        panel = (<GenericPanel key={index} id={component.id} title={component.title} data={component.data} otherText={component.otherText} iconClass={iconClass}/>);
                }
            }

            return(panel);
        });

        return(
            <div>
                {nodes}
            </div>
        );
    }
});

/* Panel containing the main information of the patient */
class PatientDetails extends React.Component
{
    render()
    {
        // /
        var patientRole=this.props.patientRole;
        var patientMap = getPatientDetails(patientRole);
        var marital = "", religion = "";

        if (patientMap.religion==undefined || patientMap.religion==="")
            patientMap.religion="[no religion defined]";
        if (patientMap.language==undefined || patientMap.language==="" || patientMap.language==="?")
            patientMap.language="[no language defined]";
        return(
            <div>
              <div className="col-lg-12 col-md-12 col-sm-12 mb">
                  <div className="patientDetails panel pn">
                      <div className="data">
                            <span className="fa-stack fa-5x icon-person">
                              <i className="fa fa-circle fa-stack-2x mint-color"></i>
                              <i className="fa fa-user fa-stack-1x fa-inverse"></i>
                            </span>
                            <h1 className="go-left">{patientMap.name} (<span className="mint-color">{patientMap.age}</span>)</h1>
                            <p className="patientData">
                                <b className="mint-color">{patientMap.firstName}</b> is a
                                <span className='mint-color'> {patientMap.maritalStatus}</span>&nbsp;
                                <span className="mint-color">{patientMap.race}</span>&nbsp;
                                <span className="mint-color">{patientMap.gender}</span>&nbsp;
                                who is <span className="mint-color">{patientMap.religion}</span>&nbsp;
                                and speaks <span className="mint-color">{patientMap.language}</span>.
                            </p>
                        <dl>
                            <li><dt><span className="fa fa-birthday-cake"></span> DOB: </dt><dd>{patientMap.dob}</dd></li>
                            <li><dt><span className="fa fa-map-marker"></span> Address: </dt><dd>{patientMap.address}</dd></li>
                            <li><dt><span className="fa fa-phone"></span> Telephone: </dt><dd>{patientMap.contact}</dd></li>
                            <li><dt><span className="fa fa-user"></span> Guardian: </dt><dd>{patientMap.guardianName}</dd></li>
                        </dl>
                      </div>
                  </div>
              </div>
            </div>
        );
    }
}

/* Panel containing the Health Status of the patient */
class HealthStatusPanel extends React.Component
{

    render()
    {

        return(
            <div className="col-lg-12 col-md-12 col-sm-12 mb" style={{display: 'none'}}>
                <div className="mint-panel pn">
                    <div className="mint-header">
                        <h3 className="panel-title">Health Status</h3>
                        <canvas id="myCanvas" width="400" height="400">

                        </canvas>
                    </div>
                    <div class="panel-body">
                        Panel content
                    </div>
                </div>
            </div>
        );
    }
}

/* Generic Panel to display information of a specific CCD section */
var GenericPanel=React.createClass(
{
    getInitialState() {
        return {data: [], display: 'block', otherData: [], title: ''};
    },

    onClick(e)
    {
        var titleRef=this.props.id;
        $("#"+titleRef).hide("fast", function()
        {
            // animation completed. update the layout of the panels
            $("#"+titleRef).removeClass("grid-item");
            $("#panels").masonry("reloadItems").masonry();
        });
        e.preventDefault();
    },

    render()
    {
        // If no data (tables) nor otherText(non-tables), there's nothing to show for this table
        if(!this.props.data && !this.props.otherText)
            return;

        // Sections might contain more than one table
        var tables=[];
        var panelSizeClasses="col-lg-3 col-md-4 col-sm-12";

        // Process for tables information
        for(var tableNum=0; tableNum<this.props.data.length; tableNum++)
        {
            // variable to contain the html rows of data to render
            var elements=[];
            var table=this.props.data[tableNum];
            var rows=table.rows;
            var headers=table.headers;

            //handle tables with spans differently
            if(table.hasSpans || table.caption != null)
            {
                var tblCaption;
                var tblHeader = [];
                var tblBody=[];
                var tblBodyTr=[];

                panelSizeClasses="col-lg-6 col-md-8 col-sm-12";

                if(table.caption != null)
                    tblCaption = (<caption className="text-center">{table.caption}</caption>);

                for(var r=0; r<headers.length; r++)
                {
                    elements = [];

                    for(var i=0; i<headers[r].length; i++)
                    {

                        if(!elements[i])
                            elements[i]=[];

                        if(headers[r][i].isTh)
                            elements[i].push(
                                    <th key={i} colSpan={headers[r][i].colspan} rowSpan={headers[r][i].rowspan}>
                                        {headers[r][i].text}
                                    </th>
                                );
                        else
                            elements[i].push(
                                    <td key={i} colSpan={headers[r][i].colspan} rowSpan={headers[r][i].rowspan}>
                                        {headers[r][i].text}
                                    </td>
                                );

                    }

                    tblHeader.push(
                        <tr key={r}>
                            {elements}
                        </tr>
                    );
                }

                elements = [];

                for(var b=0; b<rows.length; b++)
                {
                    tblBodyTr = [];

                    for(var r=0; r<rows[b].length; r++)
                    {
                        elements = [];

                        for(var i=0; i<rows[b][r].length; i++)
                        {
                            if(!elements[i])
                                elements[i]=[];

                            let text = rows[b][r][i][0];
                            var listText = [];

                            if(!Array.isArray(text.text))
                                    text.text = [text.text];

                            for(var t=0; t<text.text.length; t++)
                                if(text.text[t].text != "")
                                    listText.push(<p key={b+""+r+""+i+""+t}>{text.text[t].text}</p>);


                            if(text.isTh)
                                elements[i].push(
                                    <th  key={b+""+r+""+i} colSpan={text.colspan} rowSpan={text.rowspan}>
                                        {listText}
                                    </th>
                                );
                            else
                                elements[i].push(
                                    <td  key={b+""+r+""+i} colSpan={text.colspan} rowSpan={text.rowspan}>
                                        {listText}
                                    </td>
                                );
                        }

                        tblBodyTr.push(
                            <tr key={b+""+r}>
                                {elements}
                            </tr>
                        );
                    }

                    tblBody.push(
                        <tbody key={b}>
                            {tblBodyTr}
                        </tbody>
                    );
                }

                // html wrapper for the table data
                tables.push(
                    <div className="row" key={tableNum}>
                        <div className="col-sm-12">
                            <div className="table-responsive">
                                <table className="table table-wrap table-bordered table-striped table-hover table-condensed">
                                    {tblCaption}
                                    <thead>
                                        {tblHeader}
                                    </thead>
                                    {tblBody}
                                </table>
                            </div>
                        </div>
                    </div>
                );
            }
            else
            {
                for(var r=0; r<rows[0].length; r++)
                {
                    if(!elements[r])
                        elements[r]=[];

                    for(var i=0; i<headers[0].length; i++)
                    {
                        var listText = [];

                        //Less rows than headers *CHECK*
                        if(rows[0][r][i])
                        {
                            let text = rows[0][r][i][0];

                            if(!Array.isArray(text.text))
                                text.text = [text.text];

                            for(var t=0; t<text.text.length; t++)
                            {
                                if(text.text[t].text != "")
                                   listText.push(<p key={r+""+i+""+t}>{text.text[t].text}</p>);
                            }
                        }
                        else
                            break;

                        if(rows[0][r].length > 1)
                            elements[r].push(
                                <dl key={r+""+i} className="dl-horizontal">
                                    <dt><span className="label label-default">{headers[0][i].text}</span></dt>
                                    <dd className="text-left">{listText}</dd>
                                </dl>
                            );
                        else
                            elements[r].push(
                                <dl key={r+""+i} className="dl-horizontal">
                                    {listText}
                                </dl>
                            );
                    }
                }

                // html structure for each row of data
                var listItems=(elements.map(function(element, index)
                {
                    return(
                        <div key={index}>
                            {element}
                            <hr/>
                        </div>
                    );
                }));

                // html wrapper for the table data
                tables.push(
                    <div key={tableNum}>
                        {listItems}
                    </div>
                );
            }
        }

        // Process for non tables information
        if(this.props.otherText)
        {
            // array of items to be rendered
            var elements=new Array();

            for(var j=0; j<this.props.otherText.length; j++)
            {
                if(!elements[j])
                    elements[j]=[];

                elements[j].push(
                        <dl key={j} className="dl-horizontal">
                            {this.props.otherText[j].text}
                        </dl>
                    );
            }

            // html structure for each row of data
            var listItems=(elements.map(function(element, index)
            {
                return(
                    <div key={index}>
                        {element}
                        <hr/>
                    </div>
                );
            }));

            // html wrapper for the list of data
            tables.push(
                <div key={tableNum+1}>
                    {listItems}
                </div>
            );
        }
        // Panel html structure
        var titleRef=this.props.id;
        return(
            <div id={titleRef} className={"grid-item section-panel mb "+panelSizeClasses} style={{display: this.state.display}}>
                <div className="mint-panel pn">
                    <div className="mint-header">
                        <h4>
                            <button className="close" onClick={this.onClick}>
                                <i className="fa fa-trash-o fa-lg"></i>
                            </button>
                            {this.props.title}
                        </h4>
                    </div>
                    <span className={"pn-bg fa "+this.props.iconClass+" fa-5x"}></span>
                    {tables}
                </div>
            </div>
        );
    }
});

var CollapsiblePanel=React.createClass(
{
    getInitialState() {
        return {data: [], display: 'block', title: ''};
    },

    onClick(e)
    {
        var titleRef=this.props.id;
        $("#"+titleRef).hide("fast", function()
        {
            // animation completed. update the layout of the panels
            $("#"+titleRef).removeClass("grid-item");
            $("#panels").masonry("reloadItems").masonry();
        });
        e.preventDefault();
    },

    // update finished
    componentDidMount(prevProps, prevState)
    {
        var titleRef=this.props.id;
        $("#accordion"+titleRef).on('shown.bs.collapse', function () {
            $("#panels").masonry("reloadItems").masonry();
        })

        $("#accordion"+titleRef).on('hidden.bs.collapse', function () {
            $("#panels").masonry("reloadItems").masonry();
        })
    },

    render()
    {
        if(!this.props.data)
            return;

        var tables=[];
        var collapsePanelHeading = [];
        var titlePanel = this.props.title;
        var accordion = "accordion"+this.props.id;

        for(var tableNum=0; tableNum<this.props.data.length; tableNum++)
        {
            var table=this.props.data[tableNum];
            var elements=[];
            var rows=table.rows;
            var headers=table.headers;

            for(var r=0; r<rows[0].length; r++)
            {
                if(!elements[r])
                    elements[r]=[];

                for(var i=0; i<headers[0].length; i++) {
                    let text = rows[0][r][i][0];
                    var listText = [];

                    if(text)
                    {
                        if(!Array.isArray(text.text))
                            text.text = [text.text];

                        for(var t=0; t<text.text.length; t++)
                        {
                            if(text.text[t].text != "")
                                listText.push(<p key={r+""+i+""+t}>{text.text[t].text}</p>);
                        }
                    }

                    if (i===0 && text) {
                        // debug2=text;
                        if(!text.text[0].text)
                            var title = "";
                        else
                            var title = text.text[0].text.toUpperCase()

                        collapsePanelHeading.push(title);
                    }
                    elements[r].push(
                        <dl key={r+""+i} className="dl-horizontal">
                            <dt><span className="label label-default">{headers[0][i].text}</span></dt>
                            <dd className="text-left">{listText}</dd>
                        </dl>
                    );
                }
            }

            var listItems=(elements.map(function(element, index)
            {
                var href="ref-"+this.props.id+"-"+index;

                return(
                      <span key={index}>
                      <div className="panel-heading mint-header-no-margin">
                        <h4 className="panel-title">
                          <a href={"#"+href} data-parent={accordion} data-toggle="collapse" >{collapsePanelHeading[index]}
                          </a>
                        </h4>
                      </div>
                      <div id={href} className="panel-collapse collapse white-back">
                          {element}
                          <hr/>
                      </div>
                      </span>
                );
            }, this));

            tables.push(
                <div key={tableNum} className="panel-default">
                    {listItems}
                </div>
            );
        }

        var titleRef = this.props.id;
        return(
            <div id={titleRef} className="grid-item section-panel col-lg-3 col-md-4 col-sm-12 mb" style={{display: this.state.display}}>
                <div className="mint-panel pn">
                    <div className="mint-header">
                        <h4>
                            <button className="close" onClick={this.onClick}>
                                <i className="fa fa-trash-o fa-lg"></i>
                            </button>
                            {this.props.title}
                        </h4>
                    </div>
                  <span className={"pn-bg fa "+this.props.iconClass+" fa-5x"}></span>
                  <div className="panel-body">
                    <div id={accordion} className="panel-group" onExited={this.handleClick}>
                      {tables}
                    </div>
                  </div>
                </div>
            </div>
        );
    }
});

/* CCDA XML File Upload form. Main step */
var XMLForm = React.createClass ({
    render ()
    {
        return(
            <div className="modal-content" >
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 className="modal-title" id="myModalLabel">Load new patient data</h4>
                </div>
                <div className="modal-body">
                    <form id="upload-form" action="http://localhost:8088/cda" method="post" enctype="multipart/form-data" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Choose file</label>
                            <input id="file-upload" type="file" name="file"/>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                    <input id="btn-submit" type="submit" form="upload-form" className="btn btn-info" value="Upload"/>
                </div>
            </div>
        );
    },

    handleSubmit: function (event)
    {
        event.preventDefault();
        // this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
        // Calls web service that receives the XML file and returns it converted to JSON
        var _this = this;
        $.ajax(
        {
            url: $(event.target).prop("action"),
            type: "POST",
            data: new FormData(event.target),
            // JSON data received from the service
            success: function(data)
            {

                //Search for needed part of the document to process
                var allComponents=new Array();
                var title = '[no title defined]';
                if(data.ClinicalDocument.title)
                    title = data.ClinicalDocument.title;
                var patientRole=data.ClinicalDocument.recordTarget.patientRole;

                if(data.ClinicalDocument.component.structuredBody)
                {
                    // Extract needed parts of the document to process them
                    var components = data.ClinicalDocument.component.structuredBody.component;
                    var titles=[];

                    // components contains the sections to display as panels
                    for(let i=0; i<components.length; i++)
                    {
                        let section=components[i].section;
                        let sectionCode='';
                        if(section.code)
                            sectionCode=section.code["@code"];
                        let sectionTitle='[no title defined]';
                        if(section.title)
                            sectionTitle=section.title;
                        let sectionText=section.text;
                        let panelId="panel-"+sectionCode+"-"+i;
                        // tables found inside a section
                        let tableData=[];
                        // other strings found inside a section
                        let otherText=[];

                        console.log("displaying section: "+sectionTitle);

                        // if(section.code["@code"] == "47420-5")
                        // {
                            // if the section only contains a string
                            if(typeof sectionText == "string")
                                otherText.push({"key": "string", "text": sectionText});
                            else
                                for(var item in sectionText)
                                {
                                    // extract tables information
                                    if(item=="table")
                                    {
                                        var tables=sectionText[item];
                                        // if only one table is found make it an array to be able to use the loop in the next step
                                        if(!Array.isArray(tables))
                                            tables=[tables];
                                        for(var numTable=0; numTable<tables.length; numTable++)
                                            tableData.push(getNodeTableData(tables[numTable]));
                                    }
                                    else if(item=="list")
                                    {
                                        var lists=sectionText[item];

                                        if(!Array.isArray(lists))
                                            lists=[lists];

                                        for(var numList=0; numList<lists.length; numList++)
                                        {
                                            var tables=lists[numList];

                                            // if only one table is found make it an array to be able to use the loop in the next step
                                            if(searchString("table", tables))
                                            {
                                                if(!Array.isArray(tables))
                                                    tables=[tables];

                                                for(var numTable=0; numTable<tables.length; numTable++)
                                                {
                                                    var items=tables[numTable].item;

                                                    if(!Array.isArray(items))
                                                        items=[items];

                                                    for(var numItem=0; numItem<items.length; numItem++)
                                                    {
                                                        tableData.push(getNodeTableData(items[numItem].table));

                                                        console.log("numList: "+numList+" numTable: "+numTable+" numItem: "+numItem);
                                                        console.log("caption: "+tables[numTable].caption);
                                                        if(numItem == 0)
                                                            tableData[tableData.length-1].caption = tables[numTable].caption;
                                                    }
                                                }
                                            }
                                            else
                                            {
                                                if(typeof tables == "string")
                                                {
                                                    if(!patt.test(item.toString()))
                                                        otherText.push({"key": "string", "text": getNodeText(tables)});
                                                }
                                                else
                                                    iterate(tables, otherText);
                                            }
                                        }
                                    }
                                    else // print/save texts recursively
                                    {
                                        if(typeof sectionText[item] == "string")
                                        {
                                            if(!patt.test(item.toString()))
                                                otherText.push({"key": "string", "text": getNodeText(sectionText[item])});
                                        }
                                        else
                                            iterate(sectionText[item], otherText);
                                    }
                                }
                        // }
                        /* Added by VV to get the sections, for build the menu. */
                        var titleRef="javascript:goToByScroll('#"+panelId+"');";
                        titles.push({"text": sectionTitle, href: titleRef, "code": sectionCode, "visible": true});
                        /* * */

                        allComponents.push({"type": sectionCode, id: panelId, "title": sectionTitle, "data": tableData, "otherText": otherText});
                    }
                }

                // Close modal window with the upload form when the service call has finished
                if ($('#myModal').is(':visible'))
                    $("#myModal").modal("toggle");

                showOtherSection();
                showTitle(title);

                var originalData = [];
                originalData.push({text: "Patient Details", href: "javascript:goToByScroll('#patientDetails');", icon: "fa fa-users fa-lg"});
                //originalData.push({text: 'Health Status',href: "javascript:goToByScroll('#healthStatus');", icon: 'glyphicon glyphicon-scale'});
                originalData.push({text: "CCDA Sections", icon: "fa fa-code fa-lg", nodes: titles});

                // Render components
                ReactDOM.render(<PanelBox data={allComponents}/>, document.getElementById("panels"));
                ReactDOM.render(<TreeView treeData={originalData} enableLinks={true}/>, document.getElementById("tree_menu"));
                ReactDOM.render(<PatientDetails patientRole={patientRole}/>, document.getElementById("patientDetails"));
                ReactDOM.render(<HealthStatusPanel id="idMain" />, document.getElementById("healthstatus"));

            },
            // Web service call error
            error: function(err)
            {
                var message = "";

                if(err.responseText != null)
                  message = $.parseJSON(err.responseText).errorMessage;
                else if(err.statusText != null)
                  message = err.statusText;

                // service is not active or unreachable
                if(err.status == 0)
                  message = "Service Unavailable";

                // show error message to the user
                showAlert("danger", "Error: "+message);
            },
            processData: false,
            contentType: false
        });
    },

});

/* Classes created by VV to create handle the menu. */
var TreeView = React.createClass(
{
  displayName: "TreeView",
  propTypes: {
    levels: React.PropTypes.number,
    treeData: React.PropTypes.array,
    expandIcon: React.PropTypes.string,
    collapseIcon: React.PropTypes.string,
    emptyIcon: React.PropTypes.string,
    nodeIcon: React.PropTypes.string,

    color: React.PropTypes.string,
    backColor: React.PropTypes.string,
    borderColor: React.PropTypes.string,
    onhoverColor: React.PropTypes.string,
    selectedColor: React.PropTypes.string,
    selectedBackColor: React.PropTypes.string,

    enableLinks: React.PropTypes.bool,
    highlightSelected: React.PropTypes.bool,
    showBorder: React.PropTypes.bool,
    showTags: React.PropTypes.bool,

    nodes: React.PropTypes.array
  },

  getDefaultProps: function () {
    return {
      levels: 2,
      treeData: undefined,
      expandIcon: 'fa fa-chevron-right',
      collapseIcon: 'fa fa-chevron-down',
      emptyIcon: 'glyphicon',
      nodeIcon: 'fa fa-bookmark',

      color: '#0A3F6C',
      backColor: undefined,
      borderColor: undefined,
      onhoverColor: '#F5F5F5', // TODO Not implemented yet, investigate radium.js 'A toolchain for React component styling'
      selectedColor: '#FFFFFF',
      selectedBackColor: '#428bca',

      enableLinks: false,
      highlightSelected: false,
      showBorder: true,
      showTags: false,

      nodes: []
    }
  },
    getInitialState: function() {
        return {
            filterTV: null
        };
    },
  setNodeId: function(node) {

    if (!node.nodes) return;

    var _this = this;
    node.nodes.forEach(function checkStates(node) {
      node.nodeId = _this.props.nodes.length;
      _this.props.nodes.push(node);
      _this.setNodeId(node);
    });
  },
componentWillMount: function()
  {
      var component=this;

      globalVar.callbackTreeView=function(filterName)
      {
        component.setState({filterTV: filters[filterName]});
      };
  },
  render: function() {
    this.treeData = this.props.treeData;
    this.setNodeId({ nodes: this.treeData });
    var component = this;
    var filterTV=this.state.filterTV;
    var children = [];
    if (this.treeData) {
      var _this = this;
      var nodeIdKey = "IntTreeNode";
      this.treeData.forEach(function (node) {
        if (node.nodes) {
            node.nodes.forEach (function (nodeLast){
                nodeLast.visible = true;
                if (filterTV)
                    nodeLast.visible = $.inArray(nodeLast.code, filterTV.sections)>=0;
            });
        }
        children.push(React.createElement(TreeNode, {node: node, key: nodeIdKey+""+node.nodeId,
                                level: 1,
                                visible: true,
                                options: _this.props}));
      });
    }
    return (
      <div id="treeviewList" className="treeview">
        <ul className="list-group" key="treeviewKey">
          { children }
        </ul>
      </div>
    )
  }
});

var TreeNode = React.createClass({
  displayName: "TreeNode",

  getInitialState: function() {
    var node = this.props.node;
    var key = this.props.keyId;
    return {
      expanded: (node.state && node.state.hasOwnProperty('expanded')) ?
                  node.state.expanded :
                    (this.props.level < this.props.options.levels) ?
                      true :
                      false,
      selected: (node.state && node.state.hasOwnProperty('selected')) ?
                  node.state.selected :
                  false
    }
  },
  toggleExpanded: function(id, event) {
    this.setState({ expanded: !this.state.expanded });
    event.stopPropagation();
  },

  toggleSelected: function(id, event) {
    this.setState({ selected: !this.state.selected });
    event.stopPropagation();
  },

  render: function() {

    var node = this.props.node;
    var options = this.props.options;
    var keyCounter = 0;
    var style;
    if (!this.props.visible) {
      style = {
        display: 'none'
      };
    }
    else {

      if (options.highlightSelected && this.state.selected) {
        style = {
          color: options.selectedColor,
          backgroundColor: options.selectedBackColor
        };
      }
      else {
        style = {
          color: node.color || options.color,
          backgroundColor: node.backColor || options.backColor
        };
      }

      if (!options.showBorder) {
        style.border = 'none';
      }
      else if (options.borderColor) {
        style.border = '1px solid ' + options.borderColor;
      }
    }
/*
    var indents = [];
    for (var i = 0; i < this.props.level-1; i++) {
      indents.push(React.createElement("span", {key: "span"+i, className: "indent"}));
    }
*/
    var expandCollapseIcon;
    if (node.nodes) {
      if (!this.state.expanded) {
        expandCollapseIcon = (
          React.createElement("span", {className: options.expandIcon,
                onClick: this.toggleExpanded.bind(this, node.nodeId)}
          )
        );
      }
      else {
        expandCollapseIcon = (
          React.createElement("span", {className: options.collapseIcon,
                onClick: this.toggleExpanded.bind(this, node.nodeId)}
          )
        );
      }
    }
    else {
      expandCollapseIcon = (
        React.createElement("span", {className: options.emptyIcon})
      );
    }

    var nodeIcon = (
      React.createElement("span", {className: "icon"},
        React.createElement("i", {className: node.icon || options.nodeIcon})
      )
    );

    var nodeText;
    if (options.enableLinks) {
      nodeText = (
        React.createElement("a", {href: node.href},
          node.text
        )
      );
    }
    else {
      nodeText = (
        React.createElement("span", {className: "text"}, node.text)
      );
    }

    var badges;
    if (options.showTags && node.tags) {
      badges = node.tags.map(function (tag) {
        return (
          React.createElement("span", {className: "badge"}, tag)
        );
      });
    }

    var children = [];
    if (node.nodes) {
      var _this = this;
      var nodeIdKey = "TreeNode";
      node.nodes.forEach(function (node) {
        if (node.visible)
            children.push(React.createElement(TreeNode, {node: node, key: nodeIdKey+""+node.nodeId,
                                    level: _this.props.level+1,
                                    visible: _this.state.expanded && _this.props.visible,
                                    options: options}));
      });
    }

    var keyLI = "li"+node.nodeId;
    return (
      React.createElement("li", {key: {keyLI}, className: "list-group-item",
          style: style,
          onClick: this.toggleSelected.bind(this, node.nodeId)
          },
  //      indents,
        expandCollapseIcon,
        nodeIcon,
        nodeText,
        badges,
        <ul>{children}</ul>
      )
    );
  }
});

/* Filters drop down */
var FilterBox=React.createClass(
{
    handleChange: function(event)
    {
        globalVar.callbackPanelBox(event.target.value);
        globalVar.callbackTreeView(event.target.value);
    },

    render: function()
    {
        var names=[""];

        for(var filterName in filters)
            names.push(filterName);

        var choices=names.map(function(name, index)
        {
            return(
                <option id="filter" value={name} key={index}>{name}</option>
            );
        });

        return (
            <div className="form-group">
                <label className="">Apply Filter</label>
                <select onChange={this.handleChange} className="form-control">
                    {choices}
                </select>
            </div>
        );
    }
});

/*** Utility functions ***/

/* Extract just the text inside a node when there might be additional attributes
(in that case the text content is inside "$") */
function getNodeText(nodeElement)
{
    if(!nodeElement)
        return null;
    if(typeof nodeElement==="string" || nodeElement instanceof String
    || typeof nodeElement==="number" || nodeElement instanceof Number)
        return nodeElement;
    return nodeElement.$
}

/*Extract the text object or string from a node */
function getTextObject(nodeElement, tableData, hasTh)
{
    var jsonArr = new Array();
    var txtArr = new Array();

    var boolTh = hasTh;

    if(typeof nodeElement === "string" || typeof nodeElement === "number")
        jsonArr.push(buildTableCellObject(nodeElement, {"key":"string", "text":getNodeText(nodeElement)} ));
    else // Cell contains something other than a string
    {
        // extract contents recursively
        iterate(nodeElement, txtArr);
        jsonArr.push(buildTableCellObject(nodeElement, txtArr, boolTh));
        // check for colspan/rowspan
        if(nodeElement && (nodeElement["@rowspan"] || nodeElement["@colspan"]))
            tableData.hasSpans=true;
    }

    return jsonArr;
}

/* Extract just the title of a "Section" node. */
function getSectionTitle(nodeElement)
{
    if(!nodeElement)
        return null;
    if (nodeElement.title !== null)
        return nodeElement.title;
}

/*Obtain all text from an unformated node*/
function iterate(obj, jsonArr) {
    for(var key in obj) {
        var elem = obj[key];

        if(typeof elem === "object") {
            iterate(elem, jsonArr); // call recursively
        }
        else{
            if(!patt.test(key.toString())){
                if(elem == undefined)
                    jsonArr.push({"key":key.toString(),"text":null});
                else
                {
                    if(elem != "")
                        jsonArr.push({"key":key.toString(),"text":elem});
                }
            }
        }
    }
}

/*VV, Get the gender out of the genderCode */
function getGender(patientObj) {
  var gender;
  if (patientObj.administrativeGenderCode) {
    //if (searchString("displayName", patientObj.administrativeGenderCode)) {
    if (patientObj.administrativeGenderCode["@displayName"]) {
        gender = patientObj.administrativeGenderCode["@displayName"];
    } else if (patientObj.administrativeGenderCode["@code"]) {
        gender = patientObj.administrativeGenderCode["@code"]=="F"?"Female":"Male";
    } else gender = "UNKNOWN";
  }
  return gender;
}

/*VV, Get the Race out of the RaceCode */
function getRace(patientObj) {
  var race = "";

  if (patientObj.raceCode && !Array.isArray(patientObj.raceCode)) {
    if (patientObj.raceCode["@displayName"]) {
        race = patientObj.raceCode["@displayName"];
    }
  } else if (patientObj.raceCode && patientObj.raceCode.length>1) {
    race = "Unkown race";
    if (patientObj.raceCode[0]["@displayName"]) {
        race = patientObj.raceCode[0]["@displayName"];
    }
    for (var i=1; i<patientObj.raceCode.length;i++) {
        if (patientObj.raceCode[i]["@displayName"]) {
            race += " [" + patientObj.raceCode[i]["@displayName"] + "]";
      }
    }
  }
  return race;
}

/*VV, Get the Religion out of the religiousAffiliationCode */
function getReligion(patientObj) {
  var religion;
  if (patientObj.religiousAffiliationCode) {
    if (searchString("@displayName", patientObj.religiousAffiliationCode)) {
        religion = patientObj.religiousAffiliationCode["@displayName"];
    } else religion = "";
  }
  return religion;
}

/*VV, Get the MaritalStatus out of the maritalStatusCode */
function getMaritalStatus(patientObj) {
  var mStatus;
  if (patientObj.maritalStatusCode) {
    if (searchString("@displayName", patientObj.maritalStatusCode)) {
        mStatus = patientObj.maritalStatusCode["@displayName"];
    } else if (patientObj.maritalStatusCode["@code"]) {
        mStatus = patientObj.maritalStatusCode["@code"];
    } else mStatus = "";
  }
  return mStatus;
}

/*VV, Get the Language out of the languageCommunication */
function getLanguage(patientObj) {
  var language, languageCode;
  var languages;
  if (patientObj.languageCommunication && ( patientObj.languageCommunication.languageCode || Array.isArray(patientObj.languageCommunication))) {
    if (Array.isArray(patientObj.languageCommunication)) {
        language = "";
        patientObj.languageCommunication.forEach(function(lang) {
            languageCode = lang.languageCode["@code"];

            languages = languageCode.length==2?languages639_1.filter(function(obj) { return obj.code.toLowerCase() === languageCode.toLowerCase() }):languages639_2.filter(function(obj) { return obj.code.toLowerCase() === languageCode.toLowerCase() });
            language += languages.length>0?languages[0].value:"";
            language += " and ";
        });
        language = language.substring(0, language.length-5);
        return language;
    } else
        languageCode = patientObj.languageCommunication.languageCode["@code"];
  } else return "?";

  language = languageCode.length==2?languages639_1.filter(function(obj) { return obj.code.toLowerCase() === languageCode.toLowerCase() }):languages639_2.filter(function(obj) { return obj.code.toLowerCase() === languageCode.toLowerCase() });

  return language.length>0?language[0].value:"?";
}

/* Extract the patient details form the patientRole section of the document */
function getPatientDetails(patientRole)
{
  var patientName=patientRole.patient.name;
  var name=buildName(patientName);
  var dob=moment(patientRole.patient.birthTime["@value"]).format("LL");
  var guardian=patientRole.patient.guardian;
  var address=buildAddress(patientRole.addr);
  var contact=buildTelecom(patientRole.telecom);
  var lastContact = "";
  if (Array.isArray(contact)) {
    contact.forEach(function(cntc) {
        lastContact += cntc.value + " ";
    })
  } else {
    lastContact = contact;
  }
  var guardianName;
  var gender = getGender(patientRole.patient);
  var religion = getReligion(patientRole.patient);
  var race = getRace(patientRole.patient);
  var mStatus = getMaritalStatus(patientRole.patient);
  var age = Math.floor(moment(new Date()).diff(patientRole.patient.birthTime["@value"],'years',true));
  var language = getLanguage(patientRole.patient);
  if(guardian) {
      var guardianEntity=guardian.guardianPerson ? guardian.guardianPerson : guardian.guardianOrganization;
      guardianName=buildName(guardianEntity.name);
  }
  var fName = buildFirstName(patientName);
  var patientMap = {
    "firstName":fName,
    "name":name,
    "dob":dob,
    "guardian":guardian!=undefined?guardian:"---",
    "address":address,
    "contact":lastContact!=undefined?lastContact:"UNKNOWN",
    "gender":gender,
    "race":race,
    "religion":religion,
    "maritalStatus":mStatus,
    "guardianName":guardianName!=undefined?guardianName:"---",
    "language":language,
    "age":age};
  return patientMap;
}

// Check recursively if a node contains a string
function searchString(str, obj) {
    for(var key in obj) {
        if(key.toString() == str){
            return true;
        }

        var elem = obj[key];
        if(typeof elem === "object")
            return searchString(str, elem); // call recursively
    }
    return false;
}

function buildTableCellObject(dataNode, txtObject, hasTh)
{
    return (
    {
        isTh: hasTh,
        text: (txtObject == null ? getNodeText(dataNode) : txtObject),
        colspan: (!dataNode || dataNode["@colspan"] == undefined ? null : dataNode["@colspan"]),
        rowspan: (!dataNode || dataNode["@rowspan"] == undefined ? null : dataNode["@rowspan"])
    });
}

/* Parse table information to a JS object */
function getNodeTableData(tableNode)
{
    if(!tableNode)
        return null;

    var tableData={headers:[], rows:[], hasSpans:false, caption:null};

    //Look for caption tag before the table tag
    if(searchString("caption", tableNode))
        tableData.caption = tableNode.caption;

    //Search for <td> inside <thead>
    var hasSameTd = false;

    try
    {
        // Save table header cells contents to tableData
        if(tableNode.thead)
        {
            //When more than 1 header exist
            if(!Array.isArray(tableNode.thead.tr))
                tableNode.thead.tr = [tableNode.thead.tr];
            else
                tableData.hasSpans=true;


            for(var j=0; j<tableNode.thead.tr.length; j++)
            {
                if(tableNode.thead.tr[j].td)
                    if(tableNode.thead.tr[j].th.length == tableNode.thead.tr[j].td.length)
                        hasSameTd = true;

                tableData.headers.push(new Array());

                if(!Array.isArray(tableNode.thead.tr[j].th))
                    tableNode.thead.tr[j].th=[tableNode.thead.tr[j].th];

                if(tableNode.thead.tr[j].td)
                    if(!Array.isArray(tableNode.thead.tr[j].td))
                        tableNode.thead.tr[j].td=[tableNode.thead.tr[j].td];

                for(var i=0; i<tableNode.thead.tr[j].th.length; i++)
                {
                    tableData.headers[tableData.headers.length-1].push(buildTableCellObject(tableNode.thead.tr[j].th[i], null, true));

                    if(hasSameTd)
                        tableData.headers[tableData.headers.length-1].push(buildTableCellObject(tableNode.thead.tr[j].td[i], null, false));

                    // check for colspan/rowspan
                    if(tableNode.thead.tr[j].th[i]["@rowspan"] || tableNode.thead.tr[j].th[i]["@colspan"])
                        tableData.hasSpans=true;
                }

                if(!hasSameTd && tableNode.thead.tr[j].td)
                {
                    for(var i=0; i<tableNode.thead.tr[j].td.length; i++)
                    {
                        tableData.headers[tableData.headers.length-1].push(buildTableCellObject(tableNode.thead.tr[j].td[i], null, false));

                        // check for colspan/rowspan
                        if(tableNode.thead.tr[j].td[i]["@rowspan"] || tableNode.thead.tr[j].td[i]["@colspan"])
                            tableData.hasSpans=true;
                    }
                }

                hasSameTd = false;
            }
        }
        else
            tableData.hasSpans=true;

        hasSameTd = false;

        //handle multiple tbodies
        if(!Array.isArray(tableNode.tbody))
           tableNode.tbody=[tableNode.tbody];

        if(tableNode.tbody.length > 1)
            tableData.hasSpans = true;

        // Save table body cells contents to tableData
        for(var b=0; b<tableNode.tbody.length; b++)
        {
            // if table only has one row, make it an arraw to access it in the loop below
            if(!Array.isArray(tableNode.tbody[b].tr))
               tableNode.tbody[b].tr=[tableNode.tbody[b].tr];

            tableData.rows.push([]);

            for(var r=0; r<tableNode.tbody[b].tr.length; r++)
            {
                tableData.rows[b].push([]);

                if(tableNode.tbody[b].tr[r].th || tableNode.tbody[b].tr[r].td)
                {
                    //if headers are found inside rows
                    if(tableNode.tbody[b].tr[r].th)
                    {
                        if(tableNode.tbody[b].tr[r].td && tableNode.tbody[b].tr[r].th.length == tableNode.tbody[b].tr[r].td.length)
                        {
                            hasSameTd = true;
                            tableData.hasSpans=true;
                        }
                        else
                        {
                            var jsonArr = new Array();

                            // if only one column is found, make it an array
                            if(Array.isArray(tableNode.tbody[b].tr[r].th))
                            {
                                for(var h=0; h<tableNode.tbody[b].tr[r].th.length; h++){
                                    var jsonArr = getTextObject(tableNode.tbody[b].tr[r].th[h], tableData, true);
                                    tableData.rows[b][r].push(jsonArr);
                                }
                            }
                            else
                            {
                                var jsonArr = getTextObject(tableNode.tbody[b].tr[r].th, tableData, true);
                                tableData.rows[b][r].push(jsonArr);
                            }

                            tableData.hasSpans=true;
                        }
                    }

                    if(tableNode.tbody[b].tr[r].td)
                    {
                        // if only one column is found, make it an array
                        if(!Array.isArray(tableNode.tbody[b].tr[r].td))
                            tableNode.tbody[b].tr[r].td=[tableNode.tbody[b].tr[r].td];

                        for(var c=0; c<tableNode.tbody[b].tr[r].td.length; c++)
                        {
                            if(hasSameTd)
                            {
                                if(!Array.isArray(tableNode.tbody[b].tr[r].th))
                                    tableNode.tbody[b].tr[r].th=[tableNode.tbody[b].tr[r].th];

                                var jsonArr = new Array();
                                jsonArr = getTextObject(tableNode.tbody[b].tr[r].th[c], tableData, true);

                                tableData.rows[b][r].push(jsonArr);
                            }

                            var jsonArr = new Array();
                            jsonArr = getTextObject(tableNode.tbody[b].tr[r].td[c], tableData, false);
                            tableData.rows[b][r].push(jsonArr);

                            if(c==0 &&  tableNode.tbody[b].tr[r].td[c] == "")
                                tableData.hasSpans=true;
                        }
                    }
                }
                hasSameTd = false;
            }
        }
    }
    catch(err){
        console.log("Error Reading file "+err);
        showAlert("danger", "Error reading the file.");
        return null;
    }

    return tableData;
}

/* Merge the elements of a person's name to make if readable */
function buildName(nameNode)
{
    if(!nameNode)
        return null;

    var name="";

    // use the first occurrence of name if more than one is found
    if(Array.isArray(nameNode))
        nameNode=nameNode[0];

    if(nameNode.prefix)
        name=getNodeText(nameNode.prefix)+" ";

    if(Array.isArray(nameNode.given))
    {
        for(var i=0; i<nameNode.given.length; i++)
            name+=getNodeText(nameNode.given[i])+" ";
    }
    else
        name+=getNodeText(nameNode.given)+" ";

    name+=getNodeText(nameNode.family);

    if(nameNode.suffix)
        name+=", "+getNodeText(nameNode.suffix);

    return name;
}

/* Get the first name of a person */
function buildFirstName(nameNode)
{
    if(!nameNode)
        return null;

    var name="";

    // use the first occurrence of name if more than one is found
    if(Array.isArray(nameNode))
        nameNode=nameNode[0];

    if(nameNode.prefix)
        name=getNodeText(nameNode.prefix)+" ";

    if(Array.isArray(nameNode.given))
    {
        for(var i=0; i<nameNode.given.length; i++)
            name+=getNodeText(nameNode.given[i])+" ";
    }
    else
        name+=getNodeText(nameNode.given)+" ";

    return name;
}

/* Merge the elements of an address to make if readable */
function buildAddress(addressNode)
{
    if(!addressNode)
        return null;

    var street, city, state, zip;

    // if more than one address, use the first one
    if(Array.isArray(addressNode))
        addressNode=addressNode[0];

    street=getNodeText(addressNode.streetAddressLine);
    city=getNodeText(addressNode.city);
    state=getNodeText(addressNode.state);
    zip=getNodeText(addressNode.postalCode);
    var address = street + ", " + city + ", " + state + ". " + zip;
    return address;
}

/* extract contact methods from the telecom node */
function buildTelecom(telecomNode)
{
    if(!telecomNode)
        return null;

    if(Array.isArray(telecomNode))
    {
        var contact = [];
        while (contact.length > 0) {
            contact.pop();
        }
        for(var i=0; i<telecomNode.length; i++)
        {
            var value=telecomNode[i]["@value"];
            contact.push({value});
        }
        return contact;
    }

    return telecomNode["@value"];
}

//Alerts function
 function showAlert(alertType, message)
 {
   var alert=$("<div/>").addClass("alert alert-dismissable alert-"+alertType)
   var closeBtn=$("<a/>").attr("href", "#").addClass("close").attr("data-dismiss", "alert").html("&times;");

   alert.html(closeBtn);
   alert.append(message);

   $("#alerts").append(alert);

   alert.fadeTo(2000, 500).slideUp(1500, function()
   {
     alert.alert("close");
   });
 }

ReactDOM.render(<TreeView treeData={menuData}/>, document.getElementById("tree_menu"));
ReactDOM.render(<FilterBox/>, document.getElementById("filter-container"));
ReactDOM.render(<DroppableContainer />, document.getElementById("link-container"));
