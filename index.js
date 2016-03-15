var http = require('http');
var fs = require('fs');

fs.readFile('index.html', 'utf-8', function(err, data) {
        if(err) {
                return console.log(err);
        }
        console.log('Loaded the HTML page');
        http.createServer(function(req, res) {
                res.writeHeader(200, {"Content-Type": "text/html"});
                res.write(html);
                res.end();
        }).listen(8080);
        console.log('server started on port 8080');
});
