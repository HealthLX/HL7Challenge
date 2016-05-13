var Panel=React.createClass(
{
    render: function()
    {
        console.log(this.props.data);

        var titleNodes = this.props.data.map(function(component)
        {
            return(
                <div className="col-lg-4 col-md-4 col-sm-4 mb">
                    <div className="darkblue-panel pn">
                        <div className="darkblue-panel pn">
                            <i className="fa fa-twitter fa-4x"></i>
                            <p>{component.title}</p>
                            <p className="user">@Alvrz_is</p>
                        </div>
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
        // document.getElementById('heading').scrollIntoView();
        // this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
        console.log("url: "+$(event.target).prop("action"));
        console.log("type: "+$(event.target).prop("method"));

        $.ajax(
        {
            url: $(event.target).prop("action"),
            type: "POST",
            data: new FormData(event.target),
            success: function(data)
            {
                console.log("success: "+data);

                var components = data.ClinicalDocument.component.structuredBody.component;
                var title = data.ClinicalDocument.title;
                var titles = new Array();

                for(var i = 0; i < components.length; i++){
                    console.log(components[i].section.title);
                    titles[i]= {"title": components[i].section.title};
                }

                $('#myModal').modal('toggle');

                ReactDOM.render(<Panel data={titles}/>, document.getElementById('panels'));


            },
            error: function(err)
            {
                debugvar=err;
                console.log("error: "+err);
            },
            processData: false,
            contentType: false
        });
    }
}

ReactDOM.render(<XMLForm/>, document.getElementById('modal-container'));
