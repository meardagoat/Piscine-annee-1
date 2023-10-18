function handleSubmit() {
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const errorParagraph = document.querySelector('#error');

    // Checking if First Name is empty
    if (!firstName) {
        errorParagraph.textContent = "First name must not be empty";
        return;
    }

    // Checking if Last Name is empty
    if (!lastName) {
        errorParagraph.textContent = "Last name must not be empty";
        return;
    }

    // Checking if email is well formatted
    const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRe.test(email)) {
        errorParagraph.textContent = "Email is badly formatted";
        return;
    }

    // Checking if password has at least 8 characters and contains at least a letter and a number
    const passwordRe = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRe.test(password)) {
        errorParagraph.textContent = "Password must be at least 8 characters long and contain at least a letter and a number";
        return;
    }

    // If we get this far, no errors were found. Clear error paragraph and proceed with form submission.
    errorParagraph.textContent = '';
    // place form submission code here
}
document.querySelector('#myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    handleSubmit();
});
