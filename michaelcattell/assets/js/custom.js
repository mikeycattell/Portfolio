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
        itemWidth: 300,
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


$(document).foundation({
  orbit: {
      animation: 'slide', // Sets the type of animation used for transitioning between slides, can also be 'fade'
      timer_speed: 10000, // Sets the amount of time in milliseconds before transitioning a slide
      pause_on_hover: false, // Pauses on the current slide while hovering
      resume_on_mouseout: false, // If pause on hover is set to true, this setting resumes playback after mousing out of slide
      animation_speed: 500, // Sets the amount of time in milliseconds the transition between slides will last
      stack_on_small: false,
      navigation_arrows: false,
      slide_number: false,
      slide_number_text: 'of',
      container_class: 'orbit-container',
      stack_on_small_class: 'orbit-stack-on-small',
      next_class: 'orbit-next', // Class name given to the next button
      prev_class: 'orbit-prev', // Class name given to the previous button
      timer_container_class: 'orbit-timer', // Class name given to the timer
      timer_paused_class: 'paused', // Class name given to the paused button
      timer_progress_class: 'orbit-progress', // Class name given to the progress bar
      slides_container_class: 'orbit-slides-container', // Class name given to the slides container
      slide_selector: 'li', // Default is "*" which selects all chilren under the container
      bullets_container_class: 'orbit-bullets',
      bullets_active_class: 'active', // Class name given to the active bullet
      slide_number_class: 'orbit-slide-number', // Class name given to the slide number
      caption_class: 'orbit-caption', // Class name given to the caption
      active_slide_class: 'active', // Class name given to the active slide
      orbit_transition_class: 'orbit-transitioning',
      bullets: true, // Does the slider have bullets visible?
      circular: true, // Does the slider should go to the first slide after showing the last?
      timer: true, // Does the slider have a timer visible?
      variable_height: false, // Does the slider have variable height content?
      swipe: true,
      before_slide_change: noop, // Execute a function before the slide changes
      after_slide_change: noop // Execute a function after the slide changes
  }
});


