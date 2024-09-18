// Function to change background color
function changeColor() {
    var container = document.querySelector('.container');
    var currentColor = container.style.backgroundColor;
    // Toggle between two colors
    if (currentColor === 'powderblue') {
        container.style.backgroundColor = '#f5f5f5'; // Default color
    }
    else {
        container.style.backgroundColor = 'powderblue'; // New color
    }
}
// Initialize the event listener for the button
function init() {
    var colorButton = document.getElementById('color-btn');
    if (colorButton) {
        colorButton.addEventListener('click', changeColor);
    }
}
document.addEventListener('DOMContentLoaded', init);
