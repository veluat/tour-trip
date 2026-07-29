export function initDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');

  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector('.dropdown__toggle');
    const list = dropdown.querySelector('.dropdown__list');

    if (!toggle || !list) return;

    if (!isTouch) {
      dropdown.addEventListener('mouseenter', () => {
        list.classList.add('dropdown__list--open');
        toggle.setAttribute('aria-expanded', 'true');
      });

      dropdown.addEventListener('mouseleave', () => {
        list.classList.remove('dropdown__list--open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    } else {
      let isOpen = false;

      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        isOpen = !isOpen;
        list.classList.toggle('dropdown__list--open', isOpen);
        toggle.setAttribute('aria-expanded', isOpen);
      });

      document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
          list.classList.remove('dropdown__list--open');
          toggle.setAttribute('aria-expanded', 'false');
          isOpen = false;
        }
      });
    }

    const items = list.querySelectorAll('.dropdown__item');
    items.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        items.forEach((i) => i.classList.remove('dropdown__item--active'));
        item.classList.add('dropdown__item--active');

        const toggleText = toggle.childNodes[0];
        if (toggleText) {
          toggleText.textContent = item.textContent;
        }

        list.classList.remove('dropdown__list--open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && list.classList.contains('dropdown__list--open')) {
        list.classList.remove('dropdown__list--open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  });
}
