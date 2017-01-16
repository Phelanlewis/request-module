var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Downloading Image...')
         console.log('Response Status Code: ', response.statusCode);
         console.log('Content Type: ', response.headers['content-type'])
       })
       .pipe(fs.createWriteStream('./future.jpg'));
       console.log('Download complete!')
