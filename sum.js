// module protect their veriable and function from leaking

console.log("Sum module is executed");

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}
module.exports = calculateSum;
