/** @jsx React.DOM */

var React = require('react');
var HL7RendererApp = require('./components/HL7RendererApp');

var mountNode = document.getElementById('main_menu');

ReactDOM.render(<HL7RendererApp content={content}/>, mountNode);
