let currentRotation = 0;

// Function to rotate circle
function rotateCircle(step) {
    currentRotation += step;
    let circle = document.getElementById("circle");
    circle.style.transform = `rotate(${currentRotation}deg)`;
}

// Function for reset
function reset() {
    let circle = document.getElementById("circle");
    circle.style.transform = "rotate(0deg)";
    currentRotation = 0;  // Reset currentRotation to 0
}

// Get all rotate-button elements
let buttons = document.getElementsByClassName('rotate-button');

// Loop through all obtained elements
for (let i = 0; i < buttons.length; i++) {
    // Add event listener to each button
    buttons[i].addEventListener('click', function() {
        // If the value of clicked button is '0' means it is reset button
        if (this.value === '0') {
            reset();
        } else {
            // Else it will follow rotation
            rotateCircle(parseInt(this.value));
        }
    })
}
