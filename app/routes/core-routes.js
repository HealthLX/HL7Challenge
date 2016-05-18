var ReactDOMServer = require('react-dom/server'),
React = require('react'),
HL7RendererApp = React.createFactory(require('../components/HL7RendererApp'));

module.exports = function(app) {

	app.get('/', function(req, res){
		// React.renderToString takes your component
    // and generates the markup
	var reactHtml = ReactDOMServer.renderToString(HL7RendererApp({}));
    // Output html rendered by react
	console.log(reactHtml);
    res.render('index.ejs', {reactOutput: reactHtml});
	});

};
