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

  // Store original Dutch content on first load
  let originalContent = {};
  let contentCached = false;

  // Cache original Dutch content
  function cacheOriginalContent() {
    if (contentCached) return;
    
    // Cache all section content
    const sections = document.querySelectorAll('.list-container');
    
    sections.forEach((section) => {
      const sectionTitle = section.querySelector('h3');
      const sectionId = sectionTitle ? sectionTitle.id : '';
      
      section.querySelectorAll('.layout').forEach((layout, index) => {
        const details = layout.querySelector('.details');
        const content = layout.querySelector('.content');
        
        if (!details || !content) return;
        
        const title = details.querySelector('h4');
        const subtitleElem = details.querySelector('p b');
        const subtitleParent = subtitleElem ? subtitleElem.parentElement : null;
        
        // Find caption - it's usually the second <p> or third child p
        const allPs = details.querySelectorAll('p');
        let captionElem = null;
        for (let p of allPs) {
          if (!p.classList.contains('no-print') && !p.querySelector('b') && !p.querySelector('a')) {
            captionElem = p;
            break;
          }
        }
        
        const quote = content.querySelector('.quote');
        
        const cacheKey = `${sectionId}_${index}`;
        originalContent[cacheKey] = {
          title: title ? title.innerHTML : '',
          subtitle: subtitleElem ? subtitleElem.textContent : '',
          subtitleHTML: subtitleParent ? subtitleParent.innerHTML : '',
          caption: captionElem ? captionElem.textContent : '',
          quote: quote ? quote.innerHTML : '',
          contentHTML: content.innerHTML
        };
      });
    });
    
    contentCached = true;
  }

  // Function to translate all list content (projects, work experience, education, certificates)
  function translateProjects(lang) {
    // Get all section containers
    const sections = document.querySelectorAll('.list-container');
    
    sections.forEach((section, sectionIndex) => {
      const sectionTitle = section.querySelector('h3');
      const sectionId = sectionTitle ? sectionTitle.id : '';
      
      // Determine which translation array to use based on section
      let translationArray = null;
      if (lang === 'en' && window.englishContent) {
        if (sectionId === 'projecten' || sectionId === 'projects') {
          translationArray = window.englishContent.projects;
        } else if (sectionId === 'werk-ervaringen' || sectionId === 'work-experience') {
          translationArray = window.englishContent.workExperience;
        } else if (sectionId === 'educatie' || sectionId === 'education') {
          translationArray = window.englishContent.education;
        } else if (sectionId === 'certificaten' || sectionId === 'certificates') {
          translationArray = window.englishContent.certificates;
        }
      }
      
      translateSectionContent(section, lang, translationArray, sectionId);
    });
  }
  
  // Function to translate content in a specific section
  function translateSectionContent(section, lang, translationArray, sectionId) {
    const layouts = section.querySelectorAll('.layout');
    
    if (lang === 'nl') {
      // Restore original Dutch content
      layouts.forEach((layout, index) => {
        const cacheKey = `${sectionId}_${index}`;
        const cached = originalContent[cacheKey];
        if (!cached) return;
        
        const details = layout.querySelector('.details');
        const content = layout.querySelector('.content');
        if (!details || !content) return;
        
        const title = details.querySelector('h4');
        const subtitleElem = details.querySelector('p b');
        const subtitleParent = subtitleElem ? subtitleElem.parentElement : null;
        
        // Find caption
        const allPs = details.querySelectorAll('p');
        let captionElem = null;
        for (let p of allPs) {
          if (!p.classList.contains('no-print') && !p.querySelector('b') && !p.querySelector('a')) {
            captionElem = p;
            break;
          }
        }
        
        // Restore all content
        if (title && cached.title) title.innerHTML = cached.title;
        if (subtitleParent && cached.subtitleHTML) subtitleParent.innerHTML = cached.subtitleHTML;
        if (captionElem && cached.caption) captionElem.textContent = cached.caption;
        if (cached.contentHTML) content.innerHTML = cached.contentHTML;
      });
    } else if (lang === 'en' && translationArray) {
      // Apply English translations
      layouts.forEach((layout, index) => {
        if (index >= translationArray.length) return;
        
        const item = translationArray[index];
        const details = layout.querySelector('.details');
        const content = layout.querySelector('.content');
        if (!details || !content) return;
        
        const title = details.querySelector('h4');
        const subtitleElem = details.querySelector('p b');
        
        // Find caption
        const allPs = details.querySelectorAll('p');
        let captionElem = null;
        for (let p of allPs) {
          if (!p.classList.contains('no-print') && !p.querySelector('b') && !p.querySelector('a')) {
            captionElem = p;
            break;
          }
        }
        
        const quote = content.querySelector('.quote');
        
        // Update title, subtitle, caption
        if (title && item.title) {
          title.textContent = item.title;
        }
        if (subtitleElem && item.sub_title) {
          subtitleElem.textContent = item.sub_title;
        }
        if (captionElem && item.caption) {
          captionElem.textContent = item.caption;
        }
        if (quote && item.quote) {
          quote.innerHTML = item.quote;
        }
        
        // Update description
        if (item.description) {
          // Split into paragraphs and convert markdown
          const paragraphs = item.description.split('\n\n');
          let htmlContent = '';
          
          paragraphs.forEach(para => {
            if (para.trim()) {
              // Convert markdown bold to HTML
              let html = para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              // Convert line breaks within paragraphs
              html = html.replace(/\n/g, '<br>\n');
              // Wrap in paragraph tag
              htmlContent += '<p>' + html + '</p>\n';
            }
          });
          
          const quoteHTML = quote ? quote.outerHTML : '';
          content.innerHTML = quoteHTML + htmlContent;
        }
      });
    }
  }

  // STAR label translations
  const starLabels = {
    nl: {
      'Situatie:': 'Situatie:',
      'Taak:': 'Taak:',
      'Activiteiten:': 'Activiteiten:',
      'Resultaat:': 'Resultaat:',
      'Heden': 'Heden'
    },
    en: {
      'Situatie:': 'Situation:',
      'Taak:': 'Task:',
      'Activiteiten:': 'Activities:',
      'Resultaat:': 'Result:',
      'Heden': 'Present'
    }
  };

  // Function to translate STAR labels in content
  function translateSTARLabels(lang) {
    const descriptions = document.querySelectorAll('.layout p, .layout li');
    const labels = starLabels[lang];
    
    descriptions.forEach(element => {
      let html = element.innerHTML;
      
      // Translate STAR labels
      if (lang === 'en') {
        html = html.replace(/\*\*Situatie:\*\*/g, '**Situation:**');
        html = html.replace(/\*\*Taak:\*\*/g, '**Task:**');
        html = html.replace(/\*\*Activiteiten:\*\*/g, '**Activities:**');
        html = html.replace(/\*\*Resultaat:\*\*/g, '**Result:**');
        html = html.replace(/Heden/g, 'Present');
        html = html.replace(/Oktober/g, 'October');
      } else {
        html = html.replace(/\*\*Situation:\*\*/g, '**Situatie:**');
        html = html.replace(/\*\*Task:\*\*/g, '**Taak:**');
        html = html.replace(/\*\*Activities:\*\*/g, '**Activiteiten:**');
        html = html.replace(/\*\*Result:\*\*/g, '**Resultaat:**');
        html = html.replace(/Present/g, 'Heden');
        html = html.replace(/October/g, 'Oktober');
      }
      
      element.innerHTML = html;
    });
    
    // Translate captions (dates)
    const captions = document.querySelectorAll('.details p');
    captions.forEach(element => {
      let text = element.textContent;
      if (lang === 'en') {
        text = text.replace(/Heden/g, 'Present');
        text = text.replace(/Oktober/g, 'October');
        text = text.replace(/November/g, 'November');
        text = text.replace(/December/g, 'December');
      } else {
        text = text.replace(/Present/g, 'Heden');
        text = text.replace(/October/g, 'Oktober');
      }
      element.textContent = text;
    });
  }

  // Function to apply translations
  function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Cache original content before first translation
    if (lang === 'en') {
      cacheOriginalContent();
    }
    
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
    
    // Translate project content
    translateProjects(lang);
    
    // Translate STAR labels (keeping for any content not in englishContent)
    //translateSTARLabels(lang);
    
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
