var React = require('react');

var HL7RendererApp = React.createClass({
    
    render: function () {
        return (
        	<ul class='nav' id="side-menu">
	        	<li class="sidebar-search">
	                <div class="input-group custom-search-form">
	                    <input type="text" class="form-control" placeholder="Search..." />
	                    <span class="input-group-btn">
		                    <button class="btn btn-default" type="button">
		                        <i class="fa fa-search"></i>
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

