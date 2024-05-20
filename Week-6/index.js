// Functional Programming - A mode of development in JS that focuses on the use of pure functions. 

// Imperative Programming - Performing tasks in a sequence or from top to bottom
// Example (1)
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log(sum);



// Declarative Programming - Telling program what to do rather than how to do it
const sumDeclarative = numbers.reduce((x, y) => x + y, 0);
console.log(sumDeclarative);


// Higher-Order Functions - A function that takes a function as an argument or returns a function as a result
const map = (arr, func) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let individualElement = arr[i];
        let individualFunction = func(individualElement);
        result.push(individualFunction);
    }
    return result;
};

const squaredNumbers = map(numbers, x => x * x);
const add10 = map(numbers, x => x + 10);
console.log(squaredNumbers);
console.log(add10);

// First-Class Functions - A function can be stored as variable, it can also be passed as an argument to other functions
const squareFunction = (x) => x * x;
const greetSomeone = () => 'Hello';
const sayHello = greetSomeone;
console.log(sayHello());


// Example (2) - Given a shopping list, calculate the total
const cart = [
    { 'item': 'Apple', 'price': 20, 'quantity': 3 },
    { 'item': 'Banana', 'price': 15, 'quantity': 7 },
    { 'item': 'Orange', 'price': 30, 'quantity': 10 }
];

// Imperative
let total = 0;
for (let i = 0; i < cart.length; i++) {
    let element = cart[i];
    let price = element.price;
    let qty = element.quantity;
    let itemTotal = price * qty;
    total = total + itemTotal;

    // total += cart[i].price * cart[i].quantity;
}
// Time - O(n)
// Space - O(1)

// Declarative
const getTotal = (cart) => cart
    .map(item => item.price * item.quantity)
    .reduce((count, curr) => count + curr, 0);
// Time - O(n)
// Space - O(n) + O(n) = O(n)

console.log(getTotal(cart))
