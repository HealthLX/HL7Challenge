var React = require('react');

var HL7RendererApp = React.createClass({
    
    render: function () {
        return (
        	<ul className='nav' id="side-menu">
	        	<li className="sidebar-search">
	                <div className="input-group custom-search-form">
	                    <input type="text" className="form-control" placeholder="Search..." />
	                    <span className="input-group-btn">
		                    <button className="btn btn-default" type="button">
		                        <i className="fa fa-search"></i>
		                    </button>
	                	</span>
	                </div>
	            </li>
	        </ul>
        );
      }

});
/* Module.exports instead of normal dom mounting */
module.exports = HL7RendererApp;

