import { items } from "./data/items.js";

// ===== 1) БАЗА
const grid = document.querySelector(".pizzas__grid");
const chips = document.querySelectorAll(".menu-chip");
const seeAll = document.querySelector('.menu__actions[data-cat="all"]');

// просто рендер карточек по списку
const cardHTML = (it) => `
  <article class="card" data-id="${it.id}">
    <div class="card__media">
      <img class="card__img" src="${it.image || 'img/placeholder.jpg'}" alt="${it.title}">
    </div>
    <div class="card__body">
      <h3 class="card__title">${it.title}</h3>
      <p class="card__meta">16–25 minutes</p>
      <div class="card__footer">
        <div class="card__price">$${it.price}</div>
        <button type="button" class="card__cta"></button>
      </div>
    </div>
  </article>
`;
const render = (list) => { grid.innerHTML = list.map(cardHTML).join(''); };

// ===== 2) СТАРТОВЫЙ СОСТОЯНИЕ И РЕНДЕР
// читаем, какой чип помечен активным в HTML (aria-pressed="true")
const activeChip = document.querySelector('.menu-chip[aria-pressed="true"]');
const startCat = activeChip ? activeChip.dataset.cat : 'all';


// рендерим стартовый список
render(startCat === 'all' ? items : items.filter(it => it.category === startCat));

// ===== 3) КЛИКИ ПО ЧИПАМ (pizza/burger/…)
chips.forEach(btn => {
    btn.addEventListener('click', () => {
        // если уже активен — ничего не делаем
        if (btn.getAttribute('aria-pressed') === 'true') return;

        const cat = btn.dataset.cat;
        const list = cat === 'all' ? items : items.filter(it => it.category === cat);

        // визуал: снимаем активность со всех чипов и с "See All"
        chips.forEach(c => c.setAttribute('aria-pressed', 'false'));
        seeAll?.classList.remove('is-active');

        // помечаем нажатый чип активным
        btn.setAttribute('aria-pressed', 'true');

        // рендер
        render(list);
    });

    // поддержка клавиатуры (по желанию)
    btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            btn.click();
        }
    });
});

// ===== 4) КЛИК ПО "SEE ALL" (это ССЫЛКА)
seeAll?.addEventListener('click', (e) => {
    e.preventDefault(); // не прыгать по якорю

    // визуал: снимаем активность со всех чипов, ставим актив на ссылку
    chips.forEach(c => c.setAttribute('aria-pressed', 'false'));
    seeAll.classList.add('is-active');

    // рендерим все товары
    render(items);
});
