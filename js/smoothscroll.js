
//Smooth sectional scrolling
//based on code from https://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click/18071231
$(document).ready(function(){
    $(document.getElementById("nextsection")).click(function() {
          $('html,body').animate({
              scrollTop: $(document.getElementById("section2")).offset().top},
              'slow');
      });
  });