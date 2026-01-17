const fs = require("fs");
const a = 100;
setImmediate(() => console.log("SetImmediate"));
fs.readFile("./file.txt", "utf8", () => {
  console.log("file reading CB");
});
setTimeout(() => {
  console.log("Timer expired!!");
}, 0);
function printA() {
  console.log("A " + a);
}
printA();
console.log("Last line of the file!!");
