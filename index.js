var http = require('http');
var fs = require('fs');

fs.readFile('index.html', 'utf-8', function(err, data) {
        if(err) {
                return console.log(err);
        }
	return data;
});
