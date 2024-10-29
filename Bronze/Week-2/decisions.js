// IF
// Syntax
/* 
 * if (boolean) {} else {}
 */

// Example (1)
const myBoolean = true;

if (myBoolean == true) {
    console.log('Indeed my boolean is true');
} else {
    console.log('Try again because it is false');
}

if (myBoolean) {
    console.log('Indeed my boolean is true');
} else {
    console.log('Try again because it is false');
}

// Example (2)
const myString = 'Hello World';
if (myString.startsWith('H')) {
    console.log('Correct');
} else {
    console.log('Wrong');
}

// Example (3)
const myNumber = 10;
if (myNumber * 10 == 100) {
    console.log('Correct');
} else {
    console.log('Wrong');
}