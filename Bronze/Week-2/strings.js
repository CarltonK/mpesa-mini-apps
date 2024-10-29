const firstName = "John";
const secondName = 'Doe';

// Concatenation => Addition of two or more strings
const concatenationResult = firstName + " " + secondName;
console.log('Concatenation Result', concatenationResult);

// Methods
// 1. Split
const splitResult = concatenationResult.split(' ');
console.log('Split Result =',splitResult);

// 2. Slice
const sliceResult = concatenationResult.slice(0,2);
console.log('Slice Result =',sliceResult);

// 3. Starts With
const startsWithResult = concatenationResult.startsWith('Jo');
console.log('StartsWith Result =',startsWithResult);

// 4. Includes
const includesResult = concatenationResult.includes('xxx');
console.log('Includes Result =',includesResult);

// 5. Index Of
const indexResult = concatenationResult.indexOf('o');
console.log('Index of Result =',indexResult);

