var buy_animation=setInterval(function()
{$("#purchaseLink a").removeClass().addClass("swing animated"),window.setTimeout(function()
	{$("#purchaseLink a").removeClass()},1300)},5e3);

// Returns true if the specified element has been scrolled into the viewport.
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.fadeInImg');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    }
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});

// Flexslider custom..bits
 $(function(){
      SyntaxHighlighter.all();
    });
    $(window).load(function(){
      $('.flexslider').flexslider({
        animation: "slide",
        slideshow: false,
        animationLoop: false,
        itemWidth: 330,
        itemMargin: 40,
        move: 1, 
        randomize: true, 
        pausePlay: true,
        pauseOnAction: true,
        pauseOnHover: false,  
        touch: true,
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });

$(document).ready(function(){
 
    $('section[data-type="background"]').each(function(){
      var $bgobj = $(this); // assigning the object
    }); 
 
}); 

$(document).foundation('orbit', {
  animation: 'fade',
  timer_speed: 9000,
  pause_on_hover: false,
  resume_on_mouseout: false,
  animation_speed: 500,
  stack_on_small: true,
  navigation_arrows: true,
  slide_number: false,
  bullets: false,
  timer: true,
  next_on_click: true,
  variable_height: true,
  before_slide_change: function(){},
  after_slide_change: function(){}
});