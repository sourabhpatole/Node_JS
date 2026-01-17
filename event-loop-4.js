const fs = require("fs");
setImmediate(() => console.log("setImmediate"));
setTimeout(() => console.log("Timer expired"), 0);
Promise.resolve(() => console.log("Promise"));
fs.readFile("./file.txt", "utf8", () => {
  console.log("File reading CB");
});
process.nextTick(() => {
  process.nextTick(() => console.log("Inner NextTick"));
  console.log("NextTick");
});
console.log("last line of code");
