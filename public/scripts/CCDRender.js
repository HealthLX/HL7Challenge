var menuData =  [
  {
    text: 'Main Information',
    icon: 'glyphicon glyphicon-signal'
  },
  {
    text: 'Health Status',
    icon: 'glyphicon glyphicon-scale'
  },
  {
    text: 'CCDA Information',
    icon: 'glyphicon glyphicon-list-alt'
  }
];

var Panel=React.createClass(
{
    render: function()
    {
        var titleNodes = this.props.data.map(function(component)
        {
            return (
                <div className="col-md-4 col-sm-4 mb">
                    <div className="darkblue-panel pn">
                            <div className="darkblue-header">
                                <h5>{component.section.title}</h5>
                            </div>
                            <p className="user">{component.section.code.code}</p>
                    </div>
                </div>
            );
        });

        return(
            <div>
                {titleNodes}
            </div>
        );
    }
});

var PanelBox=React.createClass(
{
    render: function()
    {
        var nodes = this.props.data.map(function(component)
        {
          var panel;

          if(component.type === "48765-2")
              panel = (<Allergies title={component.title} data={component.data}/>);
          else
              panel = (<Allergies title={component.title} data={component.data}/>);

          return(panel);

        });

        return(
            <div>
                {nodes}
            </div>
        );
    }
});
class PatientDetails extends React.Component
{
    render()
    {
        var patientRole=this.props.patientRole;
        var patientName=patientRole.patient.name;
        var name=buildName(patientName);
        var dob=moment(patientRole.patient.birthTime.value).format("LL");
        var guardian=patientRole.patient.guardian;
        var address=buildAddress(patientRole.addr);
        var contact=buildTelecom(patientRole.telecom);
        var guardianName, guardianTag, addressTag, contactTag;

        if(guardian)
        {
            var guardianEntity=guardian.guardianPerson ? guardian.guardianPerson : guardian.guardianOrganization;
            guardianName=buildName(guardianEntity.name);
        }

        if(guardianName)
            guardianTag=(
                <div>
                    <h6>Guardian</h6>
                    <p>{guardianName}</p>
                </div>
            );

        if(address)
            addressTag=(
                <div>
                    <h6>Address</h6>
                    {address}
                </div>
            );

        if(contact)
            contactTag=(
                <div>
                    <h6>Contact</h6>
                    {contact}
                </div>
            );

        return(
            <div className="col-lg-4 col-md-4 col-sm-4 mb">
                <div className="white-panel pn">
                    <div className="white-header">
                        <h4><span className="fa fa-heartbeat fa-lg"></span> {name}</h4>
                    </div>
                    <h6>Birthdate</h6>
                    <p>{dob}</p>
                    {guardianTag}
                    {addressTag}
                    {contactTag}
                </div>
            </div>
        );
    }
}

class Allergies extends React.Component
{
    render()
    {
        if(!this.props.data)
            return;

        var elements=[];
        var rows=this.props.data.rows;
        var headers=this.props.data.headers;

        for(var r=0; r<rows.length; r++)
        {
            if(!elements[r])
                elements[r]=[];

            for(var i=0; i<headers.length; i++)
                elements[r].push(
                    <dl key={r+""+i} className="dl-horizontal">
                        <dt><span className="label label-default">{headers[i]}</span></dt>
                        <dd className="text-left">{rows[r][i]}</dd>
                    </dl>
                );
        }

        var listItems=(elements.map(function(element, index)
        {
            return(
                <div key={index} style={{paddingBottom: "5px"}}>
                    {element}
                </div>
            );
        }));

        return(
            <div className="col-lg-4 col-md-4 col-sm-4 mb">
                <div className="grey-panel pn">
                    <div className="grey-header">
                        <h4>{this.props.title}</h4>
                    </div>
                    <span className="pn-bg fa fa-heartbeat fa-5x"></span>
                    {listItems}
                </div>
            </div>
        );
    }
}

class XMLForm extends React.Component
{
    render()
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
                            <input type="file" name="file"/>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                    <input type="submit" form="upload-form" className="btn btn-primary" value="Upload"/>
                </div>
            </div>
        );
    }

    handleSubmit(event)
    {
        event.preventDefault();
        // this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);

        $.ajax(
        {
            url: $(event.target).prop("action"),
            type: "POST",
            data: new FormData(event.target),
            success: function(data)
            {
                debugvar=data;
                var components = data.ClinicalDocument.component.structuredBody.component;
                var title = data.ClinicalDocument.title;
                var patientRole=data.ClinicalDocument.recordTarget.patientRole;
                var allComponents = new Array();

                for(let i=0; i<components.length; i++)
                {
                    let section=components[i].section;
                    let sectionTitle=section.title;
                    console.log("displaying section: "+sectionTitle);

                    var tableData;
                    if(section.code.code !== "18776-5")
                      tableData=getNodeTableData(section.text.table);

                    allComponents.push({"type": section.code.code, "title": sectionTitle, "data": tableData});

                    /*switch(section.code.code)
                    {
                        // Allergies
                        case "48765-2":
                            // let tableData=getNodeTableData(section.text.table);
                            allComponents.push({"type": section.code.code, "title": sectionTitle, "data": tableData});
                            break;
                        case "10160-0":
                            allComponents.push({"type": section.code.code, "title": sectionTitle, "data": tableData});
                            /*iterate(section.text, medicationsArr);
                            console.log(searchString("table", section.text));
                            console.log(medicationsArr);

                            for(var j = 0; j < medicationsArr.length; j++){
                                console.log(medicationsArr[j]);
                            }*
                            
                            //ReactDOM.render(<Allergies title={sectionTitle} data={tableData}/>, document.getElementById("medications"));
                            //ReactDOM.render(<Allergies title={sectionTitle} data={tableData}/>, document.getElementById("medications"));
                            break;
                    }*/
                }

                $("#myModal").modal("toggle");

                /* Added by VV to get the sections, for build the menu. */

                var title = null;
                var titles=[];
                for(var i = 0; i < components.length; i++){

                    title = getSectionTitle(components[i].section)
                    if (title!=null) {
                        titles.push({"text": title, "code": components[i].section.code.code});
                    }
                }

                var originalData = [];
                originalData.push({text: 'Main Information',icon: 'glyphicon glyphicon-signal'});
                originalData.push({text: 'Health Status',icon: 'glyphicon glyphicon-scale'});
                originalData.push({text: 'CCDA Info',icon: 'glyphicon glyphicon-list-alt', nodes: titles});

                console.log("originalData: " + JSON.stringify(originalData));
                //ReactDOM.render(<Panel data={components}/>, document.getElementById("panels"));
                ReactDOM.render(<PanelBox data={allComponents}/>, document.getElementById("panels"));
                ReactDOM.render(<PatientDetails patientRole={patientRole}/>, document.getElementById("patientDetails"));
                ReactDOM.render(<TreeView treeData={originalData}/>, document.getElementById("tree_menu"));
            },
            error: function(err)
            {
                var message = "";

                if(err.responseText != null)
                  message = $.parseJSON(err.responseText).errorMessage;
                else if(err.statusText != null)
                  message = err.statusText;

                if(err.status == 0)
                  message = "Service Unavailable";

                showAlert("danger", "Error: "+message);
            },
            processData: false,
            contentType: false
        });
    }
}

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
      expandIcon: 'glyphicon glyphicon-plus',
      collapseIcon: 'glyphicon glyphicon-minus',
      emptyIcon: 'glyphicon',
      nodeIcon: 'glyphicon glyphicon-asterisk',

      color: '#0A3F6C',
      backColor: undefined,
      borderColor: undefined,
      onhoverColor: '#F5F5F5', // TODO Not implemented yet, investigate radium.js 'A toolchain for React component styling'
      selectedColor: '#FFFFFF',
      selectedBackColor: '#428bca',

      enableLinks: false,
      highlightSelected: true,
      showBorder: true,
      showTags: false,

      nodes: []
    }
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

  render: function() {
    this.treeData = this.props.treeData;
    this.setNodeId({ nodes: this.treeData });

    var children = [];
    if (this.treeData) {
      var _this = this;
      this.treeData.forEach(function (node) {
        children.push(React.createElement(TreeNode, {node: node,
                                level: 1,
                                visible: true,
                                options: _this.props}));
      });
    }

    return (
      <div id="treeview" clasName="treeview">
        <ul className="list-group">
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

    var indents = [];
    for (var i = 0; i < this.props.level-1; i++) {
      indents.push(React.createElement("span", {className: "indent"}));
    }

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
        React.createElement("a", {href: node.href/*style="color:inherit;"*/},
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
      node.nodes.forEach(function (node) {
        children.push(React.createElement(TreeNode, {node: node,
                                level: _this.props.level+1,
                                visible: _this.state.expanded && _this.props.visible,
                                options: options}));
      });
    }

    return (
      React.createElement("li", {className: "list-group-item",
          style: style,
          onClick: this.toggleSelected.bind(this, node.nodeId),
          key: node.nodeId},
        indents,
        expandCollapseIcon,
        nodeIcon,
        nodeText,
        badges,
        children
      )
    );
  }
});

/*** Utility functions ***/
// Extract just the text inside a node when there might be additional attributes (in that case the text content is inside "$")
function getNodeText(nodeElement)
{
    if(!nodeElement)
        return null;
    if(typeof nodeElement==="string" || nodeElement instanceof String)
        return nodeElement;
    return nodeElement.$
}

// Extract just the title of a "Section" node.
function getSectionTitle(nodeElement)
{
    if(!nodeElement)
        return null;
    if (nodeElement.title !== null)
        return nodeElement.title;
}

//Obtain all text from an unformated node
function iterate(obj, jsonArr) {
    for(var key in obj) {
        var elem = obj[key];

        if(typeof elem === "object") {
            iterate(elem, jsonArr); // call recursively
        }
        else{
            var patt = /ID|border|width|height|styleCode|cellpadding|cellspacing/;

            if(!patt.test(key.toString())){
                jsonArr.push({"key":key.toString(),"text":elem});
            }
        }
    }
}

/* Convert the date to Human Readable String (HRS) */
function convertDateToHRS(dateStr) {
  // Receive a HL7 format date [YYYYMMDDHHMM+/-ZZZZ] and convert it to local date object.
 }

function searchString(str, obj) {
    for(var key in obj) {
        if(key.toString() === str)
            return true;

        var elem = obj[key];

        if(typeof elem === "object") {
            searchString(elem); // call recursively
        }
    }

    return false;
}

function getNodeTableData(tableNode)
{
    if(!tableNode)
        return null;

    var tableData={headers:[], rows:[]}

    if(tableNode.thead)
    {
      if(!Array.isArray(tableNode.thead.tr.th))
        tableNode.thead.tr.th=[tableNode.thead.tr.th];
      
      for(var i=0; i<tableNode.thead.tr.th.length; i++)
          tableData.headers.push(getNodeText(tableNode.thead.tr.th[i]));
    }     
    else
      tableData.headers.push(new Array());        

    if(!Array.isArray(tableNode.tbody.tr))
       tableNode.tbody.tr=[tableNode.tbody.tr];

    for(var r=0; r<tableNode.tbody.tr.length; r++)
    {
        tableData.rows[r]=[];
        if(tableNode.tbody.tr[r].td)
            for(var c=0; c<tableNode.tbody.tr[r].td.length; c++)
                tableData.rows[r].push(getNodeText(tableNode.tbody.tr[r].td[c]));
    }

    debug2=tableData;
    return tableData;
}

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

    return(
        <div>
            <p>{street}</p>
            <p>{city}, {state} {zip}</p>
        </div>
    );
}

//contact information
function buildTelecom(telecomNode)
{
    if(!telecomNode)
        return null;

    if(Array.isArray(telecomNode))
    {
        var contact=[];

        for(var i=0; i<telecomNode.length; i++)
        {
            var value=telecomNode[i].value;
            contact.push(
                <div key={i}>
                    <a href={value}>{value}</a>
                </div>
            );
        }
        return contact;
    }

    return(
        <div key="0">
            <a href={telecomNode.value}>{telecomNode.value}</a>
        </div>
    );
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

ReactDOM.render(<XMLForm/>, document.getElementById("modal-container"));
ReactDOM.render(<TreeView treeData={menuData}/>, document.getElementById("tree_menu"));
