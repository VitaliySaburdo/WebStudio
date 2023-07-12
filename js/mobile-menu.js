(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const toggleMenuBtn = document.querySelector('.js-toggle-menu');
  

  const toggleMenu = () => {
    const isMenuOpen = toggleMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    toggleMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('active');
    toggleMenuBtn.classList.toggle('active');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  toggleMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('active');
    toggleMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
