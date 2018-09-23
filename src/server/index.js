const express = require('express');
const bodyParser = require('body-parser');

const puppeteer  = require('puppeteer');
const path = require('path');
const fs = require('fs-extra');
const {generatetemplate} = require('../../public/app');
console.log(generatetemplate);
const createPdf = async () => {

    const pathToHtml = path.join(process.cwd(), 'public', 'index.html');
    const options = {
        path: 'exmple.pdf',
        format: 'A4',
        printBackground: true,
        landscape: true
    }
    try {
        // const html = generatetemplate(); //await fs.readFile(pathToHtml, 'utf8');
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        // await page.goto('https://www.google.com', { waitUntil: 'networkidle0', timeout: 300000});
        await page.goto(pathToHtml);
        // await page.setContent(html);
        await page.emulateMedia('print');
        await page.pdf(options);
        // // await page.evaluate(async () => {
        // // });
        await browser.close();
    } catch (e) {
        throw e
    }
}


createPdf().then().catch(e => { console.log(e)
// process.exit();
});

// const app = express();

// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());

// app.get('/pdf', (req, res) => {
// res.send('<h1>hrhrrhrrhrhrh</h1>')
// })