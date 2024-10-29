/* 
 * Closures - Function is aware of it's environment
 */

function outer() {
    let outerVariable = 'I am outside';

    function inner() {
        console.log(outerVariable);
    }

    return inner;
}

const closure = outer();
// closure();




function createSomeone(name) {
    let age = 20;

    return {
        getName: function () { return name; },
        getAge: function () { return age; },
        growPersonOlder: function () { return age++; },
        celebrate: function() { return `Happy Birthday, you're now ${age} years old.`},
    }
}

const person = createSomeone('John');
// console.log(person.getName());
person.growPersonOlder();
// console.log(person.getAge());



/* 
 * Closures and State
 */
// Example 1

function createCounter() {
    let count = 0; // Private Variable

    return {
        increment: function() {
            count = count + 1;
            return count;
        },
        decrement: function() {
            count = count - 1;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();

console.log(counter.increment());
console.log(counter.getCount());
console.log(counter.decrement());

// Example 2 - Closure with Private Methods

function createPerson(name) {
    let _name = name; // Private Variable

    // Setter - Private Method
    function setNewName(newName) {
        _name = newName;
    }

    return {
        getName: function() {
            return _name;
        },
        changeName: function(newName) {
            setNewName(newName)
        }
    }
}

const person2 = createPerson('John');
console.log(person2.getName());
person2.changeName('James');
console.log(person2.getName());