const { generatetemplate } = require('./app');
const path = require('path');
const fs = require('fs');

const htmlPath = path.join(__dirname, 'index.html');

try {
    fs.writeFileSync(htmlPath, generatetemplate(), 'utf8');
}
catch(e) {
console.log(e);
}
