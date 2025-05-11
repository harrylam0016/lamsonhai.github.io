// Chrome View Fit Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Apply fit-to-browser view immediately when the page loads
    document.body.classList.add('browser-fit-mode');
    
    // Handle window resize events to maintain proper fit
    window.addEventListener('resize', adjustContentSize);
    
    // Initial size adjustment
    adjustContentSize();
    
    // Hide the fullscreen toggle button since we're always in fit mode
    const fullscreenToggle = document.getElementById('fullscreen-toggle');
    if (fullscreenToggle) {
        fullscreenToggle.style.display = 'none';
    }
    
    // Function to adjust content size based on window dimensions
    function adjustContentSize() {
        const cvContainer = document.querySelector('.cv-container');
        const mainContent = document.querySelector('.main-content');
        const sidebar = document.querySelector('.sidebar');
        
        if (cvContainer && mainContent) {
            // Set container dimensions to fit the viewport
            cvContainer.style.height = window.innerHeight + 'px';
            cvContainer.style.width = window.innerWidth + 'px';
            
            // Adjust content height to match container
            mainContent.style.maxHeight = window.innerHeight + 'px';
            
            // Ensure sidebar takes full height
            if (sidebar) {
                sidebar.style.height = window.innerHeight + 'px';
            }
            
            // Remove any margins or padding on body
            document.body.style.padding = '0';
            document.body.style.margin = '0';
        }
    }
});