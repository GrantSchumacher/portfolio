function isElementInViewport(elem){
    var $elem = $(elem);

    var scrollElement = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    var elemTop = Math.round($elem.offset().top);
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

function checkAnimation(){
    var $elem = $('.bar .level');
    if(isElementInViewport($elem)){
        $elem.addClass('')
    }
}


window.addEventListener("scroll", () => {
    //   get the screen height (viewport height)
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    //   sniff out the values returned from getBoundingClientRect()
    const {
      height,
      left,
      right,
      top,
      bottom,
      width,
      x,
      y,
    } = document.getElementById("grant-image-div").getBoundingClientRect();
    // condition 
    if((viewportHeight - top > 0 && bottom > 0)){
        console.log("added")
        $("#grant-image-div").addClass('reveal');
        $("#grant-image").addClass('reveal-inner');
    }else{
        console.log("removed")
        $("#grant-image-div").removeClass('reveal');
        $("#grant-image").removeClass('reveal-inner');
    }
});


