let http = require('http');
let db = require('mysql')
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World! Im Isaac Juma');
}).listen(8080);
console.log('server started');

const exp = require('express');
exp.Router('')
exp.application = require('express');