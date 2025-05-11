// Blockchain CV Template JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize section navigation
    initSectionNavigation();
    
    // Initialize blockchain animations
    initBlockchainAnimations();
    
    // Launch preview button functionality
    initLaunchPreview();
    
    // Add floating hash numbers
    addFloatingHashes();
    
    // Initialize touch events for mobile
    initTouchEvents();
    
    // Generate random hash for validation
    generateRandomHash();
    
    // Add dynamic styles
    addDynamicStyles();
});

// Function to initialize section navigation
function initSectionNavigation() {
    const navItems = document.querySelectorAll('.sidebar-nav li');
    const sections = document.querySelectorAll('.cv-section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Update active section
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(targetSection).classList.add('active');
            
            // Add hash animation when changing sections
            addHashAnimation();
        });
    });
}

// Function to add hash animation when changing sections
function addHashAnimation() {
    const mainContent = document.querySelector('.main-content');
    const hashElement = document.createElement('div');
    hashElement.classList.add('hash-animation');
    
    // Generate random hash
    const hash = generateRandomHash(8);
    hashElement.textContent = hash;
    
    // Set random position
    const randomX = Math.floor(Math.random() * 80) + 10; // 10% to 90%
    const randomY = Math.floor(Math.random() * 80) + 10; // 10% to 90%
    
    hashElement.style.left = `${randomX}%`;
    hashElement.style.top = `${randomY}%`;
    
    // Add to DOM
    mainContent.appendChild(hashElement);
    
    // Remove after animation completes
    setTimeout(() => {
        hashElement.remove();
    }, 2000);
}

// Function to initialize blockchain animations
function initBlockchainAnimations() {
    // Add blockchain node hover effects
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            // Create connection line effect on hover
            createConnectionLine(tag);
        });
    });
    
    // Animate skill bars on load
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const originalWidth = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.transition = 'width 1.5s ease-in-out';
            bar.style.width = originalWidth;
        }, 300);
    });
}

// Function to create connection line effect
function createConnectionLine(element) {
    const container = document.querySelector('.main-content');
    const line = document.createElement('div');
    line.classList.add('connection-line');
    
    // Calculate positions
    const rect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    
    const startX = rect.left + rect.width / 2 - containerRect.left;
    const startY = rect.top + rect.height / 2 - containerRect.top;
    
    // Random end point within the container
    const endX = Math.random() * containerRect.width;
    const endY = Math.random() * containerRect.height;
    
    // Set line position and angle
    const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
    const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
    
    line.style.width = `${length}px`;
    line.style.left = `${startX}px`;
    line.style.top = `${startY}px`;
    line.style.transform = `rotate(${angle}deg)`;
    
    // Add to DOM
    container.appendChild(line);
    
    // Remove after animation
    setTimeout(() => {
        line.remove();
    }, 1000);
}

// Function to initialize launch preview button
function initLaunchPreview() {
    const launchButton = document.getElementById('launchPreview');
    
    if (launchButton) {
        launchButton.addEventListener('click', function() {
            // Animation effect
            this.classList.add('launching');
            
            // Simulate block validation
            setTimeout(() => {
                simulateBlockValidation();
            }, 500);
            
            // Remove animation class
            setTimeout(() => {
                this.classList.remove('launching');
            }, 2000);
        });
    }
}

// Function to simulate block validation
function simulateBlockValidation() {
    const validationNode = document.querySelector('.validation-node');
    const hashDisplay = document.querySelector('.hash-display');
    
    // Create validation effect
    validationNode.classList.add('validating');
    
    // Update hash during validation
    let validationStep = 0;
    const validationInterval = setInterval(() => {
        hashDisplay.textContent = generateRandomHash();
        validationStep++;
        
        if (validationStep > 5) {
            clearInterval(validationInterval);
            validationNode.classList.remove('validating');
            hashDisplay.textContent = `0x${generateRandomHash(16)}`;
            
            // Show success message
            const container = document.querySelector('.main-content');
            const successMessage = document.createElement('div');
            successMessage.classList.add('validation-success');
            successMessage.innerHTML = `
                <div class="success-icon"><i class="fas fa-check-circle"></i></div>
                <div class="success-text">CV Preview Verified on Blockchain</div>
            `;
            
            container.appendChild(successMessage);
            
            // Remove after 3 seconds
            setTimeout(() => {
                successMessage.classList.add('fade-out');
                setTimeout(() => {
                    successMessage.remove();
                }, 500);
            }, 3000);
        }
    }, 300);
}

// Function to add floating hash numbers
function addFloatingHashes() {
    const container = document.querySelector('.blockchain-decoration');
    
    // Create floating hash elements
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const hash = document.createElement('div');
            hash.classList.add('floating-hash');
            
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Random size
            const size = Math.random() * 0.5 + 0.5;
            
            // Set hash properties
            hash.style.left = `${posX}%`;
            hash.style.top = `${posY}%`;
            hash.style.transform = `scale(${size})`;
            hash.textContent = `0x${generateRandomHash(4)}`;
            
            // Add to container
            container.appendChild(hash);
            
            // Start floating animation
            setTimeout(() => {
                hash.style.opacity = '0.7';
                hash.style.top = `${posY - 10}%`;
            }, 100);
            
            // Remove after animation
            setTimeout(() => {
                hash.style.opacity = '0';
                setTimeout(() => {
                    hash.remove();
                }, 1000);
            }, 7000);
        }, i * 2000); // Add hashes at intervals
    }
}

// Function to initialize touch events for mobile
function initTouchEvents() {
    const skillTags = document.querySelectorAll('.skill-tag');
    const navItems = document.querySelectorAll('.sidebar-nav li');
    
    // For skill tags
    skillTags.forEach(tag => {
        tag.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.classList.add('touch-active');
            createConnectionLine(this);
        });
        
        tag.addEventListener('touchend', function() {
            this.classList.remove('touch-active');
        });
    });
    
    // Improve navigation touch feedback
    navItems.forEach(item => {
        item.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        item.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Smooth scrolling for mobile
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Function to generate random hash
function generateRandomHash(length = 8) {
    const characters = '0123456789abcdef';
    let result = '';
    
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    return result;
}

// Add some CSS styles dynamically
function addDynamicStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .hash-animation {
            position: absolute;
            font-family: 'Roboto Mono', monospace;
            font-size: 12px;
            color: var(--primary-color);
            opacity: 0;
            z-index: 10;
            animation: hashFade 2s ease-out;
        }
        
        @keyframes hashFade {
            0% { opacity: 0; transform: scale(0.5); }
            20% { opacity: 0.7; transform: scale(1.2); }
            80% { opacity: 0.7; transform: scale(1); }
            100% { opacity: 0; transform: scale(0.8); }
        }
        
        .connection-line {
            position: absolute;
            height: 2px;
            background: linear-gradient(90deg, var(--primary-color), transparent);
            transform-origin: left center;
            opacity: 0.4;
            animation: lineGrow 1s ease-out;
        }
        
        @keyframes lineGrow {
            0% { width: 0; opacity: 0.7; }
            100% { width: 100%; opacity: 0; }
        }
        
        .validation-success {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: rgba(46, 204, 113, 0.9);
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 100;
            animation: slideIn 0.5s ease-out;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .validation-success.fade-out {
            animation: slideOut 0.5s ease-in forwards;
        }
        
        .success-icon {
            font-size: 1.5rem;
        }
        
        @keyframes slideIn {
            0% { transform: translateX(100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            0% { transform: translateX(0); opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
        }
        
        .floating-hash {
            position: absolute;
            font-family: 'Roboto Mono', monospace;
            font-size: 10px;
            color: var(--primary-color);
            opacity: 0;
            z-index: -1;
            transition: all 10s ease-out, opacity 2s ease-in-out;
        }
        
        .validating {
            animation: validatingPulse 0.5s infinite alternate;
        }
        
        @keyframes validatingPulse {
            0% { background-color: #2ecc71; }
            100% { background-color: #f1c40f; }
        }
        
        #launchPreview.launching {
            animation: launchingButton 2s ease-in-out;
        }
        
        @keyframes launchingButton {
            0% { transform: scale(1); }
            50% { transform: scale(0.95); background-color: var(--primary-color); }
            100% { transform: scale(1); }
        }
        
        .touch-active {
            background-color: var(--primary-color) !important;
            color: white !important;
        }
    `;
    
    document.head.appendChild(styleElement);
}


