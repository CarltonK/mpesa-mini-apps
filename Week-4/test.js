// Import
const add = require('./index');

// Define tests - In any order
test('It can perform basic arithmetic', () => {
    // Assertion method
    expect(add(1,2)).toBe(3);
});

test('It can detect failed arithmetic', () => {
    // Assertion method
    expect(add(1,2)).not.toBe(4);
});

test('It can perform arithmetic with number string inputs', () => {
    // Assertion method
    expect(add('1','2')).toBe(3);
});

test('It cannot perform arithmetic with non-number string inputs', () => {
    // Assertion method
    expect(() => add('hello','world')).toThrow('Please provide valid numbers');
});

// Define test suites - Grouped tests
describe('Testing the add function', () => {
    // Define test
    describe('Number Inputs', () => {
        it('It can perform basic arithmetic', () => {
            expect(add(1, 2)).toBe(3);
        });

        it('It can detect failed arithmetic', () => {
            expect(add(1, 2)).not.toBe(4);
        });

    });
    describe('String Inputs', () => {
        it('It can perform arithmetic with number string inputs', () => {
            expect(add('1', '2')).toBe(3);
        });

        it('It cannot perform arithmetic with non-number string inputs', () => {
            expect(() => add('hello', 'world')).toThrow('Please provide valid numbers');
        });
    });
});