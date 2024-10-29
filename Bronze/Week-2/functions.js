// Function -> Unit of Work
// Syntax
/* 
function nameOfFunction() {}
 */

// Example(1) -> A function that given two numbers returns the result of the addition of those numbers
function addition(firstNum, secondNum) {
    if (typeof firstNum != 'number') {
        return null;
    } else if (typeof secondNum != 'number') {
        return null;
    } else {
        const result = firstNum + secondNum;
        return result;
    }
}

function concatenation(first, second) {
    if (typeof first != 'string') {
        return null;
    } else if (typeof second != 'string') {
        return null;
    } else {
        const result = first + second;
        return result;
    }
}

const additionResult = addition(5, 10);
const concResult = concatenation('Hello', 'World')

console.log('Conc Result', concResult)