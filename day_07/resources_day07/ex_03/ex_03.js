function map(elements, modifier) {
    let resultArray = [];
    for(let i = 0; i < elements.length; i++) {
        resultArray.push(modifier(elements[i]));
    }
    return resultArray;
}

function isEven(number) {
    return number % 2 === 0;
}

console.log(map([5, 8, 10], isEven));
// It will output: [false, true, true]
//In the map() function, we loop through each element of the given array
// and apply the modifier callback to that element.
// The result is then pushed into the resultArray, which is returned after processing all the elements.
//
// The isEven() function checks whether a given number is even by checking if the remainder
// of the division by 2 equals zero, if true, meaning the number is even, it returns true,
// otherwise it returns false.
//
// The map function is used by supplying the array [5, 8, 10] and the function isEven as arguments,
// and the output is [false, true, true] which indicates that 5 is not
// an even number and both 8 and 10 are even numbers.