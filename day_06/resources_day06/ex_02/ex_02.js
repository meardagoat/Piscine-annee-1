function addCar(agentString, car) {
    // Parse the JSON string to an object
    let agent = JSON.parse(agentString);

    // Add the car property to the agent object
    agent.car = car;

    // Return the modified object
    return agent;
}
let agentJSON = '{"firstName":"James", "lastName":"Bond", "code":"007", "age":57}';
let carBrand = "Aston Martin";

let agent = addCar(agentJSON, carBrand);

console.log(agent);
//After running this code, the logged object would include a new 'car' property with the value 'Aston Martin':
//{firstName: "James",lastName: "Bond",code: "007",age: 57,car: "Aston Martin"}
