var http = require('http');
var fs = require('fs');
var file = fs.readFileSync('index.html', 'utf-8');

http.createServer(function (req, res) {
	res.wtireHead(200);
	res.end(file);
	});
}).listen(5000);
