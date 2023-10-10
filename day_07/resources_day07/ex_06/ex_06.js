document.addEventListener('DOMContentLoaded', function () {
    const robot = document.getElementById('robot');
    const speechBubble = document.getElementById('speech-bubble');
    const screenText = document.getElementById('screen-text');
    const inputField = document.getElementById('robot-input');
    const eyeLeftIris = document.querySelector('.eye-left-iris');
    const eyeRightIris = document.querySelector('.eye-right-iris');

    let clickCount = 0;

    // Click event on the robot
    robot.addEventListener('click', function () {
        speechBubble.textContent = 'Ouch, that hurts!';
        setTimeout(function () {
            speechBubble.textContent = 'Hello!';
        }, 2000);
    });

    // Mouseover event on the robot
    robot.addEventListener('mouseover', function (event) {
        const x = event.clientX;
        const y = event.clientY;
        screenText.textContent = `Coordinates: X=${x}, Y=${y}`;
    });

    // Input field event
    inputField.addEventListener('input', function () {
        screenText.textContent = "Don't worry, I'll take care of it!";
        setTimeout(function () {
            screenText.textContent = 'Bip bip bip!';
        }, 2000);
    });

    // Click event on the robot's eyes
    robot.addEventListener('click', function (event) {
        if (event.target.classList.contains('eye-left-iris') || event.target.classList.contains('eye-right-iris')) {
            clickCount++;

            if (clickCount >= 10) {
                // Change the color of both iris randomly
                const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                eyeLeftIris.style.fill = randomColor;
                eyeRightIris.style.fill = randomColor;

                // Reset the click count
                clickCount = 0;
            }
        }
    });
});
