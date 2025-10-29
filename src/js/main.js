import { getArticles } from './api.js';
import { setupTheme } from './theme.js';
import { createNewsCard, createArticleMeta, renderImage } from './utils.js';
import { loadCategoryFilters } from './categories.js';
import { initLayout } from './components.js';

initLayout();
setupTheme();

function createHeroSection(article) {
  return `
    <div class="hero-article">
      <div class="hero-category">${article.category}</div>
      <h1 class="hero-title">
        <a href="/article.html?id=${article.id}">${article.title}</a>
      </h1>
      ${renderImage(article, 'hero-image')}
      ${createArticleMeta(article)}
    </div>
  `;
}

let allArticles = [];

function displayArticles(articles) {
  const heroSection = document.getElementById('hero-section');
  const newsGrid = document.getElementById('news-grid');
  
  if (articles.length > 0) {
    heroSection.innerHTML = createHeroSection(articles[0]);
    const remainingArticles = articles.slice(1);
    newsGrid.innerHTML = remainingArticles.map(article => createNewsCard(article)).join('');
  } else {
    heroSection.innerHTML = '';
    newsGrid.innerHTML = '<div class="loading">No articles found in this category</div>';
  }
}

function filterByCategory(categoryName) {
  const filtered = categoryName === 'all' 
    ? allArticles 
    : allArticles.filter(article => article.category === categoryName);
  displayArticles(filtered);
  
  if (categoryName === 'all') {
    window.history.pushState({}, '', '/');
  } else {
    window.history.pushState({}, '', `/?category=${encodeURIComponent(categoryName)}`);
  }
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  if (categoryName !== 'all') {
    const activeLink = document.querySelector(`.nav-link[data-category="${categoryName}"]`);
    if (activeLink) activeLink.classList.add('active');
  }
}

async function loadHomepage() {
  try {
    allArticles = await getArticles();
    await loadCategoryFilters(document.getElementById('category-nav'), filterByCategory);
    
    const logoLink = document.querySelector('.logo a');
    if (logoLink) {
      logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        filterByCategory('all');
      });
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category) {
      filterByCategory(category);
    } else {
      displayArticles(allArticles);
    }
  } catch (error) {
    console.error('Error loading homepage:', error);
    document.getElementById('hero-section').innerHTML = '<div class="loading">Error loading content</div>';
  }
}

loadHomepage();
