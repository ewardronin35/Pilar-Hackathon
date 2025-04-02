// Accessibility Options Management
const AccessibilityManager = {
    options: {
        dyslexiaFriendly: {
            label: 'Dyslexia Friendly',
            class: 'dyslexia-friendly',
            icon: 'fas fa-book-reader',
            description: 'Adjusts font and spacing for easier reading'
        },
        highContrast: {
            label: 'High Contrast',
            class: 'high-contrast',
            icon: 'fas fa-adjust',
            description: 'Enhances color contrast for better visibility'
        },
        focusMode: {
            label: 'ADHD Focus Mode',
            class: 'focus-mode',
            icon: 'fas fa-bullseye',
            description: 'Reduces visual distractions'
        },
        colorBlindMode: {
            label: 'Color Blind Friendly',
            class: 'color-blind-friendly',
            icon: 'fas fa-eye',
            description: 'Modifies color schemes for color blindness'
        },
        textToSpeech: {
            label: 'Text-to-Speech',
            class: 'text-to-speech',
            icon: 'fas fa-volume-up',
            description: 'Reads content aloud'
        }
    },

    init() {
        this.createAccessibilityDropdown();
        this.loadSavedSettings();
        this.initTextToSpeech();
    },

    createAccessibilityDropdown() {
        const dropdownContainer = document.createElement('div');
        dropdownContainer.className = 'accessibility-dropdown';
        dropdownContainer.innerHTML = `
            <button class="accessibility-toggle" aria-label="Accessibility Options">
                <i class="fas fa-universal-access"></i>
            </button>
            <div class="accessibility-menu">
                ${Object.entries(this.options).map(([key, option]) => `
                    <div class="accessibility-option" data-option="${key}">
                        <input type="checkbox" id="access-${key}" class="accessibility-checkbox">
                        <label for="access-${key}">
                            <i class="${option.icon}"></i>
                            <span>${option.label}</span>
                            <small>${option.description}</small>
                        </label>
                    </div>
                `).join('')}
            </div>
        `;

        // Add event listeners
        dropdownContainer.querySelector('.accessibility-toggle').addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownContainer.querySelector('.accessibility-menu').classList.toggle('show');
        });

        dropdownContainer.querySelectorAll('.accessibility-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const checkbox = option.querySelector('.accessibility-checkbox');
                checkbox.checked = !checkbox.checked;
                this.toggleAccessibilityOption(option.dataset.option, checkbox.checked);
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdownContainer.contains(e.target)) {
                dropdownContainer.querySelector('.accessibility-menu').classList.remove('show');
            }
        });

        // Append to user profile
        const userProfileDisplay = document.getElementById('userProfileDisplay');
        userProfileDisplay.appendChild(dropdownContainer);
    },

    toggleAccessibilityOption(option, isEnabled) {
        const optionConfig = this.options[option];
        if (!optionConfig) return;

        if (isEnabled) {
            document.body.classList.add(optionConfig.class);
        } else {
            document.body.classList.remove(optionConfig.class);
        }

        // Save to local storage
        localStorage.setItem(`accessibility-${option}`, isEnabled);
    },

    loadSavedSettings() {
        Object.keys(this.options).forEach(option => {
            const savedSetting = localStorage.getItem(`accessibility-${option}`);
            if (savedSetting === 'true') {
                const checkbox = document.querySelector(`#access-${option}`);
                if (checkbox) {
                    checkbox.checked = true;
                    this.toggleAccessibilityOption(option, true);
                }
            }
        });
    },

    initTextToSpeech() {
        const synth = window.speechSynthesis;

        function speakText(text) {
            if (!document.body.classList.contains('text-to-speech')) return;
            
            const utterance = new SpeechSynthesisUtterance(text);
            synth.speak(utterance);
        }

        // Automatically speak welcome message if text-to-speech is enabled
        document.addEventListener('DOMContentLoaded', () => {
            const savedTTSSetting = localStorage.getItem('accessibility-textToSpeech');
            if (savedTTSSetting === 'true') {
                const welcomeMessage = document.querySelector('.welcome-message').textContent;
                speakText(welcomeMessage);
            }
        });

        // Add global text-to-speech capability
        document.addEventListener('mouseover', (e) => {
            if (!document.body.classList.contains('text-to-speech')) return;
            
            const target = e.target;
            const speakableElements = ['H1', 'H2', 'H3', 'P', 'BUTTON', 'A'];
            
            if (speakableElements.includes(target.tagName)) {
                target.addEventListener('click', () => {
                    speakText(target.textContent);
                });
            }
        });
    }
};

// Initialize on document load
document.addEventListener('DOMContentLoaded', () => {
    AccessibilityManager.init();
});