(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const toggleMenuBtn = document.querySelector('.js-toggle-menu');
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu();
    });
  });

  const body = document.body;

  const toggleMenu = () => {
    const isMenuOpen = toggleMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    toggleMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('active');
    toggleMenuBtn.classList.toggle('active');

    if (isMenuOpen) {
      enableScroll();
    } else {
      disableScroll();
    }
  };

  toggleMenuBtn.addEventListener('click', toggleMenu);

  function disableScroll() {
    body.style.overflow = 'hidden';
  }

  function enableScroll() {
    body.style.overflow = 'auto';
  }

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('active');
    toggleMenuBtn.setAttribute('aria-expanded', false);
    enableScroll();
  });
})();
