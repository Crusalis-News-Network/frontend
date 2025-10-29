export function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

export function createArticleMeta(article, cssClass = 'article-meta') {
  return `
    <div class="${cssClass}">
      <span><img src="/images/user.svg" alt="">${article.author}</span>
      <span><img src="/images/calendar.svg" alt="">${formatDate(article.date)}</span>
      ${article.readTime ? `<span><img src="/images/clock.svg" alt="">${article.readTime} min read</span>` : ''}
    </div>
  `;
}

export function renderImage(article, cssClass) {
  return article.image ? `<img src="${article.image}" alt="${article.title}" class="${cssClass}">` : '';
}

export function createNewsCard(article) {
  return `
    <div class="news-card">
      <div class="news-card-content">
        <div class="news-card-category">${article.category}</div>
        <h3 class="news-card-title">
          <a href="/article.html?id=${article.id}">${article.title}</a>
        </h3>
      </div>
      ${renderImage(article, 'news-card-image')}
      <div class="news-card-content">
        ${createArticleMeta(article, 'news-card-meta')}
      </div>
    </div>
  `;
}
