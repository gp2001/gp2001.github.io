// Comprehensive translations for all content
window.resumeTranslations = {
  nl: {
    // Labels
    situatie: "Situatie:",
    taak: "Taak:",
    activiteiten: "Activiteiten:",
    resultaat: "Resultaat:",
    heden: "Heden",
    
    // Time periods
    "December 2024 - Heden": "December 2024 - Present",
    "Oktober 2024 - November 2024": "October 2024 - November 2024",
    "November 2024 - Heden": "November 2024 - Present",
  },
  en: {
    // Labels  
    situatie: "Situation:",
    taak: "Task:",
    activiteiten: "Activities:",
    resultaat: "Result:",
    heden: "Present",
    
    // Time periods (these will remain the same, just for consistency)
    "December 2024 - Heden": "December 2024 - Present",
    "Oktober 2024 - November 2024": "October 2024 - November 2024",
    "November 2024 - Heden": "November 2024 - Present",
  }
};

// Project-specific translations  
window.projectTranslations = {
  // MGH Project
  "mgh": {
    nl: {
      quote: "Ontwikkeling van een AI-systeem voor het analyseren van ongestructureerde medische data en het identificeren van patiëntengroepen met behulp van GraphQL en vectordatabases.",
      description: `**Situatie:** Massachusetts General Hospital (MGH) is een vooraanstaand ziekenhuis en al meer dan 10 jaar klant bij ICT. Ze hadden een applicatie ontwikkeld voor radiologie waarmee artsen precies konden zien in welke fase een patiënt zich bevond tijdens radiotherapie. MGH had te maken met grote hoeveelheden ongestructureerde data, zoals klinische notities, waaruit veel waardevolle informatie gehaald kon worden maar waarvoor geen efficiënt analysesysteem bestond.

**Taak:** Mijn taak was om een AI-oplossing te ontwikkelen die MGH zou helpen bij het analyseren van ongestructureerde data om waardevolle inzichten te verkrijgen. Het doel was om soortgelijke patiënten te kunnen identificeren die ziek waren geworden na een bepaalde behandeling, een proces dat normaal gesproken een cohortstudie van 9 maanden zou vereisen.

**Activiteiten:**
- Analyseerde de huidige data-analyseprocessen en identificeerde knelpunten
- Ontwikkelde een <mark>vectordatabase</mark> in de vorm van een grafiek om de data efficiënt te organiseren en te doorzoeken
- Implementeerde een <mark>GraphQL</mark> interface om de juiste informatie uit de vectordatabase te extraheren
- Ontwikkelde een <mark>AI-model</mark> om ongestructureerde data, zoals klinische notities en foto's, te analyseren en waardevolle inzichten te verkrijgen
- Bouwde een <mark>RAG-systeem</mark> zonder het gebruik van LangChain, volgens de specifieke vereisten van MGH

**Resultaat:** De AI-oplossing stelde MGH in staat om binnen enkele minuten patiëntengroepen te identificeren die vergelijkbare behandelingen hadden ondergaan en soortgelijke complicaties hadden ervaren. Dit verkortte het proces van cohortstudies van 9 maanden naar enkele minuten, waardoor artsen sneller evidence-based beslissingen konden nemen en de patiëntenzorg significant verbeterd werd.`
    },
    en: {
      quote: "Development of an AI system for analyzing unstructured medical data and identifying patient groups using GraphQL and vector databases.",
      description: `**Situation:** Massachusetts General Hospital (MGH) is a leading hospital and has been an ICT client for over 10 years. They had developed an application for radiology that allowed doctors to see exactly what stage a patient was in during radiotherapy. MGH dealt with large amounts of unstructured data, such as clinical notes, from which valuable information could be extracted, but for which no efficient analysis system existed.

**Task:** My task was to develop an AI solution that would help MGH analyze unstructured data to gain valuable insights. The goal was to identify similar patients who had become ill after a specific treatment, a process that would normally require a cohort study of 9 months.

**Activities:**
- Analyzed current data analysis processes and identified bottlenecks
- Developed a <mark>vector database</mark> in the form of a graph to efficiently organize and search the data
- Implemented a <mark>GraphQL</mark> interface to extract the right information from the vector database
- Developed an <mark>AI model</mark> to analyze unstructured data, such as clinical notes and photos, and gain valuable insights
- Built a <mark>RAG system</mark> without using LangChain, according to MGH's specific requirements

**Result:** The AI solution enabled MGH to identify patient groups who had undergone similar treatments and experienced similar complications within minutes. This shortened the cohort study process from 9 months to just a few minutes, allowing doctors to make evidence-based decisions faster and significantly improving patient care.`
    }
  },
  
  // Add more project translations as needed...
};
