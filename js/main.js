$(document).ready(function(){


// Lazy load for images

  $("img.lazy").lazyload({
      threshold : 0,
      effect : "fadeIn"
  });





// Mobile Navigation
$("#nav-trigger span").click(function(){

      if ($("nav ul").hasClass("ul-open")) {
            $("nav ul.ul-open").removeClass("ul-open");
        } else {
            $("nav ul").addClass("ul-open");
        }
      
      if ($("nav .list-wrapper").hasClass("list-open")) {
            $("nav .list-wrapper.list-open").removeClass("list-open");
        } else {
            $("nav .list-wrapper").addClass("list-open");
        }

      if ($("#menu").hasClass("show")) {
            $("#menu").removeClass("show");
        } else {
            $("#menu").addClass("show");
        }

      if ($("#close").hasClass("show")) {
            $("#close").removeClass("show");
        } else {
            $("#close").addClass("show");
        }
        
        
    });





// Init Skrollr Plugin
 $(function () {
  // initialize skrollr if the window width is large enough
  if ($(window).width() > 1023) {
    skrollr.init({
              forceHeight: false,
              smoothScrolling:true   
          });
  }
  // disable skrollr if the window is resized below 1024px wide
  $(window).on('resize', function () {
    if ($(window).width() <= 1023) {
      skrollr.init().destroy();
    }
    else if($(window).width() > 1023){
    	skrollr.init({
              forceHeight: false,
              smoothScrolling:true   
          });
    }
  });
});

// Scroll to section
	$("#scroll-down").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#at-content").offset().top +0
	    }, 800);
	});

// ///////////////////////////////////////////////////////////////

// Slick slider
$('.slider').slick({
  centerMode: true,
  arrows: false,
  centerPadding: '120px',
  infinite: false,
  slidesToShow: 1,
  draggable: true,
  variableWidth: true,
  focusOnSelect: true,
  adaptiveHeight: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        arrows: false,
        centerPadding: '120px',
        infinite: false,
        slidesToShow: 2,
        draggable: true,
        variableWidth: true,
        focusOnSelect: true,
        adaptiveHeight: false
      }
    }
  ]
});




// ///////////////////////////////////////////////////////////////

});
// Ends $Documnet Ready Function
// /////////////////////////////////////////////////////////////


