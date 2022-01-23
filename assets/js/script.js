$(function () {
   $(window).on('scroll',function(){

      var scrollPosition = $(window).scrollTop();
     if(scrollPosition > 0){
        $('.navbar').addClass('stickyNav')
     }else{
      $('.navbar').removeClass('stickyNav')
     }
   })

   $('.slider-content').slick({
      autoPlay: true,
      autoplaySpeed: 3000,
      speed:1000,
      slidesToShow:4,
      slidesToScroll:1,
      prevArrow:'<i class="fas fa-chevron-left slider-icon"></i>',
      nextArrow:'<i class="fas fa-chevron-right slider-icon"></i>',
      responsive: [
         {
           breakpoint: 375,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
           }
         },
      ]
  })

})