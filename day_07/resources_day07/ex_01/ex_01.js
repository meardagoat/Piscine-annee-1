// Function to reduce the opacity by 0.5
function reduceOpacity() {
    let square = document.getElementById("square");
    square.style.opacity = "0.5";
}

// Function to reset the opacity to 1
function resetOpacity() {
    let square = document.getElementById("square");
    square.style.opacity = "1";
}

// Adding the mouseover event listener to reduce opacity
document.getElementById("square").addEventListener("mouseover", reduceOpacity);

// Adding the mouseout event listener to reset opacity
document.getElementById("square").addEventListener("mouseout", resetOpacity);
