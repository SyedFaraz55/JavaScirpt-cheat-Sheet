var http = require('http');
var fs = require('fs');

const port = 8080;

fs.readFile('./ndex.php',function(err,html){
    if(err) throw err;

    http.createServer(function(request,response) {
        response.writeHeader(200,{"Content-Type":"text/html"});
        response.write(html);
        response.end();
    }).listen(port);
});