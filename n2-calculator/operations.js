// Name: Raven Kristian Abarintos
// Section: IV-BSIT C
// Activity: N2
// Date: 2026-11-15

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) throw new Error("Division by zero is not allowed.");
  return a / b;
}
function average(numbers) {
  if (numbers.length === 0) throw new Error("Average needs at least one number.");
  return numbers.reduce((total, number) => total + number, 0) / numbers.length;
}

module.exports = { add, subtract, multiply, divide, average };
