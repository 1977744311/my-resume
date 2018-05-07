
!function(){
    var view = document.querySelector('#my-slider')
    var controller = {
        view: null,
        swiper: null,
        init: function(view){
            this.view = view
            this.initSwiper()
        },
        initSwiper: function(){
            this.swiper = new Swiper(view.querySelector('.swiper-container'), {
                // Optional parameters
                loop: true,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })
        }
    }
    controller.init(view)
}.call()