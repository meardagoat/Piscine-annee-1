function updateLicensePlates(agent, plates) {
    if( typeof(agent) !== 'object' || !Array.isArray(plates)) {
        console.warn("Expected an object and an array.");
        return null;
    }

    if (!agent.car) {
        agent.car = {};
    }

    agent.car.licensePlates = plates;

    return agent;
}
function showLicensePlates(agent) {
    if (typeof(agent) !== 'object' || !agent.car || !Array.isArray(agent.car.licensePlates)) {
        console.warn('Expected an agent object with a car property and license plates.');
        return;
    }

    let ulContainer = document.querySelector('.plates-container');

    agent.car.licensePlates.forEach(plate => {
        let li = document.createElement('li');
        li.textContent = plate;
        ulContainer.appendChild(li);
    });
}
let agent = {
    firstName: 'James',
    lastName: 'Bond',
    car: {
        brand: "Aston Martin",
        model: "DB5",
        color: "Silver",
        power: "282 HP"
    }
}

let plates = ["LU6789", "4711-EA-62", "BMT216A"];

let updatedAgent = updateLicensePlates(agent, plates);

if(updatedAgent !== null)
    showLicensePlates(updatedAgent);
