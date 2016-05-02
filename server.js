
var http = require('http');
helloServer = http.createServer(function(req,res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write("<html><head>");
res.write("<title>Hello World Page</title>");
res.write("</head>");
res.write("<body><H1>Hello World!</H1></body>");
res.end("</html>");
});

helloServer.listen(process.env.PORT || 8099);