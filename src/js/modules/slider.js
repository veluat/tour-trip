export function initSlider() {
  const track = document.getElementById('reviews-track');
  const prevBtn = document.getElementById('review-prev');
  const nextBtn = document.getElementById('review-next');

  if (!track || !prevBtn || !nextBtn) return;

  const slides = track.querySelectorAll('.reviews__slide');
  const totalSlides = slides.length;

  if (totalSlides === 0) return;

  let currentIndex = 0;
  let slidesPerView = 1;

  function getSlidesPerView() {
    if (window.innerWidth >= 1024) return 2;
    return 1;
  }

  function updateSlider() {
    slidesPerView = getSlidesPerView();
    const maxIndex = Math.max(0, totalSlides - slidesPerView);
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }
    const offset = -(currentIndex * (100 / slidesPerView));
    track.style.transform = `translateX(${offset}%)`;
  }

  function next() {
    const maxIndex = Math.max(0, totalSlides - slidesPerView);
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  }

  function prev() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  }

  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  window.addEventListener('resize', updateSlider);

  updateSlider();
}
