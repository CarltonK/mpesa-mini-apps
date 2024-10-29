function validateEmail(email) {
    if (email.length == 0) {
        alert('Please enter an email');
    } else if (!email.includes('@')) {
        alert('Please enter a valid email');
    } else {
        alert('Email is valid');
    }
}

function validatePassword(password) {
    if (password.length == 0) {
        alert('Please enter an password');
    } else if (password.length < 5) {
        alert('Please enter a strong password');
    } else {
        alert('Password is valid');
    }
}

function handleLogin() {
    // Get the email and password HTML elements
    const emailElement = document.getElementById('email');
    const passwordElement = document.getElementById('password');
    
    // Get the values in the input fields
    const email = emailElement.value
    const password = passwordElement.value

    // Do some validation
    validateEmail(email);
    validatePassword(password);

}
