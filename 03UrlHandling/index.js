const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}:${req.url} New request received\n`;

  const myUrl = url.parse(req.url, true);
  console.log(myUrl);

  fs.appendFile("log.txt", log, () => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home Page");
        break;

      case "/about":
        const username = myUrl.query.myname;
        res.end(`hii ${username}`);
        break;

      case "/search":
        const search = myUrl.query.search_query;
        res.end("here are your result " + search);
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
