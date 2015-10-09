var http = require('http');
console.log('test');
http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome Initial Page');
}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');
