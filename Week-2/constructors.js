// Constructors are blueprints for creating an object of a particular type
// const firstString = 'This is a string';
// console.log(firstString);

// const secondString = new String('This is my second string');
// console.log(secondString.valueOf());

// const myNumber = new Number(5);
// console.log(myNumber);

const person1 = { 'name': 'John Doe', 'age': 30, 'courses': ['DevOps', 'Mini-Apps'], 'inSession': true };
const person2 = { 'name': 'Jane Doe', 'age': 31, 'courses': ['Mini-Apps'] };
const person3 = { 'name': 'James Doe', 'age': 32, 'courses': ['DevOps'] };

// Creating our own constructors using functions
function Person(name, age, courses) {
    this.name = name;
    this.age = age;
    this.courses = courses;

    this.speak = () => {
        return `My name is ${name}, I am ${age} years old undertaking ${courses}`;
    }
}
const person4 = new Person('Monica Doe', 40, ['DevOps']);
console.log(person4.speak())