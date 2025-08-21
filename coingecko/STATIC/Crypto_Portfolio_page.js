document.addEventListener('DOMContentLoaded', () => {
  const themeToggler = document.getElementById('themeToggler');
  const htmlEl = document.documentElement;

  if (themeToggler) {
    themeToggler.addEventListener('click', (e) => {
      e.preventDefault();
      const currentTheme = htmlEl.getAttribute('data-bs-theme');
      if (currentTheme === 'dark') {
        htmlEl.setAttribute('data-bs-theme', 'light');
      } else {
        htmlEl.setAttribute('data-bs-theme', 'dark');
      }
    });
  }
});