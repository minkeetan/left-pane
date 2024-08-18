document.addEventListener('DOMContentLoaded', function() {
    const leftPane = document.getElementById('leftPane');
    const mainContent = document.getElementById('mainContent');
    const collapseBtn = document.getElementById('collapseBtn');
    const expandBtn = document.getElementById('expandBtn');
    const contentArea = document.getElementById('contentArea');
    const subjectSelect = document.getElementById('subjectSelect');
  
    // Function to open the left pane
    function openPane() {
      leftPane.classList.add('open');
      mainContent.classList.add('shifted');
      expandBtn.classList.add('hidden');
    }
  
    // Function to close the left pane
    function closePane() {
      leftPane.classList.remove('open');
      mainContent.classList.remove('shifted');
      expandBtn.classList.remove('hidden');
    }

    // Function to change content based on subject selection
  function changeContent(subject) {
    let content = '';
    switch(subject) {
      case 'math':
        content = '<h1>Math</h1><p>Learn about numbers, shapes, and problem-solving!</p>';
        break;
      case 'science':
        content = '<h1>Science</h1><p>Explore the wonders of nature and how things work!</p>';
        break;
      case 'language':
        content = '<h1>Language</h1><p>Discover the joy of reading and writing!</p>';
        break;
      case 'art':
        content = '<h1>Art</h1><p>Express yourself through colors and creativity!</p>';
        break;
      default:
        content = '<h1>Welcome to Kids Education</h1><p>Select a subject to start learning!</p>';
    }
    contentArea.innerHTML = content;
  }
    
    // Event listener for the collapse button
    collapseBtn.addEventListener('click', closePane);

    // Event listener for the expand button
    expandBtn.addEventListener('click', openPane);

    // Add change event listener to select element
  subjectSelect.addEventListener('change', function() {
    changeContent(this.value);
    // Close the pane on mobile devices
    if (window.innerWidth <= 768) {
      closePane();
    }
  });
});