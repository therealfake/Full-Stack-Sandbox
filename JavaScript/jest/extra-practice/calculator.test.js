const calculator = require('./calculator')
it('adds two numbers', () => {
    expect(calculator.add(1,2)).toBe(3);
});

it('subtracts two numbers', () => {
    expect(calculator.subtract(3, 2)).toBe(1);
});

it('multiplies two numbers', () => {
    expect(calculator.multiply(3, 2)).toBe(6);
});

it('divides two numbers', () => {
    expect(calculator.divide(6, 2)).toBe(3);
});

it('divides two numbers', () => {
    expect(calculator.divide(6.1, 2)).toBe(3.05);
});