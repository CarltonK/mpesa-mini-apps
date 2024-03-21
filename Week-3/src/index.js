function saveData() {
    // Retrieve data from input field
    const emailData = document.getElementById('emailInput').value;

    // Validate data
    if (!String(emailData).includes('@')) {
        alert('Email is not valid');
    } else {
        // Save the data using LocalStorage
        localStorage.setItem('email', emailData);
        alert('Email captured successfully');

        displayData();
    }
}

function displayData() {
    // Get the element where the saved data is going to be displayed
    const displayParagraph = document.getElementById('savedData');

    // Retrieve the saved data
    const dataFromStorage = localStorage.getItem('email');

    // Append the retrieved data to the element
    // Verify that actual data has been retrieved
    if (dataFromStorage) {
        displayParagraph.textContent = "Current Data = " + dataFromStorage;
    } else {
        displayParagraph.textContent = "We didn't find any data in the local storage";
    }
    // If so, show data in paragraph, else show an error message
}

function deleteData() {
    localStorage.clear();
    // Clear only one item
    // localStorage.removeItem('email');
}

// Trigger the display data function when the page loads
window.onload = displayData;