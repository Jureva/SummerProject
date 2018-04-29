
var http = require('http');
var mongo = require('mongodb'); 

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hi World!');
}).listen(8080); 
