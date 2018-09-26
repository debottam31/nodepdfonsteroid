'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _htmlPdf = require('html-pdf');

var _htmlPdf2 = _interopRequireDefault(_htmlPdf);

var _Report = require('./Report');

var _Report2 = _interopRequireDefault(_Report);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _checklist = require('../data/checklist.json');

var _checklist2 = _interopRequireDefault(_checklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cssPath = _path2.default.join(process.cwd(), 'public', 'styles.css');
var style = _fs2.default.readFileSync(cssPath, 'utf-8');
//  console.log(style);
var body = (0, _server.renderToStaticMarkup)(_react2.default.createElement(_Report2.default, _checklist2.default));

var template = '\n  <!DOCTYPE html>\n  <html>\n  <head>\n    <meta charset="UTF-8">\n    <title>Report</title>\n    <style>' + style + '</style>\n  </head>\n  <body>\n  <div id="pageHeader-first"></div>\n  <div id="app">' + body + '</div>\n  </body>\n\n  </html>';

// fs.writeFileSync('data.html', template,'utf-8');

var option = {
  "format": "A4",
  "orientation": "landscape",
  "header": {
    "height": "35px",
    "contents": '<div style=\'background-color : #9B9B9B;margin: 0 30px;padding : 7px;font-weight : bold\'>\n    <div style=\'display : inline-block;width : 75%\'>Line Item(s)</div>\n    <div style=\'display : inline-block;width : 24%\'>Response</div>\n   </div>'
  },
  "footer": {
    "height": "20px",
    "contents": {
      default: '<div style="color:black;text-align:right";margin: 0 30px ;padding : 30px;>page: {{page}}/{{pages}}</div>' // fallback value
    }
  },
  "timeout": 300000000
};

_htmlPdf2.default.create(template, option).toFile('data.pdf', function (err, res) {
  if (err) {
    console.log(err);
  }
  console.log(res.filename);
});

// export function generatetemplate(templatedata=jsonData) {
//   const cssPath = path.join(process.cwd(), 'public', `styles.css`);
//   const style = fs.readFileSync(cssPath,'utf-8')
//   console.log(style);
//   const body = renderToStaticMarkup(<Report {...templatedata} />)
//   const template = `
//   <!DOCTYPE html>
//   <html>
//   <head>
//     <meta charset="UTF-8">
//     <title>Indecision App</title>
//     <style>${style}</style>
//   </head>
//   <body>
//     <div id="app">${body}</div>
//   </body>

//   </html>
//   `
//   return template;

// }