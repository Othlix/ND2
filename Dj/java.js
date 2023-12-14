document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.app-header-navigation a');
    var contentSections = document.querySelectorAll('.content-section');
  
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        // Remove 'active' class from all tabs and hide all content sections
        links.forEach(link => link.classList.remove('active'));
        contentSections.forEach(section => section.classList.add('hidden'));
  
        // Add 'active' class to clicked tab and show related content section
        this.classList.add('active');
        var sectionId = this.textContent.trim().toLowerCase() + '-section';
        document.getElementById(sectionId).classList.remove('hidden');
      });
    });
  });
  