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
      fade:true,
      
      speed:1000,
      slidesToShow:3,
      slidesToScroll:1,
      prevArrow:'<i class="fas fa-chevron-left slider-icon"></i>',
      nextArrow:'<i class="fas fa-chevron-right slider-icon"></i>',
  })

})