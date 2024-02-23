document.addEventListener('DOMContentLoaded', function() {
    // Function to show a welcome message
    function showWelcomeMessage() {
        alert('Welcome to My Test GitHub Repository! Enjoy exploring.');
    }

    // Find the button by its ID and attach a click event listener
    const welcomeButton = document.getElementById('welcomeButton');
    if (welcomeButton) {
        welcomeButton.addEventListener('click', showWelcomeMessage);
    }
});