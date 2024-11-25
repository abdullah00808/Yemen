// script.js

// Select the theme toggle button
const themeToggle = document.getElementById('theme-toggle');

// Event listener for theme toggle
themeToggle.addEventListener('click', () => {
    // Toggle the "data-theme" attribute on the HTML element
    document.documentElement.toggleAttribute('data-theme', 'dark');

    // Update button icon
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌗';
    }
});
