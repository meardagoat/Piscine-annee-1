let nbr_tuna_sandwiches = 0;
while (breadCount >= 2 && tunaCount >= 1 && saladCount >= 2) {
    breadCount -= 2;
    tunaCount -= 1;
    saladCount -= 2;
    nbr_tuna_sandwiches += 1;
}

let nbr_ham_sandwiches = 0;
while (breadCount >= 2 && hamCount >= 1) {
    breadCount -= 2;
    hamCount -= 1;
    nbr_ham_sandwiches += 1;
}

let nbr_vegetarian_sandwiches = 0;
while (breadCount >= 2 && saladCount >= 1 && tomatoCount >= 2) {
    breadCount -= 2;
    saladCount -= 1;
    tomatoCount -= 2;
    nbr_vegetarian_sandwiches += 1;
}

displayThisText("the number of ham sandwiches that can be made: " + nbr_ham_sandwiches);
displayThisText("the number of tuna sandwiches that can be made: " + nbr_tuna_sandwiches);
displayThisText("the number of vegetarian sandwiches that can be made: " + nbr_vegetarian_sandwiches);
