import { getArticleById, getArticles } from './api.js';
import { setupTheme } from './theme.js';
import { createNewsCard, createArticleMeta, renderImage } from './utils.js';
import { loadCategoryLinks } from './categories.js';
import { initLayout } from './components.js';

initLayout();
setupTheme();

function createArticleContent(article) {
  return `
    <div class="article-header">
      <div class="article-category">${article.category}</div>
      <h1 class="article-title">${article.title}</h1>
      ${createArticleMeta(article, 'article-meta-full')}
    </div>
    ${renderImage(article, 'article-image-main')}
    <div class="article-body">
      ${article.content.split('\n\n').map(p => `<p>${p}</p>`).join('')}
    </div>
  `;
}

async function loadArticle() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    if (!articleId) {
      window.location.href = '/';
      return;
    }
    
    const article = await getArticleById(articleId);
    
    if (!article) {
      document.getElementById('article-content').innerHTML = '<div class="loading">Article not found</div>';
      return;
    }
    
    document.title = `${article.title} - CNN`;
    document.getElementById('article-content').innerHTML = createArticleContent(article);
    
    const allArticles = await getArticles();
    const relatedArticles = allArticles
      .filter(a => a.id !== article.id && a.category === article.category)
      .slice(0, 3);
    
    if (relatedArticles.length > 0) {
      const relatedGrid = document.getElementById('related-grid');
      relatedGrid.innerHTML = relatedArticles.map(a => createNewsCard(a)).join('');
    }
    
    await loadCategoryLinks(document.getElementById('category-nav'));
  } catch (error) {
    console.error('Error loading article:', error);
    document.getElementById('article-content').innerHTML = '<div class="loading">Error loading article</div>';
  }
}

loadArticle();
