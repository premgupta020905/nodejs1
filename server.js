const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    fs.readFile("home.html", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error");
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    fs.readFile("about.html", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error");
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/contact") {
    fs.readFile("contact.html", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error");
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, {"content-type":"text/html"});
    res.end("<h1>404 - Page not found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000 ");
});
