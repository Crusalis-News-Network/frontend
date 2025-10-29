export function createHeader() {
  return `
  <header class="header">
    <div class="container">
      <div class="header-top">
        <div class="logo">
          <a href="/"><img src="/images/logo.png" alt="CNN"></a>
        </div>
        <div class="header-actions">
          <a href="https://www.youtube.com/@theglobalchatpodcast" target="_blank" class="watch-button">
            <img src="/images/play.svg" alt="Watch">
            <span>Watch</span>
          </a>
          <a href="https://discord.gg/NazXaQYBcj" target="_blank" class="discuss-button">
            <img src="/images/discord.svg" alt="Discuss">
            <span>Discuss</span>
          </a>
          <button id="theme-toggle" aria-label="Toggle theme">
            <img src="/images/sun.svg" alt="Light mode">
          </button>
        </div>
      </div>
      <nav class="header-nav">
        <div id="category-nav"></div>
      </nav>
    </div>
  </header>
  `;
}

export function createFooter() {
  return `
  <footer class="footer">
    <div class="container">
      <p>&copy; 2025 Crusalis News Network. All rights reserved.</p>
    </div>
  </footer>
  `;
}

export function initLayout() {
  const headerContainer = document.getElementById('header-container');
  const footerContainer = document.getElementById('footer-container');
  
  if (headerContainer) {
    headerContainer.innerHTML = createHeader();
  }
  if (footerContainer) {
    footerContainer.innerHTML = createFooter();
  }
}
