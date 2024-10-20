document.addEventListener('DOMContentLoaded', function() {
    let wood = document.querySelector('.wood-count');
    let asciiButton = document.getElementById('ascii-button'); // Select the ASCII button element

    // Move incrementWood function outside of the event listener
    window.incrementWood = function() { // Changed to attach to window
        wood.innerHTML = parseFloat(wood.innerHTML) + 1;
    }; 

    // Add click event listener to the ASCII button
    asciiButton.addEventListener('click', function() {
        window.incrementWood(); // Ensure incrementWood is called from window
        alert('ASCII art button clicked!'); // Custom click logic
    });
});
