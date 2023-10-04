function findAccommodation(housingToFind, housingList) {
    // Convert the input to lowercase for case-insensitive comparison
    const lowercasedHousingToFind = housingToFind.toLowerCase();

    let index = 0;
    while (index < housingList.length) {
        // Convert the current item in the list to lowercase
        const lowercasedItem = housingList[index].toLowerCase();

        // Check if the current item matches the lowercase version of the input
        if (lowercasedItem === lowercasedHousingToFind) {
            // Return an array with the index and the original value
            return [index, housingList[index]];
        }

        index++;
    }

    // If no match is found, return null
    return null;
}

// Example usage:
const housingList = ["Apartment", "House", "Condo", "Cabin"];
const housingToFind = "house";
const result = findAccommodation(housingToFind, housingList);

if (result !== null) {
    console.log(`Found "${result[1]}" at index ${result[0]}.`);
} else {
    console.log("Accommodation not found.");
}
