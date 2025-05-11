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
        const isMobile = window.innerWidth <= 1024;
        
        // Remove any margins or padding on body
        document.body.style.padding = '0';
        document.body.style.margin = '0';
        
        if (cvContainer && mainContent) {
            // Set container width to fit the viewport
            cvContainer.style.width = '100%';
            
            if (!isMobile) {
                // For desktop layout (horizontal)
                document.body.style.overflow = 'hidden'; // Prevent body scrolling
                cvContainer.style.height = '100vh';
                mainContent.style.height = '100vh';
                mainContent.style.overflowY = 'auto';
                
                // Ensure sidebar takes full height
                if (sidebar) {
                    sidebar.style.height = '100vh';
                }
            } else {
                // For mobile layout (vertical)
                document.body.style.overflow = 'auto'; // Enable body scrolling
                document.body.style.overflowX = 'hidden';
                cvContainer.style.height = 'auto';
                mainContent.style.height = 'auto';
                mainContent.style.overflowY = 'visible';
                
                if (sidebar) {
                    sidebar.style.height = 'auto';
                }
            }
        }
    }
});