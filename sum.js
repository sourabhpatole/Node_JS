// module protect their veriable and function from leaking

console.log("Sum module is executed");

var x = "Helo world form sum";

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}
module.exports = { x: x, calculateSum };
