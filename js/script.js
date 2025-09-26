welcomeMessage(); 

// Welcome Message Function
function welcomeMessage() {
    // Prompt user for their name
    let username = prompt('Please enter your name:');
    // if a name is entered, display it in header, otherwise show default message
    if (username) {

        ///display username in header
        document.getElementById('username').innerHTML = username; 
    } else  {

        ///if no name is entered, show default welcome message
        alert('Welcome to Hariman AC portofolio!');
    }
}

// Form Validation
function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

// Simple validation
    if (name === '' || email === '' || message === '') {
        ///if any field is empty, show alert
        alert('Please fill in all fields.');
        ///if all fields are filled, show success message
    } else {
        alert(`Thanks, ${name}! Your message has been sent.`);

    }
}