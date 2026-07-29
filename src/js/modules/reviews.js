export function initReviews() {
  const buttons = document.querySelectorAll('.review-card__more');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const wrapper = document.getElementById(targetId);

      if (!wrapper) return;

      const card = wrapper.closest('.review-card');
      const isExpanded = wrapper.classList.toggle('review-card__text-wrapper--expanded');

      if (card) {
        card.classList.toggle('review-card--expanded');
      }

      btn.textContent = isExpanded ? 'скрыть' : 'далее...';
    });
  });
}
