const fs = require("fs");
setImmediate(() => console.log("setImmediate"));
setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve("Promise").then(console.log);
fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => {
    console.log("Second Timer");
  }, 0);
  process.nextTick(() => console.log("2 nd nextTick"));
  setImmediate(() => console.log("2nd setImmediate"));
  console.log("file reading CB");
});

process.nextTick(() => console.log("nextTick"));
console.log("Last line of the file");
