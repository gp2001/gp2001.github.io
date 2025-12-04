// Language Switcher for Resume
(function() {
  'use strict';

  // Translation data
  const translations = {
    nl: {
      // About section
      about_title: "Over mij",
      about_content: `Hallo, mijn naam is Gabriël en ik werk bij ICT Nederland. In mijn huidige rol zoek ik verbanden in data en richt ik me op AI. Ik heb tijdens mijn Bachelor en Master ervaring opgedaan met software, optimalisatie, data en AI.

Mijn meeste ervaring is in <mark>C#</mark>, maar ik kan ook <mark>Python</mark>, <mark>Haskell</mark>, <mark>JavaScript</mark>, <mark>CSS</mark>, <mark>HTML</mark>, <mark>SQL</mark> en <mark>R</mark>. Momenteel ben ik bezig met trainingen voor <mark>AI</mark> en <mark>Azure Data Scientist</mark>.

Ik spreek ook <mark>Nederlands</mark>, <mark>Engels</mark>, <mark>Chaldeeuws</mark> en <mark>Duits</mark>.`,
      
      // Section titles
      projecten_title: "Projecten",
      "werk-ervaringen_title": "Werk Ervaringen",
      educatie_title: "Educatie",
      certificaten_title: "Certificaten",
      interesses_title: "Interesses",
      
      // Job title
      job_title: "Software Engineer bij ICT Group, MSc Applied Data Science, BSc Computer Science",
      
      // Interests
      interests_content: `- Voetbal: ik speel regelmatig in mijn vrije tijd en vind het leuk om naar wedstrijden te kijken.
- Fitnessen: ik hecht veel waarde aan een gezonde levensstijl en breng daarom graag tijd door in de sportschool.
- Gamen: ik vind het leuk om af en toe te ontspannen met een videogame.
- Persoonlijke ontwikkeling: ik ben altijd op zoek naar manieren om mezelf te verbeteren en nieuwe vaardigheden te leren.
- Netwerken: ik vind het leuk om nieuwe mensen te ontmoeten en te leren van hun ervaringen.
- Op avontuur gaan: ik houd ervan om nieuwe plaatsen te ontdekken en nieuwe ervaringen op te doen, zowel in mijn eigen omgeving als daarbuiten. Ik ben altijd bereid om uit mijn comfortzone te stappen en nieuwe uitdagingen aan te gaan.`
    },
    en: {
      // About section
      about_title: "About Me",
      about_content: `Hello, my name is Gabriël and I work at ICT Nederland. In my current role, I identify patterns in data and focus on AI. I gained experience with software, optimization, data, and AI during my Bachelor's and Master's degrees.

I have the most experience in <mark>C#</mark>, but I can also work with <mark>Python</mark>, <mark>Haskell</mark>, <mark>JavaScript</mark>, <mark>CSS</mark>, <mark>HTML</mark>, <mark>SQL</mark>, and <mark>R</mark>. Currently, I am completing training in <mark>AI</mark> and <mark>Azure Data Scientist</mark>.

I also speak <mark>Dutch</mark>, <mark>English</mark>, <mark>Chaldean</mark>, and <mark>German</mark>.`,
      
      // Section titles
      projecten_title: "Projects",
      "werk-ervaringen_title": "Work Experience",
      educatie_title: "Education",
      certificaten_title: "Certificates",
      interesses_title: "Interests",
      
      // Job title
      job_title: "Software Engineer at ICT Group, MSc Applied Data Science, BSc Computer Science",
      
      // Interests
      interests_content: `- Football: I play regularly in my free time and enjoy watching matches.
- Fitness: I value a healthy lifestyle and enjoy spending time at the gym.
- Gaming: I enjoy relaxing with a video game from time to time.
- Personal development: I am always looking for ways to improve myself and learn new skills.
- Networking: I enjoy meeting new people and learning from their experiences.
- Going on adventures: I love discovering new places and gaining new experiences, both in my own environment and beyond. I am always willing to step out of my comfort zone and take on new challenges.`
    }
  };

  // Get current language from localStorage or default to 'nl'
  let currentLang = localStorage.getItem('preferredLanguage') || 'nl';

  // Function to apply translations
  function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.value = translations[lang][key];
        } else {
          element.innerHTML = translations[lang][key];
        }
      }
    });
    
    // Handle Interests section specially
    const interestsSection = document.querySelector('#interesses');
    if (interestsSection) {
      const interestsContainer = interestsSection.closest('.container');
      if (interestsContainer) {
        const contentDiv = interestsContainer.querySelector('[data-i18n-section="text-content"]');
        if (contentDiv && translations[lang].interests_content) {
          contentDiv.innerHTML = '<p>' + translations[lang].interests_content.replace(/\n/g, '<br>') + '</p>';
        }
      }
    }
    
    // Update language toggle button state
    updateToggleButton();
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }

  // Function to update toggle button appearance
  function updateToggleButton() {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
      if (btn.getAttribute('data-lang') === currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Function to create and inject language switcher
  function createLanguageSwitcher() {
    const headerRight = document.querySelector('.header-right .icons');
    
    if (headerRight) {
      const langSwitcher = document.createElement('li');
      langSwitcher.className = 'lang-switcher';
      langSwitcher.innerHTML = `
        <div class="language-toggle">
          <button class="lang-btn" data-lang="nl" title="Nederlands">NL</button>
          <button class="lang-btn" data-lang="en" title="English">EN</button>
        </div>
      `;
      
      // Insert at the beginning of the icons list
      headerRight.insertBefore(langSwitcher, headerRight.firstChild);
      
      // Add click handlers
      langSwitcher.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          const lang = this.getAttribute('data-lang');
          applyTranslations(lang);
        });
      });
    }
  }

  // Initialize on page load
  window.addEventListener('DOMContentLoaded', function() {
    createLanguageSwitcher();
    applyTranslations(currentLang);
  });

  // Expose function globally for manual triggering
  window.switchLanguage = function(lang) {
    applyTranslations(lang);
  };

})();
