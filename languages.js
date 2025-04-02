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
    document.querySelector('label[for="userEmail"]').textContent = selectedLang.welcome.email;
    document.querySelector('label[for="gradeLevel"]').textContent = selectedLang.welcome.gradeLevel;
    
    // Update avatar and accessibility section labels
    document.querySelector('.option-title span').textContent = selectedLang.welcome.accessibilityOptions;
    
    // Update buttons
    document.getElementById('skipButton').textContent = selectedLang.welcome.skipButton;
    document.getElementById('startButton').textContent = selectedLang.welcome.startButton;
    
    // Store language preference
    localStorage.setItem('pilarLanguage', langCode);
}

// Language selector in the header
function createLanguageSelector() {
    const languageDropdown = document.createElement('div');
    languageDropdown.className = 'language-selector';
    languageDropdown.innerHTML = `
        <select id="languageSelect">
            <option value="en">English</option>
            <option value="fil">Filipino</option>
        </select>
    `;
    
    // Add to header
    const headerContent = document.querySelector('.header-content');
    headerContent.appendChild(languageDropdown);
    
    // Event listener for language change
    document.getElementById('languageSelect').addEventListener('change', function() {
        setLanguage(this.value);
    });
    
    // Load saved language preference
    const savedLang = localStorage.getItem('pilarLanguage') || 'en';
    setLanguage(savedLang);
    document.getElementById('languageSelect').value = savedLang;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', createLanguageSelector);