// PDF Export Functionality - Improved Print Method
(function() {
  'use strict';

  // Function to prepare page for PDF export
  function preparePDFExport() {
    // Add a special class to body for PDF styling
    document.body.classList.add('pdf-export-mode');
    
    // Force light mode for PDF
    document.body.classList.remove('dark');
    
    // Ensure all images are loaded
    const images = document.querySelectorAll('img');
    const imagePromises = Array.from(images).map(img => {
      if (img.complete) return Promise.resolve();
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    });
    
    return Promise.all(imagePromises);
  }

  // Function to clean up after PDF export
  function cleanupAfterExport() {
    document.body.classList.remove('pdf-export-mode');
  }

  // Function to trigger browser print dialog
  function generatePDF() {
    preparePDFExport().then(() => {
      // Small delay to ensure styles are applied
      setTimeout(() => {
        window.print();
        // Cleanup after print dialog closes
        setTimeout(cleanupAfterExport, 1000);
      }, 100);
    });
  }

  // Add click event listener to PDF link when page loads
  window.addEventListener('DOMContentLoaded', function() {
    // Find the PDF link in additional_links
    const pdfLinks = document.querySelectorAll('a[href*="resume.pdf"], a[href*="/assets/resume.pdf"]');
    
    pdfLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        generatePDF();
      });
    });
  });

  // Alternative: Add a direct function for manual calling
  window.exportToPDF = function() {
    generatePDF();
  };

  // Listen for after print event to cleanup
  window.addEventListener('afterprint', cleanupAfterExport);
})();
