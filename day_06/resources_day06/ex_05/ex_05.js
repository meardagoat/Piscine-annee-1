const car = {
    color: 'Silver',
    brand: 'Aston Martin',
    model: 'DB5', __proto__: undefined,

    logInfo: function() {
        return `Car Info: Brand - ${this.brand}, Model - ${this.model}, Color - ${this.color}`;
    }
}

const agent = Object.create(car);  // Inheriting car properties and methods
agent.firstName = 'James';
agent.lastName = 'Bond';
agent.code = '007';
agent.age = '57';

agent.logInfo = function() {
    const agentInfo = `\nAgent Info: Name - ${this.firstName} ${this.lastName}, Code - ${this.code}, Age - ${this.age}`;
    return this.__proto__.logInfo() + agentInfo;
}

console.log(agent.logInfo());
