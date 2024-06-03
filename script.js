document.addEventListener("DOMContentLoaded", function() {
    // Get the info box elements
    const infoBox = document.getElementById('infoBox');
    const infoContent = document.getElementById('infoContent');
    const infoTitle = document.querySelector('#infoTitle-text');

    // Function to toggle info box expansion
    function toggleInfoBox() {
        infoBox.classList.toggle('expanded');
        if (infoBox.classList.contains('expanded')) {
            infoContent.style.display = 'block';
        } else {    
            infoContent.style.display = 'none';
        }
    }

    // Add click event listener to info title
    infoTitle.addEventListener('click', toggleInfoBox);
    infoBox.addEventListener('click', toggleInfoBox);


    // Check if the welcome text element exists (for index.html)
    const welcomeText = document.getElementById('welcome-text');
    if (welcomeText) {
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
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
        }

        // Function to generate a random animation
        function getRandomAnimation() {
            const animations = ['spin-animation', 'bounce-animation', 'slide-animation', 'zoom-animation', 'shake-animation'];
            return animations[Math.floor(Math.random() * animations.length)];
        }

        // Function to animate text when clicked
        function animateTextOnClick() {
            const randomColor = getRandomColor();
            welcomeText.style.color = randomColor;
            welcomeText.style.textShadow = `0 0 5px ${randomColor}`;

            const randomAnimation = getRandomAnimation();
            welcomeText.className = ''; // Clear existing classes
            welcomeText.classList.add(randomAnimation);

            setTimeout(() => {
                welcomeText.classList.remove(randomAnimation);
            }, 1000); // Adjust the duration of the animation (in milliseconds) as needed
        }

        // Add event listeners for hover and click events for welcome text
        welcomeText.addEventListener('mouseenter', animateTextOnHover);
        welcomeText.addEventListener('mouseleave', resetTextAnimation);
        welcomeText.addEventListener('click', animateTextOnClick);
    }
});
