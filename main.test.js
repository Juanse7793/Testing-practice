const main = require('./main.js');
// const reverseString = require('./sum.js');

describe('string length', () => {
  test('add hi to be equal 2', () => {
    expect(main.stringLength('hi')).toBe(2);
  });

  test('add hola juancho', () => {
    expect(main.stringLength('hola juancho')).toBe(Error);
  });
});

describe('reverse string', () => {
  test('add anita should return atina', () => {
    expect(main.reverseString('anita')).toBe('atina');
  });

  test('add juancho should return ohcnauj', () => {
    expect(main.reverseString('juancho')).toBe('ohcnauj');
  });
});

describe('calculator', () => {
  test('add 4 to 5 and return 9', () => {
    expect(main.calculatorTest.add(5, 4)).toBe(9);
  });

  test('subtract 4 to 5 and return 1', () => {
    expect(main.calculatorTest.subtract(5, 4)).toBe(1);
  });

  test('multiply 5 times 4 and return 20', () => {
    expect(main.calculatorTest.multiply(5, 4)).toBe(20);
  });

  test('divide 20 into 4 and return 5', () => {
    expect(main.calculatorTest.divide(20, 4)).toBe(5);
  });
});

describe('captital letter', () => {
  test('add juan and return Juan', () => {
    expect(main.capitalize('juan')).toBe('Juan');
  });
});