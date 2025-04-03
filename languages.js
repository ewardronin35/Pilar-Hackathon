const languages = {
    en: {
        welcome: {
            title: "Welcome to Pilar-eLearn!",
            subtitle: "Create your learning adventure profile",
            name: "Your Name",
            email: "Your Email",
            gradeLevel: "Grade Level",
            avatarSelection: "Choose Your Avatar",
            accessibilityOptions: "Accessibility Options",
            skipButton: "Skip for Now",
            startButton: "Start Adventure"
        }
    },
    fil: {
        welcome: {
            title: "Welcome sa Pilar-eLearn!",
            subtitle: "Gumawa ng iyong profile sa pag-aaral",
            name: "Iyong Pangalan",
            email: "Iyong Email",
            gradeLevel: "Antas ng Baitang",
            avatarSelection: "Pumili ng Avatar",
            accessibilityOptions: "Mga Opsyon sa Accessibility",
            skipButton: "Laktawan Muna",
            startButton: "Simulan ang Karanasan"
        }
    }
};

// Language management function
function setLanguage(langCode) {
    const selectedLang = languages[langCode] || languages['en'];
    
    // Update modal text
    document.getElementById('modalTitle').textContent = selectedLang.welcome.title;
    document.getElementById('modalSubtitle').textContent = selectedLang.welcome.subtitle;
    
    // Update form labels
    document.querySelector('label[for="userName"]').textContent = selectedLang.welcome.name;
    // Remove email reference since it's been removed from the form
    document.querySelector('label[for="gradeLevel"]').textContent = selectedLang.welcome.gradeLevel;
    
    // Update avatar label
    const avatarLabel = document.querySelector('.form-group .form-label:not([for])');
    if (avatarLabel) {
        avatarLabel.textContent = selectedLang.welcome.avatarSelection;
    }
    
    // Update accessibility section labels
    const accessibilityTitle = document.querySelector('.option-title');
    if (accessibilityTitle) {
        accessibilityTitle.textContent = selectedLang.welcome.accessibilityOptions;
    }
    
    // Update buttons
    document.getElementById('skipButton').textContent = selectedLang.welcome.skipButton;
    document.getElementById('startButton').textContent = selectedLang.welcome.startButton;
    
    // Store language preference
    localStorage.setItem('pilarLanguage', langCode);
}

// Language selector in the header
function createLanguageSelector() {
    // Check if the language selector already exists to avoid duplicates
    if (document.querySelector('.language-selector')) {
        return;
    }
    
    const languageDropdown = document.createElement('div');
    languageDropdown.className = 'language-selector';
    languageDropdown.innerHTML = `
        <select id="languageSelect" style="background-color: var(--card-bg); color: var(--text); border: 1px solid var(--accent); padding: 5px 10px; border-radius: 5px;">
            <option value="en">English</option>
            <option value="fil">Filipino</option>
        </select>
    `;
    
    // Add to header - make sure the header-content exists
    const headerContent = document.querySelector('.header-content');
    if (headerContent) {
        headerContent.appendChild(languageDropdown);
        
        // Event listener for language change
        document.getElementById('languageSelect').addEventListener('change', function() {
            setLanguage(this.value);
        });
        
        // Load saved language preference
        const savedLang = localStorage.getItem('pilarLanguage') || 'en';
        setLanguage(savedLang);
        document.getElementById('languageSelect').value = savedLang;
    } else {
        console.error('Header content element not found');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', createLanguageSelector);