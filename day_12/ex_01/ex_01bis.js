function handleSubmit(event) {

    event.preventDefault();

    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Email
    let emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[0-9]).{8,}$/;

    // Name check
    if (firstName === "" || lastName === "") {
        document.getElementById('error').innerHTML = 'First name and last name cannot be empty.';
        return;
    }

    // Email check
    if (!emailRegex.test(email)) {
        document.getElementById('error').innerHTML = 'Email is badly formatted.';
        return;
    }

    // Password
    if (!passwordRegex.test(password)) {
        document.getElementById('error').innerHTML = 'Password must be at least 8 characters long and contain at least a letter and a number.';

    }
}

