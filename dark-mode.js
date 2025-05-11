// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        htmlElement.classList.add('dark-mode');
        themeSwitch.checked = true;
    }
    
    // Theme toggle event listener
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            htmlElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});
