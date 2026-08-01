import { initBurger } from '@modules/burger.js';
import { initDropdowns } from '@modules/dropdown.js';
import { initSchedule } from '@modules/schedule.js';
import { initSlider } from '@modules/slider.js';
import { initReviews } from '@modules/reviews.js';

document.addEventListener('DOMContentLoaded', () => {
  initBurger();
  initDropdowns();
  initSchedule();
  initSlider();
  initReviews();
});
