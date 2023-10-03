function splitOperation(operation) {
    let parts = operation.split(' ');
    let firstNum = parseInt(parts[0]);
    let secondNum = parseInt(parts[2]);
    let result = [firstNum, parts[1], secondNum];
    return result;
}