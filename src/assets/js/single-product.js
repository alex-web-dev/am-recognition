import Swiper, { Pagination, Thumbs } from 'swiper';

Swiper.use([Pagination, Thumbs]);

const navSlider = new Swiper('.single-product__nav-slider', {
  direction: 'vertical',
  slidesPerView: 'auto',
  spaceBetween: 10,
});

new Swiper('.single-product__big-slider', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  thumbs: {
    swiper: navSlider,
  },
  mousewheel: {
    sensitivity: 1.4,
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
    }
  }
});