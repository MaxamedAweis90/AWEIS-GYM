document.addEventListener("DOMContentLoaded", function() {
    // Get the welcome text element
    const welcomeText = document.getElementById('welcome-text');

    // Function to animate text when hovered
    function animateTextOnHover() {
        welcomeText.style.transform = 'scale(1.2)';
    }

    // Function to reset text animation when not hovered
    function resetTextAnimation() {
        welcomeText.style.transform = 'scale(1)';
    }

    // Function to generate a random color
    function getRandomColor() {
        // Generate random RGB values
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        // Construct a CSS color string
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Function to generate a random animation
    function getRandomAnimation() {
        // List of available animations
        const animations = ['spin-animation', 'bounce-animation', 'slide-animation', 'zoom-animation', 'shake-animation'];

        // Select a random animation from the list
        return animations[Math.floor(Math.random() * animations.length)];
    }

    // Function to animate text when clicked
    function animateTextOnClick() {
        // Generate a random color
        const randomColor = getRandomColor();

        // Apply the random color to the text
        welcomeText.style.color = randomColor;
        welcomeText.style.textShadow = `0 0 5px ${randomColor}`;

        // Generate a random animation
        const randomAnimation = getRandomAnimation();

        // Add the randomly selected animation class
        welcomeText.className = ''; // Clear existing classes
        welcomeText.classList.add(randomAnimation);

        // Remove the animation class after a delay to restart the animation on subsequent clicks
        setTimeout(() => {
            welcomeText.classList.remove(randomAnimation);
        }, 1000); // Adjust the duration of the animation (in milliseconds) as needed
    }

    // Add event listeners for hover and click events
    welcomeText.addEventListener('mouseenter', animateTextOnHover);
    welcomeText.addEventListener('mouseleave', resetTextAnimation);
    welcomeText.addEventListener('click', animateTextOnClick);
});
