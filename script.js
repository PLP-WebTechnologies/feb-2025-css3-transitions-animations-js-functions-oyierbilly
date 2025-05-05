document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const savePrefBtn = document.getElementById('savePref');
    const animateBtn = document.getElementById('animateBtn');
    const targetElement = document.getElementById('targetElement');
    const usernameInput = document.getElementById('username');
    const themeSelect = document.getElementById('theme');
    
    // Load saved preferences
    loadPreferences();
    
    // Save preferences to localStorage
    savePrefBtn.addEventListener('click', function() {
        const preferences = {
            username: usernameInput.value,
            theme: themeSelect.value
        };
        
        localStorage.setItem('userPreferences', JSON.stringify(preferences));
        applyTheme(preferences.theme);
        
        // Show feedback animation
        this.textContent = 'Saved!';
        setTimeout(() => {
            this.textContent = 'Save Preferences';
        }, 1000);
    });
    
    // Trigger animation
    animateBtn.addEventListener('click', function() {
        // Toggle animation class
        targetElement.classList.add('animate');
        
        // Remove class after animation completes
        setTimeout(() => {
            targetElement.classList.remove('animate');
        }, 2000);
        
        // Add a bounce effect to the button
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 300);
    });
    
    // Load preferences from localStorage
    function loadPreferences() {
        const savedPrefs = localStorage.getItem('userPreferences');
        if (savedPrefs) {
            const preferences = JSON.parse(savedPrefs);
            usernameInput.value = preferences.username || '';
            themeSelect.value = preferences.theme || 'light';
            applyTheme(preferences.theme);
        }
    }
    
    // Apply selected theme
    function applyTheme(theme) {
        // Remove all theme classes
        document.body.classList.remove('light', 'dark', 'blue');
        
        // Add selected theme class
        document.body.classList.add(theme);
    }
    
    // Additional interactive effect for the animated box
    targetElement.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)';
    });
    
    targetElement.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
});