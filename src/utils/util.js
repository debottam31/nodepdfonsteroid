const path = require('path');
const puppeteer  = require('puppeteer');
const fs = require('fs');
const { generatetemplate } = require('../../public/app');
module.exports = {
    writeHtml: (reqid, reportData) => new Promise((resolve, reject) => {
        const htmlPath = path.join(process.cwd(), 'public', `index${reqid}.html`);
        try {
            fs.writeFile(htmlPath, generatetemplate(reportData), (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(htmlPath);
            });
           // fs.writeFileSync(htmlPath, generatetemplate(), 'utf8');
        }
        catch(e) {
            console.log(e);
        }
    }),
    createPdf: async (path) => {
        // const pathToHtml = path.join(process.cwd(), 'public', 'index.html');
        const options = {
            format: 'A4',
            printBackground: true,
            landscape: true,
        }
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(path, {timeout:0, waitUntil: 'domcontentloaded'});
           //  const p1 =  await page.metrics();
            await page.emulateMedia('screen');
            const p2 = await page.pdf(options);
            await browser.close();
            return p2;
        } catch (e) {
            throw e
        }
    },
    createHtmlPdf: (path) => {

    }
}