// const http = require("http");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("Hello World");
//   })
//   .listen(8080);

// console.log("Hello nodejs");
// console.log("App running on port 8080");

// Exaple: write a js function that uses OS module to get your computer ram in GB
// Reference: javascript.os

const os = require("os");
const tot = os.totalmem();
const inGb = tot / (1024 * 1024 * 1024);
console.log(`I have ${inGb} Gb memory of RAM`);

// write a js function that reads the content of the text file using fs.

const fs = require("fs");
const content = fs.readFileSync("./index.txt", {
  encoding: "utf-8",
});

console.log({ content });
