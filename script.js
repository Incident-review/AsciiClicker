document.addEventListener('DOMContentLoaded', function() {
    let wood = document.querySelector('#wood-count');
    console.log(wood); // Check if this logs the correct element or null

    if (!wood) {
        console.error('Element with ID "wood-count" not found.');
        return; // Exit if the element is not found
    }

    window.incrementWood = function() {
        wood.innerHTML = parseFloat(wood.innerHTML) + 1;
    };

    let asciiButton = document.getElementById('ascii-button');
    if (!asciiButton) {
        console.error('Element with ID "ascii-button" not found.');
        return; // Exit if the button is not found
    }

    asciiButton.addEventListener('click', function() {
        window.incrementWood();
        console.log('Tree clicked!');
    });
});

