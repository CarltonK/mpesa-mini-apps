// Looping - Perform repetitive tasks in a similar way
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array Method
// let sum = 0;
// myNumbers.forEach((value, index) => {
//     sum = sum + value;
//     console.log('At position', index, 'the value is', value, 'and the current sum is', sum);
// });

// For Loop Method
// for (let index = 0; index < myNumbers.length; index++) {
//     const value = myNumbers[index];
//     sum = sum + value;
//     console.log('At position', index, 'the value is', value, 'and the current sum is', sum);
// }

// We don't have access to an index xplicity with this loop method
// Use this method if you don't care about the index
// for (const key of myNumbers) {
//     const index = myNumbers.indexOf(key);
//     console.log('The current index is', index, 'which represents the value', key);
// }

const person = { 'name': 'John Doe', 'age': 30, 'courses': ['DevOps', 'Mini-Apps'] };
for (const key in person) {
    const value = person[key];
    console.log('The current key is', key, 'which represents the value', value);
}
