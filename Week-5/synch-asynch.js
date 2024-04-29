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
    setTimeout(function() {
        console.log('2: Food has been delivered')
    }, 1000); // Time is in milliseconds
    console.log('3: I am doing something else while waiting for food')
}
// orderOnline();


// Example 2
function supermarketCheckout() {
    console.log('1: We have shopped and we\'re at the checkout stage');
    console.log('2: Mpesa payment via STK initiated');
    setTimeout(function() {
        console.log('3: Payment via Mpesa is confirmed')
    }, 5000);
    console.log('4: Packing our things, while waiting for confirmation');
}
supermarketCheckout();