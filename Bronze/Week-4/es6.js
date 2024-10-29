// Introduction to ES6 Javascript

// 1. Variables
var x = 1;

// Variables that won't change
const y = 10;

// Variables that can change
let a = 11;
console.log('Initial Value', a);

a = 21;
console.log('Current Value', a);


// 2. Arrow Functions

// Standard way of defining a function
function add(a, b) {
    return a + b;
}
add(1, 2)
console.log('Standard', add);

// Newer way of defining a function
const addNewer = (a, b) => a + b;
console.log('Newer', addNewer(1, 2));

// 3. Destructuring

const person = { 'name': 'John Doe', 'age': 30, 'occupation': 'Software Developer' };
// const name = person.name;
// const age = person['age'];

const { name } = person;
console.log(name)

const numbers = [1, 2, 3];
const numberOne = numbers[0];

const [numberFour, numberFive, numberSix] = [4, 5, 6]
console.log(numberSix)

// 4. Spread Operators

const firstArray = [1, 2, 3];
const secondArray = [...firstArray, 4, 5]

console.log(firstArray)
console.log(secondArray)

const person2 = { ...person, 'location': 'Nairobi' };

console.log(person)
console.log(person2)

// 5. OOP - Inheritance -> Polymorphism, 
// Parent
class Animal {
    constructor(name) {
        this.name = name;
    }

    move() {
        console.log('The animal',name,'is moving');
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    bark() {
        console.log(name,'Woof Woof');
    }
}

const cat = new Animal('Jamie');
cat.move();

const dog = new Dog('Scooby');
dog.move();
dog.bark();
