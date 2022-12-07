function filterCard() {
  const buttons = document.querySelectorAll('.portfolio-button');
  const cards = document.querySelectorAll('.portfolio-item');

  function filter(category, items) {
    items.forEach(item => {
      const isItemFiltred = !item.classList.contains(category);
      const categoryAll = category.toLowerCase() === 'all';
      if (isItemFiltred && !categoryAll) {
        item.classList.add('hide');
      } else {
        item.classList.remove('hide');
      }
    });
  }

  buttons.forEach(button =>
    button.addEventListener('click', () => {
      const currentCategory = button.dataset.filter;
      filter(currentCategory, cards);
    })
  );
}

filterCard();
