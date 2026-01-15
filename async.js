const fs = require("fs");
const http = require("https");
console.log("Hello World");

var a = 1078467;
var b = 20897;
fs.readFileSync("./file.txt", "utf8");
console.log("Sourabh");
http.get("https://dummyjson.com/products/1", (res) => {
  console.log("fetched data successfully");
});
setTimeout(() => {
  console.log("Set Timeout is there and called after 5 seconds");
}, 5000);
// fs.readFile("./file.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log("File data:", data);
// });

function multiplyFN(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFN(a, b);
console.log(c);
