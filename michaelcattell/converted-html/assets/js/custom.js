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


$(document).foundation('orbit', {
  animation: 'fade',
  timer_speed: 9000,
  pause_on_hover: false,
  resume_on_mouseout: false,
  animation_speed: 500,
  stack_on_small: false,
  navigation_arrows: true,
  slide_number: false,
  bullets: false,
  timer: false,
  next_on_click: true,
  variable_height: true,
  before_slide_change: function(){},
  after_slide_change: function(){}
});


var parallaxIt=function(){$hero=$("#mast"),$window=$(window);if($hero.length){var heroHeight=$hero.outerHeight(true),$heroHeading=$hero.find("hgroup"),parallaxFactor=0.5;$window.on("scroll",function(e){var scrollTop=$window.scrollTop(),parallaxOffset=Math.round(scrollTop*parallaxFactor),parallaxBgPosition="50% calc(50% + "+parallaxOffset+"px)";parallaxBgPosition2="50% -webkit-calc(50% + "+parallaxOffset+"px)";if(scrollTop>0){$heroHeading.css("opacity",1-(scrollTop/heroHeight*1.4));$hero.css("background-position",parallaxBgPosition);$hero.css("background-position",parallaxBgPosition2)}else{$heroHeading.css("opacity",1);$hero.css("background-position","50% 50%")}if(scrollTop>heroHeight-140){$("#header-container").addClass("expand")}else{$("#header-container").removeClass("expand")}})}else{$("#header-container").addClass("expand");$("#page").addClass("nomast")}};var navIt=function(){$("#trigger-nav, .closed").click(function(e){$("#page, .main-navigation, #trigger-nav, #footer").toggleClass("nav-open");e.preventDefault()});$("#stream-toggle").click(function(e){$("#archive-nav ul").toggleClass("stream-open");e.preventDefault()})};$(document).ready(navIt);var scrollEvents=function(){$(".s-waypoint").click(function(e){$("html, body").animate({scrollTop:$(".e-waypoint").offset().top-88},1000);e.preventDefault()})};$(document).ready(scrollEvents);var hammerIt=function(){$("#page").swipe({swipeLeft:function(event,direction,distance,duration,fingerCount){$("#page, .main-navigation, #trigger-nav, #footer").addClass("nav-open")},swipeRight:function(event,direction,distance,duration,fingerCount){$("#page, .main-navigation, #trigger-nav, #footer").removeClass("nav-open")},threshold:75})};var slidersRoyal=function(){$("#project-slide").royalSlider({arrowsNav:false,controlsInside:true,loop:true,imageScaleMode:"fill",imageAlignCenter:true,controlNavigationSpacing:0,controlNavigation:"bullets",navigateByClick:true,autoScaleSlider:true,autoScaleSliderHeight:700,autoScaleSliderWidth:1280,numImagesToPreload:6,video:{autoHideBlocks:true,autoHideArrows:false},autoPlay:{enabled:false,pauseOnHover:true,delay:4500},transitionType:"move",slidesOrientation:"vertical"});$("#heartbeat-slide").royalSlider({arrowsNav:false,controlsInside:true,loop:true,imageScaleMode:"fill",imageAlignCenter:true,controlNavigationSpacing:0,controlNavigation:"bullets",navigateByClick:true,autoScaleSlider:true,autoScaleSliderHeight:577,autoScaleSliderWidth:1280,numImagesToPreload:9,autoPlay:{enabled:false,pauseOnHover:true,delay:4500},transitionType:"move",slidesOrientation:"vertical"});$(".rsArrowLeft .rsArrowIcn").html("&lt;");$(".rsArrowRight .rsArrowIcn").html("&gt;")};$(document).ready(slidersRoyal);var postDiscussion=function(){$("#social-trigger").click(function(e){$("#social-wrap").fadeIn().toggleClass("social-open");e.preventDefault()});$("#social-trigger-close").click(function(e){$("#social-wrap").fadeOut();e.preventDefault()});$("#comment-trigger").click(function(e){$("#comment-wrap").fadeIn().toggleClass("comment-open");e.preventDefault()});$("#comment-trigger-close").click(function(e){$("#comment-wrap").fadeOut();e.preventDefault()});$(document).keyup(function(e){if(e.keyCode==27){$("#social-wrap, #comment-wrap").fadeOut()}})};$(document).ready(postDiscussion);var reachForm=function(){$(".btn-group.multi button").click(function(e){$(this).toggleClass("checked");$(this).closest(".btn-group").find("input.hidden-button").val("");var totes=[];$(this).closest(".btn-group").find("button.checked").each(function(i,selected){totes[i]=$(selected).attr("value")});$(this).closest(".btn-group").find("input.hidden-button").val(totes);e.preventDefault()});$(".btn-group:not(.multi) button").click(function(e){$(this).closest(".btn-group").find("button").removeClass("checked");$(this).toggleClass("checked");$(this).closest(".btn-group").find("input.hidden-button").val("");var totes=[];$(this).closest(".btn-group").find("button.checked").each(function(i,selected){totes[i]=$(selected).attr("value")});$(this).closest(".btn-group").find("input.hidden-button").val(totes);e.preventDefault()});$("a#form-contact").click(function(e){$("a#form-planner").removeClass("checked");$("a#form-contact").addClass("checked");$("div#form-planner").fadeOut();$("div#form-contact").fadeIn(500);e.preventDefault()});$("a#form-planner").click(function(e){$("a#form-contact").removeClass("checked");$("a#form-planner").addClass("checked");$("div#form-contact").fadeOut();$("div#form-planner").fadeIn(500);e.preventDefault()})};$(document).ready(reachForm);var videoStuff=function(){$(".heart-beat-mast video").hide();$(".watch-btn").click(function(e){$("video").each(function(){$(this).get(0).play()});$(".video-txt").fadeOut("slow");$(".heart-beat-mast video").fadeIn("slow");e.preventDefault()});$("video").click(function(e){$("video").each(function(){$(this).get(0).pause()});$(".video-txt").fadeIn("slow");e.preventDefault()});$("video").bind("ended",function(){$(".video-txt").fadeIn("slow");$(".heart-beat-mast video").fadeOut("slow");this.currentTime=0})};$(document).ready(videoStuff);function resizeMast(){$hero=$("#mast"),$video_mast=$(".video-mast"),$video_hero=$("#mast video");if($hero.length){$hero.css("height",$(window).height());$video_hero.maximage("maxcover")}}$(window).load(function(){resizeMast();var deviceAgent=navigator.userAgent.toLowerCase();var agentID=deviceAgent.match(/(iphone|ipod|ipad|android|mobile)/);if(agentID){}else{parallaxIt()}});window.onresize=function(event){resizeMast();var deviceAgent=navigator.userAgent.toLowerCase();var agentID=deviceAgent.match(/(iphone|ipod|ipad|android|mobile)/);if(agentID){}else{parallaxIt()}};jQuery(document).ready(function($){var deviceAgent=navigator.userAgent.toLowerCase();var agentID=deviceAgent.match(/(iphone|ipod|ipad|android|mobile)/);if(agentID){$(document).ready(hammerIt);$("#header-container").addClass("expand");$("#page").addClass("nomast")}else{}});if(("standalone" in window.navigator)&&window.navigator.standalone){var a=document.getElementsByTagName("a");for(var i=0;i<a.length;i++){if(!a[i].onclick&&a[i].getAttribute("target")!="_blank"){a[i].onclick=function(){window.location=this.getAttribute("href");return false}}}};


