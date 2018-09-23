import React from 'react';
import {renderToStaticMarkup,} from 'react-dom/server';
// import fs from 'fs';
//import css from './styles.css'
import Report from './Report'
import jsonData from '../data/checklist.json';


export function generatetemplate(templatedata = jsonData) {
  const body = renderToStaticMarkup(<Report {...jsonData} />)
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
