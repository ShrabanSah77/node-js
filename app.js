console.log("Hello Nodejs");

// const http = require("http");
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("Hello NodeJs!");
//   })
//   .listen(8080);
// console.log("App running on port 8080");


const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello mother fucker!");
  })
  .listen(8080);
console.log("App is running on port 8080");

// Write a nodejs function that uses OS module to get
// your computer RAM in GB

