const stringLength = (string) => {
  const array = string.split('');
  if (array.length > 0 && array.length <= 10) {
    return array.length;
  }
  return Error;
};

const reverseString = (string) => {
  const array = string.split('').reverse().join('');
  return array;
};

class Calculator {
  add = (x, y) => x + y;

  subtract = (x, y) => x - y;

  divide = (x, y) => x / y;

  multiply = (x, y) => x * y;
}

const calculatorTest = new Calculator();

const capitalize = (string) => {
  const array = string.charAt(0).toUpperCase() + string.substring(1);
  return array;
};

module.exports = {
  stringLength, capitalize, reverseString, calculatorTest,
};