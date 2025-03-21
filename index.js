new Swiper('.box-slides', {
    loop: true,
    speed: 800,
    spaceBetween: 25,

    autoplay: {
        delay: 4000,
    },

    pagination: {
        el: '.swiper-pagination',
    },

    breakpoints: {
        slidesPerView: 1
    },
});