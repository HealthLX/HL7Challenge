/** @jsx React.DOM */

var React = require('react');
var ReactDom = require('react-dom');
var HL7RendererApp = require('./components/HL7RendererApp');

var mountNode = document.getElementById('main_menu');

ReactDOM.render(<HL7RendererApp />, mountNode);
