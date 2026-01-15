const crypto = require("node:crypto");
console.log("Hello world");

let a = 99;
let b = 43;
//
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("first key is generated");
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("second key is genereated");
});

function multiply(a, b) {
  return a * b;
}
console.log(multiply(7, 3));
