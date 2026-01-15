const crypto = require("node:crypto");
console.log("Hello world");

let a = 99;
let b = 43;
//synchronous function will block the main thread DON"t use IT
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("first key is generated");
// async function
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("second key is genereated");
});

function multiply(a, b) {
  return a * b;
}
console.log(multiply(7, 3));
