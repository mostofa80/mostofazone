jQuery(document).ready(function($) {
    
//top-to start 
    $top_to=600;
    $('.top_to i').click(function(){
        $('html,body').animate({
            scrollTop:0
        },2000);
    });
    $navOffset=$('#header').offset().top;
    
    $(window).scroll(function(){
        $scrolling=$(this).scrollTop();
        if($scrolling > $navOffset){
            $('#header').addClass('fixed');
        }
        else{
            $('#header').removeClass('fixed');
        }
        if($scrolling > $top_to){
            $('.top_to i').fadeIn();
        }
        else{
           $('.top_to i').fadeOut(); 
        }
    });
    
//counter start
    
    $('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 8000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
    }

  });  
  
  

});
    
    
    
    
    
//peralux start
    
    $(window).stellar({
        horizontalScrolling: false,
        responsive: true,
    });
    
    
    
});
                       


