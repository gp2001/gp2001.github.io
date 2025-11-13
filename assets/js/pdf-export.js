// PDF Export Functionality
(function() {
  'use strict';

  // Function to generate and download PDF
  function generatePDF() {
    // Get the main content
    const element = document.querySelector('body');
    
    // Options for html2pdf
    const opt = {
      margin: 10,
      filename: 'Gabriel_Shamon_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        letterRendering: true
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait' 
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    // Show loading indicator
    const originalText = 'PDF wordt gegenereerd...';
    console.log(originalText);

    // Generate PDF
    html2pdf().set(opt).from(element).save().then(function() {
      console.log('PDF succesvol gegenereerd!');
    }).catch(function(error) {
      console.error('Fout bij PDF generatie:', error);
      alert('Er is een fout opgetreden bij het genereren van de PDF. Probeer het opnieuw.');
    });
  }

  // Add click event listener to PDF link when page loads
  window.addEventListener('DOMContentLoaded', function() {
    // Find the PDF link in additional_links
    const pdfLinks = document.querySelectorAll('a[href*="resume.pdf"], a[href*="/assets/resume.pdf"]');
    
    pdfLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Check if html2pdf is loaded
        if (typeof html2pdf === 'undefined') {
          alert('PDF library wordt geladen. Probeer het over een paar seconden opnieuw.');
          return;
        }
        
        generatePDF();
      });
    });
  });

  // Alternative: Add a print-friendly version
  window.printResume = function() {
    window.print();
  };
})();
