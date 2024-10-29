const firstNum = 10;
const secondNum = 100;

// Addition
const additionResult = firstNum + secondNum;
console.log('Addition Result =', additionResult);

// Subtraction
const subtractionResult = secondNum - firstNum;
console.log('Subtraction Result =', subtractionResult);

// Multiplication
const multiplicationResult = secondNum * firstNum;
console.log('Multiplication Result =', multiplicationResult);

// Division
const divisionResult = secondNum / firstNum;
console.log('Division Result =', divisionResult);

// Methods
const fixedNumber = divisionResult.toFixed(2);
console.log('Fixed Result =', fixedNumber);

const numberAsString = fixedNumber.toString();
console.log('Number as String Result =', numberAsString);

console.log('The type is',typeof divisionResult);