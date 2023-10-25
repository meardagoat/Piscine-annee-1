const md5 = require('md5');
const handleSubmit = require('./ex_01bis.js').handleSubmit;

function handleSubmit(event) {
    handleSubmit(event);

    const encryptedPassword = md5(document.getElementById('password').value);

    const formData = new FormData();
    formData.append('firstname', document.getElementById('firstname').value);
    formData.append('lastname', document.getElementById('lastname').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('password', encryptedPassword);

    fetch('/validateForm', {
        method: 'POST',
        body: formData,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
}
