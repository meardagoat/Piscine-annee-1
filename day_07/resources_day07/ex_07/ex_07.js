// Define a function to shuffle an array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Get the title element
const titleElement = document.querySelector('h1');

// Initialize variables for state tracking
let isFrozen = false;
let isCopying = false;
let intervalId = setInterval(() => {
    if (!isFrozen) {
        const words = titleElement.textContent.split(' ');
        shuffleArray(words);
        titleElement.textContent = words.join(' ');
    }
}, 2000);

// Add event listeners
titleElement.addEventListener('mouseenter', () => {
    isFrozen = true;
});

titleElement.addEventListener('mouseleave', () => {
    isFrozen = false;
});

titleElement.addEventListener('click', () => {
    if (!isCopying) {
        isCopying = true;
        clearInterval(intervalId);
        const textToCopy = titleElement.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            console.log('Text copied to clipboard:', textToCopy);
        });
    }
});

document.addEventListener('click', (event) => {
    if (event.target !== titleElement && isCopying) {
        isCopying = false;
        intervalId = setInterval(() => {
            if (!isFrozen) {
                const words = titleElement.textContent.split(' ');
                shuffleArray(words);
                titleElement.textContent = words.join(' ');
            }
        }, 2000);
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '!') {
        setTimeout(() => {
            alert('42!');
        }, 42000); // Wait for 42 seconds before displaying the alert
    }
});
