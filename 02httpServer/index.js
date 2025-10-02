const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  //   console.log("New Request Received.");
  const log = `${Date.now()}:${req.url} New request received\n`;

  fs.appendFile("log.txt", log, () => {
    switch (req.url) {
      case "/":
        res.end("Home Page");
        break;

      case "/about":
        res.end("I am Yash Sorathiya");
        break;

      default:
        res.end("404 Not Found");
        break;
    }
  });
});

myServer.listen(8000, () => {
  console.log("Server Started!");
});
