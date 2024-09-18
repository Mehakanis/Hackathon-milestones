// Function to change background color
function changeColor(): void {
    const container = document.querySelector('.container') as HTMLElement;
    const currentColor = container.style.backgroundColor;

    // Toggle between two colors
    if (currentColor === 'powderblue') {
        container.style.backgroundColor = '#f5f5f5'; // Default color
    } else {
        container.style.backgroundColor = 'powderblue'; // New color
    }
}

// Initialize the event listener for the button
function init(): void {
    const colorButton = document.getElementById('color-btn') as HTMLElement;
    if (colorButton) {
        colorButton.addEventListener('click', changeColor);
    }
}

document.addEventListener('DOMContentLoaded', init);
