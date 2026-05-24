const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(numArray) {
  return numArray.reduce((accum, curr) => accum + curr, 0);
};

const multiply = function(numArray) {
  return numArray.reduce((accum, curr) => accum * curr, 1);
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  const product = 1;
  for (let i = 2; i <= num; i++) product *= i;

  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
