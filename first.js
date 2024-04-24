// Use your created module here

const second = require("./second");
const today = second.today();
const day = second.getDay();
console.log({today, day});


// Write a js module to create string funcitons.

// convert to proper case; "shraban sah" => "shraban sah"
// -convert to truncate; "shraban is a good boy" => "shraban sah is a ...";
// -join two string; "shraban" "sah" => "shraban sah"