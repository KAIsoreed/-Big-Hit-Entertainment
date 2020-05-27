$(document).ready(main);

var contador = 1;

function main() {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
}



// CAROUSEL 

 var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
         stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
        autoplay: 5000,
         speed: 800,
      },

      pagination: {
        el: '.swiper-pagination',      },
    });