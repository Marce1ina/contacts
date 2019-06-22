const http = require("http");
const fs = require("fs");

function onRequest(request, response) {
    switch (request.url) {
        case "/":
            fs.readFile("dist/index.html", function(err, html) {
                response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                response.write(html);
                response.end();
            });
            break;
        case "/style.css":
            fs.readFile("dist/style.css", function(err, css) {
                response.writeHead(200, { "Content-Type": "text/css; charset=utf-8" });
                response.write(css);
                response.end();
            });
            break;
        case "/main.js":
            fs.readFile("dist/main.js", function(err, js) {
                writeJSResponse(js);
            });
            break;
        default:
            console.log(request.url);
    }

    function writeJSResponse(js) {
        response.writeHead(200, { "Content-Type": "text/javascript; charset=utf-8" });
        response.write(js);
        response.end();
    }
}

http.createServer(onRequest).listen(9000);
