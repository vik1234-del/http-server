//creating a simple server in nodejs
const http = require("http");
const path = require("path");
const fs = require("fs");

//create server that returns name when url/home is opened
const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    fs.readFile("./hello.txt", (err, data) => {
      if (err) {
        console.log(err);
        res.write("Internal Server Error");
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Error, page not found");
    res.end();
  }
});

server.listen(8900, () => {
  console.log("Server listening on port 8900");
});
