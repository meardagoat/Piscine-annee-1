var seed = 0;

function getID() {
    return new Promise(resolve => {
        setTimeout(() => {
            var id = Math.sin(seed++) * 10000;
            id = parseInt(id < 0 ? -id : id);
            resolve(id);
        }, 500);
    });
}

// Do not modify what's above, write your code below
// Don't forget to re-assign seed !
function assignID(machineName, newSeed) {
    seed = newSeed; // re-assign seed

    // Call getID() which returns a promise
    return getID()
        .then(id => `${machineName} : ${id}`)
        .catch(err => console.log(err));
}

// Usage:
assignID("Oxygen filter", 1)
    .then(value => console.log(value))
    .catch(err => console.log(err));

