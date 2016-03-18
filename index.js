var http = require('http');
var fs = require('fs');
var fileName = 'index.html'

fs.exists(fileName, function(exists) {
	if(exists) {
		fs.stat(fileName, function(error, stats) {
			fs.open(fileName, 'r', function(error, fd) {
				var buffer = new Buffer(stats.size);

				fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
					var data = buffer.toString('utf-8', 0, buffer.length);

					http.createServer(function(req, res) {
						res.writeHead(200);
						res.end(data);
					}).listen(process.env.PORT || 5000);
					
					if(typeof process.env.PORT !== 'undefined'){
						console.log("Server started on port" + process.env.PORT);
					} else {
						console.log("Server started on port 5000");
					}
					fs.close(fd);
				});
			});
		});
	}
});
