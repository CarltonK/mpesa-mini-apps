console.log('Connected');

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

async function logInUserAndFetchMessages() {
    try {
        // Login User
        const user = await logIn();
        console.log('User logged in', user);

        // Get messages for logged in user
        const messages = await getMessages(user.id);
        console.log('Messages', messages);

        // Get reference to list
        const messagesList = document.getElementById('messagesList');
        messages.forEach(message => {
            // Create a list item
            const listItem = document.createElement('li');
            listItem.textContent = message;
            messagesList.append(listItem);
        });
        // return messages;
    } catch (error) {
        console.error(error);
    }
}


window.onload = logInUserAndFetchMessages;


// TODO
/*  
 * SIMULATE LOGGING IN AND FETCHING MESSAGES
 * Create a LogIn Form that takes email
 * When login button is hit, call the login functionality
 * If successful, fetch and display the mssages. If not show an error logging in the user
 */