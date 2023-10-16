function initializeMachine(machineName, timeRequired) {
    return new Promise((resolve, reject) => {
        if (typeof machineName !== 'string' || typeof timeRequired !== 'number') {
            reject('Error: Invalid input');
        } else {
            setTimeout(() => {
                resolve(`${machineName} initialized`);
            }, timeRequired * 1000);
        }
    });
}

// Usage
initializeMachine("Computer", 3).then((value) => {
    console.log(value);
}).catch((error) => {
    console.error(error);
});
