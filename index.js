// Write a nodeJs function to see the memory of
// you OS.

const os = require("os");
const tot = os.totalmem();
const totalGb = tot / (1024 * 1024 * 1024);
console.log(`I have ${totalGb} Gb memory of RAM.`);

// Write a nodeJs function that uses OS module to
// get your computer free RAM in GB

const os = require("os");
const free = os.freemem();
const freeGb = free / (1024 * 1024 * 1024);
console.log(`I have ${freeGb} GB free memory`);

// write a js function that reads the content of the text file using fs.

const fs = require("fs");
const content = fs.readFileSync("./index.txt", {
  encoding: "utf-8",
});
console.log({ content });
