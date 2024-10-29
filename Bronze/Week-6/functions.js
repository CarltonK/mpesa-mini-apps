/* 
 * Assign Functions to Variables
 */
function greet(name) {
    return `Hello ${name}`;
}

// Assignment
const sayHello = greet;

// Calling the function
console.log(sayHello('John'));


/* 
 * Passing functions as arguments
 */
// Function that takes another function as an argument
function callWithTwo(fn) {
    return fn(2);
}

// Function to be passed as an argument
function square(num) {
    return num * num;
}

// Passing the function
console.log(callWithTwo(square));


/* 
 * Return functions from functions
 */
// Function that returns another function
function multiplier(multiple) {
    return function (num) {
        return num * multiple;
    }
}

// Use the function that was returned
const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));
console.log(triple(5));


/* 
 * Storing functions in an array
 */
const operations = [
    function (x) { return x + 1 },
    function (x) { return x + 2 },
    function (x) { return x + 10 },
];

let result = 0;
operations.forEach(op => {
    result = result + op(result);
    console.log('Result', result);
});

/* 
 * Storing functions in object
 */
const mathOperations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

console.log(mathOperations.add(5, 20));
console.log(mathOperations.divide(30, 7));


/* 
 * Practical example of functions as first-class citizens
 * Event Handler System
 */

// All our event handlers
const eventHandlers = {};

// Function that creates an event handler
function on(event, handler) {
    if (!eventHandlers[event]) {
        eventHandlers[event] = []
    }
    eventHandlers[event].push(handler);
}

// Function to trigger an event
function trigger(event, ...args) {
    if(eventHandlers[event]) {
        eventHandlers[event].forEach(handler => handler(...args));
    }
}

// Register Event Handler
on('login', (name) => console.log(`${name} has logged in`));
on('logout', (name) => console.log(`${name} has logged out`));

// Trigger events
trigger('login', 'John');
trigger('logout', 'John');
trigger('xxxxxx', 'John');