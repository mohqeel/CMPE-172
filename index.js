var http = require('http');
var fs = require('fs');

var html = fs.readFileSync('index.html', 'utf-8');

http.createServer(function(request, response) {
	res.writeHeader(200, {"Content-Type": "text/html"});
        res.write(html);
	res.end();
}).listen(8080);
console.log('server started on port 8080');
