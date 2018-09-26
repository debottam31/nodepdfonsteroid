import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import fs from 'fs';
import htmlPdf from 'html-pdf';
import Report from './Report'
import path from 'path';
import jsonData from '../data/checklist.json'


const cssPath = path.join(process.cwd(), 'public', `styles.css`);
const style = fs.readFileSync(cssPath,'utf-8')
//  console.log(style);
 const body = renderToStaticMarkup(<Report {...jsonData} />)

 const template = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Report</title>
    <style>${style}</style>
  </head>
  <body>
  <div id="pageHeader-first"></div>
  <div id="app">${body}</div>
  </body>

  </html>`

// fs.writeFileSync('data.html', template,'utf-8');

const option = {
  "format": "A4",
  "orientation": "landscape",
  "header": {
    "height": "35px",
    "contents" :`<div style='background-color : #9B9B9B;margin: 0 30px;padding : 7px;font-weight : bold'>
    <div style='display : inline-block;width : 75%'>Line Item(s)</div>
    <div style='display : inline-block;width : 24%'>Response</div>
   </div>`
  },
  "footer": {
    "height": "20px",
    "contents": {
      default: '<div style="color:black;text-align:right";margin: 0 30px ;padding : 30px;>page: {{page}}/{{pages}}</div>', // fallback value
      }
  },
  "timeout": 300000000,
}

htmlPdf.create(template,option).toFile('data.pdf', (err, res)=>{
  if(err){
    console.log(err)
  }
  console.log(res.filename)
})

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
