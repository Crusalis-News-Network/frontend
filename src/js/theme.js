const THEME_KEY = 'cnn-theme';

function updateToggleButton(theme) {
  const button = document.getElementById('theme-toggle');
  if (button) {
    const icon = theme === 'light' 
      ? '<img src="/images/moon.svg" alt="Dark mode">'
      : '<img src="/images/sun.svg" alt="Light mode">';
    button.innerHTML = icon;
    button.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`);
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem(THEME_KEY, newTheme);
  updateToggleButton(newTheme);
}

export function setupTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  const toggleButton = document.getElementById('theme-toggle');
  if (toggleButton) {
    updateToggleButton(savedTheme);
    toggleButton.addEventListener('click', toggleTheme);
  }
}
