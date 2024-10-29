/* 
 * Composition - Combining small functions to create a complex function
 * Remember that the output of one function is goint to be the input of the next function
 * Benefits
 * 1. You can have smaller functions being reused in different compositions
 * 2. Testing is going to be easier
 */

// Example 1
const add = (x) => x + 1;
const multiply = (x) => x * 2;
const subtract = (x) => x - 3;

// Create a basic composition
const composedFunction = (x) => subtract(multiply(add(x)));
console.log(composedFunction(5));

// Example 2
// Create a more complex composition that takes n number of functions
const compose = (...functions) => (initial) => functions.reduceRight((value, fn) => fn(value), initial) ;

const improvedComposedFunction = compose(subtract, multiply, add)
console.log(improvedComposedFunction(5));


// Example 3
// 1. Check a string for empty spaces
// 2. Convert that string to UPPERCASE

const emptySpaceChecker = (str) => String(str).trim();
const upperCaser = (str) => String(str).toUpperCase();
const exclaim = (str) => str + '!!!!!!!!';

const composedFunction2 = compose(exclaim, upperCaser, emptySpaceChecker);
console.log(composedFunction2('  hello world.This is a test  '));


// TODO: Use composition to extract the most important info
// "XXXYYYZZZ3 Confirmed. Ksh500.00 sent to KPLC PREPAID for account 123456789 on 23/4/21 at 9:57 PM New M-PESA balance is Ksh5,941.22. Transaction cost, Ksh23.00. Amount you can transact within the day is 296,283.00.";