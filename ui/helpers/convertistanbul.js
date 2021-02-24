var pti = require('puppeteer-to-istanbul');
var fs=require('fs');

var data=fs.readFileSync('ui/uiCoverage/puppeteerCoverage/Notificati_1613634563.coverage.json', 'utf8');
var coverageData=JSON.parse(data);

pti.write(coverageData, {includeHostname: true, storagePath: 'ui/uiCoverage/.nyc_output'})