function checkFuel(fuel) {
    return new Promise((resolve, reject) => {
        if (typeof fuel !== 'number') {
            reject('Error: Argument is not a number');
        } else if (fuel >= 9) {
            resolve('Ready to launch');
        } else {
            reject('Please refill fuel');
        }
    });
}
checkFuel(10)
    .then(message => console.log(message))
    .catch(error => console.log(error));
