const express = require('express');
const addRequestId =  require('express-request-id');
const bodyParser = require('body-parser');
const { writeHtml, createPdf, createHtmlPdf } = require('../utils/util');
const data = require('../../data/checklist.json');

const app = express();
app.use(addRequestId());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/pdf', async (req, res) => {
    try {
        //const htmlFilePath = await writeHtml(req.id, data); // write file  as index.html
        // const stream = await createPdf(htmlFilePath);
        const stream = await createHtmlPdf();
        // res.setHeader('Content-type', 'application/pdf');
        // res.setHeader('Content-Disposition', 'attachment; filename=report.pdf');
        // res.setHeader('Content-Length', stream.length);
        // res.end(stream);
        // console.log('Response send for success');
        // await createHtmlPdf()
        console.log('Response send for success');
        res.status(200).send('request processed')
    } catch(e) {
        res.status(500).send(e.message);
    }
});

process.on('uncaughtException', (err) => {
    console.log('error', 'Unhandled Exception', err);
  });
  
  process.on('uncaughtRejection', (err) => {
    console.log('error', 'Unhandled Rejection', err);
  });


app.listen(8080, () => {
    console.log('Server started on 8080');
});
