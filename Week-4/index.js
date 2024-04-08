function add(a, b) {
    // Convert the inputs to numbers
    const numberA = Number(a);
    const numberB = Number(b);

    if (isNaN(numberA) && isNaN(numberB)) {
        throw new Error('Please provide valid numbers');
    }

    return numberA + numberB;
}

// Export
module.exports = add;

// Example
// const answer = add(1,2);
// console.log('The answer is',answer);