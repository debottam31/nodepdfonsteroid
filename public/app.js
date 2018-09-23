'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generatetemplate = generatetemplate;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _Report = require('./Report');

var _Report2 = _interopRequireDefault(_Report);

var _checklist = require('../data/checklist.json');

var _checklist2 = _interopRequireDefault(_checklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import fs from 'fs';
//import css from './styles.css'
function generatetemplate() {
  var templatedata = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _checklist2.default;

  var body = (0, _server.renderToStaticMarkup)(_react2.default.createElement(_Report2.default, _checklist2.default));
  var template = '\n  <!DOCTYPE html>\n  <html>\n  <head>\n    <meta charset="UTF-8">\n    <title>Indecision App</title>\n    <link rel="stylesheet" href="styles.css">\n  </head>\n  <body>\n    <div id="app">' + body + '</div>\n  </body>\n\n  </html>\n  ';
  return template;
}