import { getCategories } from './api.js';

export async function loadCategoryLinks(navContainer) {
  const categories = await getCategories();
  categories.forEach(category => {
    const link = document.createElement('a');
    link.className = 'nav-link';
    link.textContent = category.name;
    link.href = `/?category=${encodeURIComponent(category.name)}`;
    navContainer.appendChild(link);
  });
}

export async function loadCategoryFilters(navContainer, filterCallback) {
  const categories = await getCategories();
  categories.forEach(category => {
    const link = document.createElement('a');
    link.className = 'nav-link';
    link.textContent = category.name;
    link.href = '#';
    link.setAttribute('data-category', category.name);
    link.addEventListener('click', (e) => {
      e.preventDefault();
      filterCallback(category.name);
    });
    navContainer.appendChild(link);
  });
}
