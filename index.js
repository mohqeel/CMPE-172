var http = require('http');
var fs = require('fs');

http.createServer( function (req, res) {
	fs.readFile('index.html', function(err, data) {
		if(err) {
			res.writteHead(404);
			res.end(JSON.stringify(err));
			return;
		}
		res.writeHead(200);
		res.end(data);
	});
}).listen(process.env.PORT || 5000);

if(typeof process.env.PORT !== 'undefined'){
	console.log("Server started on port" + process.env.PORT);
} else {
	console.log("Server started on port 5000");
}
