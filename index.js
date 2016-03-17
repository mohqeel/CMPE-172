var http = require('http');
var fs = require('fs');

var file = fs.readFileSync('index.html', 'utf-8');
console.log("Index file read");

http.createServer(function (req, res) {
	res.writeHead(200);
	res.end(file);
}).listen(process.env.PORT || 5000);

if(typeof process.env.PORT !== 'undefined'){
	console.log("Server started on port" + process.env.PORT);
} else {
	console.log("Server started on port 5000");
}
