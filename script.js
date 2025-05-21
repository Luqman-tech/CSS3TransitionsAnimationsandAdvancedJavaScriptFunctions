// Function to toggle theme and store preference in localStorage
function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  
    if (currentTheme === 'light') {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
  
  // Function to apply saved theme on page load
  function applyStoredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    }
  }
  
  // Event listener for button click
  document.getElementById('toggleBtn').addEventListener('click', toggleTheme);
  
  // Apply theme on load
  applyStoredTheme();
  