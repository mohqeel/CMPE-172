var http = require('http');
var fs = require('fs');
var file = fs.readFileSync('index.html', 'utf-8');

http.createServer(function (req, res) {
	res.writeHead(200);
	res.end(file);
}).listen(process.env.PORT || 5000);
