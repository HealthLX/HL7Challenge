var Panel=React.createClass(
{
    render: function()
    {
        var titleNodes = this.props.data.map(function(component)
        {
            return (
                <div className="col-md-4 col-sm-4 mb">
                    <div className="darkblue-panel pn">
                            <div class="darkblue-header">
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
                        <h4>{name}</h4>
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
                //debugvar=data;
                var components = data.ClinicalDocument.component.structuredBody.component;
                var title = data.ClinicalDocument.title;
                var patientRole=data.ClinicalDocument.recordTarget.patientRole;
                var allergiesTitle = "";
                var medicationsTitle = "";
                var medicationsArr = new Array();

                for(let i=0; i<components.length; i++)
                {
                    let sectionItems=components[i];
                    let sectionTitle=sectionItems.section.title;
                    let itemsArray=new Array();

                    console.log("displaying section: "+sectionTitle);

                    switch(components[i].section.code.code)
                    {
                        // Allergies
                        case "48765-2":
                            iterate(sectionItems.section.text, itemsArray);
                            console.log(searchString("table", sectionItems.section.text));

                            for(var j=0; j<itemsArray.length; j++)
                            {
                                console.log(itemsArray[j]);
                            }
                            break;
                        case "10160-0":
                                var medications = components[i];
                                medicationsTitle = components[i].section.title;

                                iterate(medications.section.text, medicationsArr);
                                console.log(searchString("table", medications.section.text));
                                console.log(medicationsArr);

                                for(var j = 0; j < medicationsArr.length; j++){
                                    console.log(medicationsArr[j]);
                                }
                                break;
                    }
                }

                $("#myModal").modal("toggle");

                ReactDOM.render(<Panel data={components}/>, document.getElementById("panels"));
                ReactDOM.render(<PatientDetails patientRole={patientRole}/>, document.getElementById("patientDetails"));
            },
            error: function(err)
            {
                console.log("error: "+err);
            },
            processData: false,
            contentType: false
        });
    }
}

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
                <div>
                    <a href={value}>{value}</a>
                </div>
            );
        }
        return contact;
    }

    return(
        <div>
            <a href={telecomNode.value}>{telecomNode.value}</a>
        </div>
    );
}

ReactDOM.render(<XMLForm/>, document.getElementById("modal-container"));
