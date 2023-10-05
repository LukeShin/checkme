new Swiper('.promotion .swiper', {  
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  },
  on: {
    init: function () {
      console.log('swiper initialized');
    },
  },
  /* events */
  on: {
    slideChange: function(){
      var currentSlide = this.realIndex + 1;
      console.log("currentSlide is:" + currentSlide);
      document.querySelector('.current-slide').innerHTML = currentSlide;
    },
    beforeInit: function(){
    let numOfSlides = this.wrapperEl.querySelectorAll(".swiper-slide").length;
    document.querySelector('.total-slides').innerHTML = numOfSlides;
    }
  }
});