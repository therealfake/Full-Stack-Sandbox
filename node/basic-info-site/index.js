var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "./static-pages";
  if (q.pathname == "/" || q.pathname == "/index") {
    filename = filename.concat('/index');
  } else if (q.pathname == "/about" || q.pathname == "/contact-me") {
    filename = filename.concat(q.pathname);
  } else {
    filename = filename.concat("/404");
  }
  filename = filename.concat(".html");
  console.log(filename);
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log(data);
    res.write(data);
    return res.end();
  });
}).listen(8080);