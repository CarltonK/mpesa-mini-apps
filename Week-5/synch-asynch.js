// Synchronous Function - The code is evaluated line by line
function makeToastedBread() {
    console.log('1: Put bread in toaster');
    console.log('2: Wait for the bread to toast');
    console.log('3: Take out the toasted bread');
}
// makeToastedBread();


// Asynchronous Function - The code continues running while waiting for a certain operation to be finished
// Example 1
function orderOnline() {
    console.log('1: Logged into online app to place an order');
    // A function that completes after a certain period
    setTimeout(function () {
        console.log('2: Food has been delivered');
    }, 1000); // Time is in milliseconds
    console.log('3: I am doing something else while waiting for food');
}
// orderOnline();


// Example 2
function supermarketCheckout() {
    console.log('1: We have shopped and we\'re at the checkout stage');
    console.log('2: Mpesa payment via STK initiated');
    setTimeout(function () {
        console.log('3: Payment via Mpesa is confirmed');
    }, 5000);
    console.log('4: Packing our things, while waiting for confirmation');
}
// supermarketCheckout();

/* 
 * PROMISES
 * Something that will happen in the future, either successfully or unsuccessfully
 * A promise can be in 3 forms/states
 * 1. Pending - It has been initated, but has not completed
 * 2. Fulfilled - Success
 * 3. Rejected - Failure
 */

// Promise 1
function fetchSomeDataFromExternalSource() {
    console.log('Initiated');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fetchedData = 'This is data that was fetched from an external source';

            // Success = Resolve
            // resolve(fetchedData);

            // Failure = Reject
            reject(new Error('There was a problem retrieving the data'));
        }, 2000);
    });
}

// Using Promise 1
// fetchSomeDataFromExternalSource()
//     .then((value) => {
//         console.log('Value', value);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

/* 
 * CHAINING PROMISES
 * Example. Logging in to a chat system and fetching messages
 * Promise 1 - Logging In
 * Promise 2 - Fetching Mesages
 */

function logIn() {
    console.log('Initiated Logging In...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fetchedData = { id: 1, firstName: 'John', lastName: 'Doe' };

            // Success = Resolve
            resolve(fetchedData);

            // Failure = Reject
            // reject(new Error('There was a problem logging in the user'));
        }, 2000);
    });
}

function getMessages(userId) {
    console.log('Initiated Getting Messages...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fetchedData = ['Message 1', 'Message 2', 'Message 3'];

            // Success = Resolve
            resolve(fetchedData);

            // Failure = Reject
            // reject(new Error(`There was a problem retrieving messages for the user ${userId}`));
        }, 2000);
    });
}

/* 
 * ASYNC / AWAIT
 */
async function logInUserAndFetchMessages() {
    try {
        // Login User
        const user = await logIn();
        console.log('User logged in', user);

        // Get messages for logged in user
        const messages = await getMessages(user.id);
        console.log('Messages', messages);

        return messages;
    } catch (error) {
        console.error(error);
    }
}
logInUserAndFetchMessages();

// logIn()
//     .then((user) => {
//         console.log('Logged In User is', user);
//         const id = user.id;
//         return getMessages(id);
//     })
//     .then((messages) => {
//         console.log('Messages for the user are', messages);
//     })
//     .catch((error) => {
//         console.error(error);
//     });


/* 
 * CONCURRENT PROMISES
 * Promises happening simulataneously and do not depend on each other
 */

function payDay(employeeId, timeout, shouldBeSuccess = true) {
    console.log('Initiating payment for employee number', employeeId);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pay = `${employeeId} You just got paid`;

            if (shouldBeSuccess) {
                // Success
                resolve(pay);
            } else {
                // Failure
                reject(new Error(`We could not process the payment for employee number ${employeeId}`));
            }

        }, timeout);
    });
}

// const employeeOne = payDay(1, 1000);
// const employeeTwo = payDay(2, 2000);
// const employeeThree = payDay(3, 3000);

// Promise.all([employeeOne, employeeTwo, employeeThree])
//     .then(values => {
//         console.log('All promises resolved', values);
//     })
//     .catch(error => {
//         console.error(error);
//     });