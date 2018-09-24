import React from 'react';
import {renderToStaticMarkup,} from 'react-dom/server';
import Report from './Report'


export function generatetemplate(templatedata) {
  const body = renderToStaticMarkup(<Report {...templatedata} />)
  const template = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Indecision App</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div id="app">${body}</div>
  </body>

  </html>
  `
  return template;

}
