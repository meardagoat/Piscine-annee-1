function displayAgentInfo(agentInfo) {
    // Extract the agent information
    let age = agentInfo.age;
    let code = agentInfo.code;
    let firstName = agentInfo.firstName;
    let lastName = agentInfo.lastName;

    // Construct the information string
    let infoString = `<p>My name is ${lastName}, ${firstName} ${lastName}! I'm the agent ${code}, and I'm ${age} years old.</p>`;

    // Get the container div where the info will be displayed
    let container = document.getElementById('container');

    // Append the infoString to the container HTML
    container.innerHTML = infoString;
}

// Agent information object
let agent = {
    age: 57,
    code: "007",
    firstName: "James",
    lastName: "Bond"
};

// Call the function after the DOM has fully loaded
window.onload = () => {
    displayAgentInfo(agent);
}

