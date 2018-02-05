


// // HTTP Portion
// var http = require('http');
// var fs = require('fs'); // Using the filesystem module
// var httpServer = http.createServer(requestHandler);
// var url = require('url');
// httpServer.listen(8080);

// function requestHandler(req, res) {

// 	var parsedUrl = url.parse(req.url);
// 	console.log("The Request is: " + parsedUrl.pathname);
		
// 	fs.readFile(__dirname + parsedUrl.pathname, 
// 		// Callback function for reading
// 		function (err, data) {
// 			// if there is an error
// 			if (err) {
// 				res.writeHead(500);
// 				return res.end('Error loading ' + parsedUrl.pathname);
// 			}
// 			// Otherwise, send the data, the contents of the file
// 			res.writeHead(200);
// 			res.end(data);
//   		}
//   	);
  	
//   	// Tell server where to look for files
//     // app.use(express.static('public'));

//   	/*
//   	res.writeHead(200);
//   	res.end("Life is wonderful");
//   	*/
// }

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('/public/index.html')
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});