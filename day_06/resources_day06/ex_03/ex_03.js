function addCarToAgent(agent, brand, model, color, power) {
    // Check if all variables have the right type
    if( typeof(agent) !== 'object' ||
        typeof(brand) !== 'string' ||
        typeof(model) !== 'string' ||
        typeof(color) !== 'string' ||
        typeof(power) !== 'string' ) {
        console.warn('One of the provided parameters has incorrect type.');
        return null;
    }
    // Add car property to agent object
    agent.car = {
        brand: brand,
        model: model,
        color: color,
        power: power
    };

    return agent;
}

// Create an agent
let agent = {
    firstName: 'James',
    lastName: 'Bond',
}

// Call the function
let result = addCarToAgent(agent, 'Aston Martin', 'DB5', 'Silver', '282 HP');

// Call the shareThatBeauty function
if(result !== null)
    shareThatBeauty(result);
