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
closure();




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
console.log(person.getName());
person.growPersonOlder();
console.log(person.getAge());
