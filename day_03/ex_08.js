function operationSplit(argument) {
    let array = argument.split(" ");
    let numOne = parseInt(array[0]);
    let numTwo = array[1];
    let numThree = parseInt(array[2]);

    return [numOne, numTwo, numThree];
}