export function initBurger() {
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');
  const body = document.body;

  if (!burger || !nav) return;

  function toggleMenu() {
    const isOpen = nav.classList.toggle('header__nav--open');
    burger.classList.toggle('header__burger--active');
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    body.style.overflow = isOpen ? 'hidden' : '';
  }

  burger.addEventListener('click', toggleMenu);

  nav.addEventListener('click', (e) => {
    if (e.target.closest('.dropdown')) return;

    if (nav.classList.contains('header__nav--open')) {
      toggleMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('header__nav--open')) {
      toggleMenu();
    }
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      if (nav.classList.contains('header__nav--open')) {
        toggleMenu();
      }
    }
  });
}
