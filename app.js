// Application data
const messages = [
    "hey useless thing 🤡",
    "well, you clicked me!",
    "really? clicking again?",
    "you have too much time!",
    "here, take this emoji 🎉",
    "still going, I see...",
    "this is quite amusing",
    "you're determined!",
    "I'm impressed actually",
    "maybe you're not useless",
    "want to be friends? 😊",
    "this is fun!",
    "you can keep going...",
    "or stop. your choice!",
    "endless clicking mode!"
];

const buttonTexts = [
    "Click me",
    "Click again!",
    "One more?",
    "Keep going!",
    "Why not?",
    "Sure thing!",
    "Let's go!",
    "Again?",
    "More clicks!",
    "Keep it up!"
];

// State variables
let clickCount = 0;
let currentMessageIndex = 0;
let currentButtonTextIndex = 0;

// Animation classes for variety
const headingAnimations = [
    'heading-bounce',
    'heading-shake',
    'heading-glow'
];

const buttonAnimations = [
    'button-pulse',
    'button-wiggle'
];

const specialBackgrounds = [
    'special-bg-1',
    'special-bg-2',
    'special-bg-3'
];

// DOM elements - will be initialized after DOM loads
let heading, button, counter, countSpan, contentWrapper;

// Utility function to remove all animation classes
function clearAnimations(element, animationClasses) {
    if (!element) return;
    animationClasses.forEach(className => {
        element.classList.remove(className);
    });
}

// Utility function to add random animation
function addRandomAnimation(element, animationClasses) {
    if (!element) return;
    const randomClass = animationClasses[Math.floor(Math.random() * animationClasses.length)];
    element.classList.add(randomClass);
    
    // Remove the animation class after animation completes
    setTimeout(() => {
        if (element) {
            element.classList.remove(randomClass);
        }
    }, 1000);
}

// Function to update heading with effects
function updateHeading() {
    if (!heading) return;
    
    // Clear previous animations and special states
    clearAnimations(heading, headingAnimations);
    heading.classList.remove('heading-rainbow', 'heading-glow');
    
    // Move to next message
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    heading.textContent = messages[currentMessageIndex];
    
    // Add special effects based on click count
    if (clickCount === 1) {
        addRandomAnimation(heading, ['heading-bounce']);
    } else if (clickCount === 3) {
        heading.classList.add('heading-glow');
        setTimeout(() => {
            if (heading) heading.classList.remove('heading-glow');
        }, 2000);
    } else if (clickCount === 5) {
        addRandomAnimation(heading, ['heading-shake']);
    } else if (clickCount === 7) {
        heading.classList.add('heading-rainbow');
        setTimeout(() => {
            if (heading) heading.classList.remove('heading-rainbow');
        }, 3000);
    } else if (clickCount >= 10) {
        // Super excited mode for high click counts
        if (contentWrapper) {
            contentWrapper.classList.add('super-excited');
            setTimeout(() => {
                if (contentWrapper) contentWrapper.classList.remove('super-excited');
            }, 2000);
        }
    } else {
        addRandomAnimation(heading, headingAnimations);
    }
}

// Function to update button text
function updateButton() {
    if (!button) return;
    
    currentButtonTextIndex = (currentButtonTextIndex + 1) % buttonTexts.length;
    button.textContent = buttonTexts[currentButtonTextIndex];
    
    // Add button animation
    clearAnimations(button, buttonAnimations);
    addRandomAnimation(button, buttonAnimations);
}

// Function to show and update counter
function updateCounter() {
    if (!counter || !countSpan) return;
    
    countSpan.textContent = clickCount;
    
    // Show counter after first click
    if (clickCount === 1) {
        counter.classList.remove('hidden');
    }
    
    // Add special highlight effect every 5 clicks
    if (clickCount % 5 === 0 && clickCount > 0) {
        counter.classList.add('counter-highlight');
        setTimeout(() => {
            if (counter) counter.classList.remove('counter-highlight');
        }, 500);
    }
}

// Function to add background effects
function addBackgroundEffect() {
    if (!contentWrapper) return;
    
    // Clear previous backgrounds
    specialBackgrounds.forEach(bg => {
        contentWrapper.classList.remove(bg);
    });
    
    // Add random background effect occasionally
    if (clickCount % 7 === 0 && clickCount > 0) {
        const randomBg = specialBackgrounds[Math.floor(Math.random() * specialBackgrounds.length)];
        contentWrapper.classList.add(randomBg);
        
        setTimeout(() => {
            if (contentWrapper) contentWrapper.classList.remove(randomBg);
        }, 3000);
    }
}

// Function to handle special milestone clicks
function handleSpecialMilestones() {
    if (clickCount === 10) {
        // Party mode!
        document.body.style.background = 'linear-gradient(45deg, var(--color-bg-1), var(--color-bg-2), var(--color-bg-3), var(--color-bg-4))';
        document.body.style.backgroundSize = '400% 400%';
        document.body.style.animation = 'rainbow 3s ease infinite';
        
        setTimeout(() => {
            document.body.style.background = '';
            document.body.style.backgroundSize = '';
            document.body.style.animation = '';
        }, 3000);
    }
    
    if (clickCount === 15) {
        // Reset to beginning but keep counter
        currentMessageIndex = -1; // Will become 0 on next update
        currentButtonTextIndex = -1; // Will become 0 on next update
        
        // Add special reset effect
        if (heading && button) {
            heading.style.transform = 'scale(0)';
            button.style.transform = 'scale(0)';
            
            setTimeout(() => {
                if (heading && button) {
                    heading.style.transform = 'scale(1)';
                    button.style.transform = 'scale(1)';
                    heading.style.transition = 'transform 0.5s var(--ease-standard)';
                    button.style.transition = 'transform 0.5s var(--ease-standard)';
                }
            }, 200);
            
            setTimeout(() => {
                if (heading && button) {
                    heading.style.transition = '';
                    button.style.transition = '';
                }
            }, 700);
        }
    }
}

// Main click handler
function handleClick() {
    clickCount++;
    
    console.log(`Click ${clickCount}!`);
    
    // Update all elements
    updateHeading();
    updateButton();
    updateCounter();
    addBackgroundEffect();
    handleSpecialMilestones();
    
    // Add a subtle click feedback to the entire content
    if (contentWrapper) {
        contentWrapper.style.transform = 'scale(0.98)';
        setTimeout(() => {
            if (contentWrapper) contentWrapper.style.transform = 'scale(1)';
        }, 100);
    }
}

// Initialize the application
function initializeApp() {
    // Get DOM elements
    heading = document.getElementById('heading');
    button = document.getElementById('clickButton');
    counter = document.getElementById('clickCounter');
    countSpan = document.getElementById('count');
    contentWrapper = document.querySelector('.content-wrapper');
    
    // Check if all elements are found
    if (!heading || !button || !counter || !countSpan || !contentWrapper) {
        console.error('Could not find required DOM elements');
        return;
    }
    
    // Set initial state
    heading.textContent = messages[0];
    button.textContent = buttonTexts[0];
    countSpan.textContent = '0';
    
    // Add event listeners
    button.addEventListener('click', handleClick);
    
    // Add hover effects
    button.addEventListener('mouseenter', function() {
        if (clickCount > 5) {
            this.style.boxShadow = `0 0 20px rgba(var(--color-teal-500-rgb, 33, 128, 141), 0.4)`;
        }
    });

    button.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });

    // Add keyboard support
    button.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
        }
    });
    
    // Add initial focus to button for accessibility
    button.focus();
    
    console.log('🎉 Welcome to the useless thing! Click the button to start the fun!');
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}