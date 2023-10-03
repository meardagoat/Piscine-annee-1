function getBasketContent(selectedFruits) {
    let fruits = ["strawberry", "strawberry", "strawberry", "apple", "apple", "lime", "lime", "peach", "pear", "pear"];
    const remainingFruits = fruits.length;

    console.log(`${selectedFruits} fruit(s) selected`);

    if (selectedFruits > remainingFruits) {
        console.log("Too many fruit(s) selected");
    }

    return fruits;
}

getBasketContent(10);
