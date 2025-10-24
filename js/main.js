import { items } from "./data/items.js";

// ===== 1) БАЗА
const grid = document.querySelector(".pizzas__grid");
const chips = document.querySelectorAll(".menu-chip");
const seeAll = document.querySelector('.menu__actions[data-cat="all"]');

// cardHTML: один продукт -> HTML карточки
const cardHTML = (product) => `
  <article class="card" data-id="${product.id}">
    <div class="card__media">
      <img class="card__img" src="${product.image || 'img/placeholder.jpg'}" alt="${product.title}">
    </div>
    <div class="card__body">
      <h3 class="card__title">${product.title}</h3>
      <p class="card__meta">16–25 minutes</p>
      <div class="card__footer">
        <div class="card__price">$${product.price}</div>
        <button class="card__cta" aria-label="Add ${product.title} to cart"></button>
      </div>
    </div>
  </article>
`;

// render: массив products -> вставка в грид
const render = (products) => {
  grid.innerHTML = products.map(cardHTML).join('');
};

// стартовая категория по активному чипу
const activeChip = document.querySelector('.menu-chip[aria-pressed="true"]');
const startCat = activeChip ? activeChip.dataset.cat : 'all';

// ВАЖНО: здесь используем items (массив с данными)
const startList = startCat === 'all'
  ? items
  : items.filter(product => product.category === startCat);

render(startList);
