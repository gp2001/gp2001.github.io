// Resume Chatbot with Azure OpenAI Integration
(function() {
  'use strict';

  // Configuration - Update these with your Azure Function endpoint
  const CHATBOT_CONFIG = {
    apiEndpoint: 'YOUR_AZURE_FUNCTION_ENDPOINT', // e.g., 'https://your-function.azurewebsites.net/api/chat'
    maxMessages: 50,
    welcomeMessage: 'Hi! I\'m Gabriel\'s AI assistant. Ask me anything about his experience, projects, skills, or education.',
    welcomeMessageNL: 'Hoi! Ik ben Gabriel\'s AI-assistent. Vraag me wat je wilt over zijn ervaring, projecten, vaardigheden of opleiding.',
    errorMessage: 'Sorry, I encountered an error. Please try again.',
    errorMessageNL: 'Sorry, er is een fout opgetreden. Probeer het opnieuw.'
  };

  let chatHistory = [];
  let isOpen = false;
  let isLoading = false;
  let currentLanguage = 'nl';

  // Initialize chatbot
  function initChatbot() {
    createChatbotUI();
    attachEventListeners();
    detectLanguage();
    loadChatHistory();
  }

  // Detect current language from page
  function detectLanguage() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
      if (btn.classList.contains('active')) {
        currentLanguage = btn.dataset.lang || 'nl';
      }
    });
  }

  // Create chatbot UI structure
  function createChatbotUI() {
    const chatbotHTML = `
      <div id="chatbot-container" class="chatbot-container">
        <!-- Chat Button -->
        <button id="chatbot-toggle" class="chatbot-toggle" aria-label="Toggle chat">
          <svg class="chat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <svg class="close-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <!-- Chat Window -->
        <div id="chatbot-window" class="chatbot-window">
          <!-- Header -->
          <div class="chatbot-header">
            <div class="chatbot-header-content">
              <div class="chatbot-avatar">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <div class="chatbot-header-text">
                <h3 data-chatbot-i18n="title">AI Assistent</h3>
                <span data-chatbot-i18n="status">Online</span>
              </div>
            </div>
            <button class="chatbot-close" id="chatbot-close" aria-label="Close chat">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <!-- Messages -->
          <div id="chatbot-messages" class="chatbot-messages">
            <div class="message bot-message">
              <div class="message-avatar">AI</div>
              <div class="message-content">
                <p>${CHATBOT_CONFIG.welcomeMessageNL}</p>
              </div>
            </div>
          </div>

          <!-- Input -->
          <div class="chatbot-input-container">
            <textarea 
              id="chatbot-input" 
              class="chatbot-input" 
              placeholder="Stel een vraag..."
              rows="1"
              data-chatbot-placeholder-nl="Stel een vraag..."
              data-chatbot-placeholder-en="Ask a question..."
            ></textarea>
            <button id="chatbot-send" class="chatbot-send" aria-label="Send message">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
  }

  // Attach event listeners
  function attachEventListeners() {
    const toggle = document.getElementById('chatbot-toggle');
    const close = document.getElementById('chatbot-close');
    const send = document.getElementById('chatbot-send');
    const input = document.getElementById('chatbot-input');

    toggle.addEventListener('click', toggleChat);
    close.addEventListener('click', closeChat);
    send.addEventListener('click', sendMessage);
    
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    // Auto-resize textarea
    input.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = Math.min(this.scrollHeight, 120) + 'px';
    });

    // Listen for language changes
    document.addEventListener('languageChanged', function(e) {
      currentLanguage = e.detail.language;
      updateChatbotLanguage();
    });

    // Monitor existing language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        setTimeout(detectLanguage, 100);
        setTimeout(updateChatbotLanguage, 150);
      });
    });
  }

  // Toggle chat window
  function toggleChat() {
    isOpen = !isOpen;
    const container = document.getElementById('chatbot-container');
    const toggle = document.getElementById('chatbot-toggle');
    
    if (isOpen) {
      container.classList.add('open');
      toggle.classList.add('open');
      document.getElementById('chatbot-input').focus();
    } else {
      container.classList.remove('open');
      toggle.classList.remove('open');
    }
  }

  // Close chat window
  function closeChat() {
    isOpen = false;
    const container = document.getElementById('chatbot-container');
    const toggle = document.getElementById('chatbot-toggle');
    container.classList.remove('open');
    toggle.classList.remove('open');
  }

  // Send message
  async function sendMessage() {
    if (isLoading) return;

    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();

    if (!message) return;

    // Add user message to UI
    addMessage(message, 'user');
    input.value = '';
    input.style.height = 'auto';

    // Show loading
    isLoading = true;
    showTypingIndicator();

    try {
      // Get resume context
      const resumeContext = extractResumeContext();

      // Call Azure OpenAI via backend
      const response = await fetch(CHATBOT_CONFIG.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          context: resumeContext,
          history: chatHistory.slice(-10), // Last 10 messages for context
          language: currentLanguage
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      
      // Remove typing indicator
      removeTypingIndicator();

      // Add bot response
      addMessage(data.response, 'bot');

    } catch (error) {
      console.error('Chatbot error:', error);
      removeTypingIndicator();
      
      const errorMsg = currentLanguage === 'en' 
        ? CHATBOT_CONFIG.errorMessage 
        : CHATBOT_CONFIG.errorMessageNL;
      
      addMessage(errorMsg, 'bot', true);
    }

    isLoading = false;
  }

  // Add message to chat
  function addMessage(text, sender, isError = false) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageClass = sender === 'user' ? 'user-message' : 'bot-message';
    const errorClass = isError ? ' error-message' : '';

    const messageHTML = `
      <div class="message ${messageClass}${errorClass}">
        ${sender === 'bot' ? '<div class="message-avatar">AI</div>' : ''}
        <div class="message-content">
          <p>${escapeHtml(text)}</p>
        </div>
        ${sender === 'user' ? '<div class="message-avatar">U</div>' : ''}
      </div>
    `;

    messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Save to history
    chatHistory.push({ sender, text, timestamp: Date.now() });
    if (chatHistory.length > CHATBOT_CONFIG.maxMessages) {
      chatHistory.shift();
    }
    saveChatHistory();
  }

  // Show typing indicator
  function showTypingIndicator() {
    const messagesContainer = document.getElementById('chatbot-messages');
    const typingHTML = `
      <div class="message bot-message typing-indicator" id="typing-indicator">
        <div class="message-avatar">AI</div>
        <div class="message-content">
          <div class="typing-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    `;
    messagesContainer.insertAdjacentHTML('beforeend', typingHTML);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Remove typing indicator
  function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) {
      indicator.remove();
    }
  }

  // Extract resume context from page
  function extractResumeContext() {
    const context = {
      name: 'Gabriel Shamon',
      about: '',
      skills: [],
      projects: [],
      experience: [],
      education: [],
      certificates: [],
      interests: ''
    };

    // Extract about section
    const aboutSection = document.querySelector('[data-i18n="about_content"]');
    if (aboutSection) {
      context.about = aboutSection.textContent.trim();
    }

    // Extract projects
    const projectsSection = document.querySelector('#projecten');
    if (projectsSection) {
      const projectsList = projectsSection.closest('.container').querySelector('.list-container');
      if (projectsList) {
        const projects = projectsList.querySelectorAll('.layout');
        projects.forEach(project => {
          const title = project.querySelector('h4')?.textContent.trim();
          const subtitle = project.querySelector('.details p b')?.textContent.trim();
          const content = project.querySelector('.content')?.textContent.trim();
          if (title) {
            context.projects.push({ title, subtitle, description: content });
          }
        });
      }
    }

    // Extract work experience
    const experienceSection = document.querySelector('#werk-ervaringen');
    if (experienceSection) {
      const expList = experienceSection.closest('.container').querySelector('.list-container');
      if (expList) {
        const experiences = expList.querySelectorAll('.layout');
        experiences.forEach(exp => {
          const title = exp.querySelector('h4')?.textContent.trim();
          const company = exp.querySelector('.details p b')?.textContent.trim();
          const content = exp.querySelector('.content')?.textContent.trim();
          if (title) {
            context.experience.push({ title, company, description: content });
          }
        });
      }
    }

    // Extract education
    const educationSection = document.querySelector('#educatie');
    if (educationSection) {
      const eduList = educationSection.closest('.container').querySelector('.list-container');
      if (eduList) {
        const education = eduList.querySelectorAll('.layout');
        education.forEach(edu => {
          const degree = edu.querySelector('h4')?.textContent.trim();
          const institution = edu.querySelector('.details p b')?.textContent.trim();
          const content = edu.querySelector('.content')?.textContent.trim();
          if (degree) {
            context.education.push({ degree, institution, description: content });
          }
        });
      }
    }

    // Extract interests
    const interestsSection = document.querySelector('[data-i18n="interests_content"]');
    if (interestsSection) {
      context.interests = interestsSection.textContent.trim();
    }

    return context;
  }

  // Update chatbot language
  function updateChatbotLanguage() {
    const translations = {
      en: {
        title: 'AI Assistant',
        status: 'Online',
        placeholder: 'Ask a question...'
      },
      nl: {
        title: 'AI Assistent',
        status: 'Online',
        placeholder: 'Stel een vraag...'
      }
    };

    const lang = currentLanguage || 'nl';
    const t = translations[lang];

    // Update header
    document.querySelector('[data-chatbot-i18n="title"]').textContent = t.title;
    document.querySelector('[data-chatbot-i18n="status"]').textContent = t.status;

    // Update input placeholder
    const input = document.getElementById('chatbot-input');
    input.placeholder = t.placeholder;
  }

  // Save chat history to localStorage
  function saveChatHistory() {
    try {
      localStorage.setItem('chatbot_history', JSON.stringify(chatHistory));
    } catch (e) {
      console.error('Failed to save chat history:', e);
    }
  }

  // Load chat history from localStorage
  function loadChatHistory() {
    try {
      const saved = localStorage.getItem('chatbot_history');
      if (saved) {
        chatHistory = JSON.parse(saved);
        
        // Restore messages (limit to last 20)
        const recentHistory = chatHistory.slice(-20);
        const messagesContainer = document.getElementById('chatbot-messages');
        
        // Clear welcome message if we have history
        if (recentHistory.length > 0) {
          messagesContainer.innerHTML = '';
        }
        
        recentHistory.forEach(msg => {
          const messageClass = msg.sender === 'user' ? 'user-message' : 'bot-message';
          const messageHTML = `
            <div class="message ${messageClass}">
              ${msg.sender === 'bot' ? '<div class="message-avatar">AI</div>' : ''}
              <div class="message-content">
                <p>${escapeHtml(msg.text)}</p>
              </div>
              ${msg.sender === 'user' ? '<div class="message-avatar">U</div>' : ''}
            </div>
          `;
          messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        });
      }
    } catch (e) {
      console.error('Failed to load chat history:', e);
    }
  }

  // Escape HTML
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
  } else {
    initChatbot();
  }

})();
