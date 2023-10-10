function findClosestResult(functionsObj, inputNumber, outputNumber) {
    let closestFunction = null;
    let closestDifference = Infinity;

    for (const functionName in functionsObj) {
        if (functionsObj.hasOwnProperty(functionName)) {
            const functionResult = functionsObj[functionName](inputNumber);
            const difference = Math.abs(functionResult - outputNumber);

            if (difference < closestDifference) {
                closestDifference = difference;
                closestFunction = functionName;
            }
        }
    }

    return closestFunction;
}

// Test with your example
const fObj = {};
fObj.multipleByEight = (x) => x * 8;
fObj.square = (x) => x * x;
fObj.addSixty = (x) => x + 60;

console.log(findClosestResult(fObj, 5, 26)); // should log: 'square'
console.log(findClosestResult(fObj, 10, 5));  // should log: 'addSixty'
console.log(findClosestResult(fObj, 5, 45));  // should log: 'multipleByEight'

