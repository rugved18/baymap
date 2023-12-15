var isFormOpen = false;
$(document).ready(function() {
    // Constants
    var sliderPause = 10000;
    
    // Variables
    var currSection = 1;
    
    /**
     * UTILITY FUNCTIONS
     **/
    // util function to get the appropriate slider instance
    var getSliderInstance = function(currSection) {
        var slider = null;
        switch(currSection) {
            case 1:
                slider = slider1;
                break;
            case 2:
                slider = slider2;
                break;
            case 3:
                slider = slider3;
                break;
            case 4:
                slider = slider4;
                break;
            case 5:
                slider = slider5;
                break;
        }
        return slider;
    };
    
    // util function to scroll to the specified slide
    var goToSlide = function(section, slideIndex) {
        var slider = getSliderInstance(section);
//        console.log("currSection " + section);
//        console.log("slideIndexber " + slideIndex);
        if(slider) {
            slider.goToSlide(slideIndex);
        } else {
            console.error("Error: did not find slider");
        }
    };
    
    // util function to reload slider on scrolling to its section
    var reloadSlider = function(section) {
        goToSlide(section, 0);
    };
    
    // util function to highlight the appropriate localnav link
    var selectLocalnav = function(section, index) {
//        console.log("selectLocalnav " + section + " " + index);
        var slideNum = index + 1;
        $("#localnav"+section+" .nav").children("li").removeClass('active');
        $("#localnav"+section+" .nav [data-slide-number='" + slideNum + "']").addClass('active');
    };
    
    /**
     * SLIDER INSTANCES
     **/
    // bxSlider instance for slider1
    var slider1 = $('#slider1').bxSlider({
        startSlide: 0,
        pager: false,
        pause: sliderPause,
        speed: 700,
        controls: false,
        onSlideAfter:
            function($slideElem, oldIndex, newIndex) {
//                console.log("onSlideAfter");
                selectLocalnav(1, newIndex);
            }
    });
    // linking custom prev/next selectors to slider1
    $('#btn-slider1-prev-slide').click(function(event) {
        slider1.goToPrevSlide();
        event.preventDefault();
    });
    $('#btn-slider1-next-slide').click(function(event) {
        slider1.goToNextSlide();
        event.preventDefault();
    });
    
    // bxSlider instance for slider2
    var slider2 = $('#slider2').bxSlider({
        startSlide: 0,
        pager: false,
        pause: sliderPause,
        speed: 700,
        controls: false,
        onSlideAfter: 
            function($slideElem, oldIndex, newIndex) {
//                console.log("onSlideAfter");
                selectLocalnav(2, newIndex);
            }
    });
    // linking custom prev/next selectors to slider2
    $('#btn-slider2-prev-slide').click(function(event) {
        slider2.goToPrevSlide();
        event.preventDefault();
    });
    $('#btn-slider2-next-slide').click(function(event) {
        slider2.goToNextSlide();
        event.preventDefault();
    });
    
    // bxSlider instance for slider3
    var slider3 = $('#slider3').bxSlider({
        startSlide: 0,
        pager: false,
        pause: sliderPause,
        speed: 700,
        controls: false,
        onSlideAfter: 
            function($slideElem, oldIndex, newIndex) {
//                console.log("onSlideAfter");
                selectLocalnav(3, newIndex);
            }
    });
    // linking custom prev/next selectors to slider3
    $('#btn-slider3-prev-slide').click(function(event) {
        slider3.goToPrevSlide();
        event.preventDefault();
    });
    $('#btn-slider3-next-slide').click(function(event) {
        slider3.goToNextSlide();
        event.preventDefault();
    });
    
    // bxSlider instance for slider4
    var slider4 = $('#slider4').bxSlider({
        startSlide: 0,
        pager: false,
        pause: sliderPause,
        speed: 700,
        controls: false,
        onSlideAfter: 
            function($slideElem, oldIndex, newIndex) {
//                console.log("onSlideAfter");
                selectLocalnav(4, newIndex);
            }
    });
    // linking custom prev/next selectors to slider4
    $('#btn-slider4-prev-slide').click(function(event) {
        slider4.goToPrevSlide();
        event.preventDefault();
    });
    $('#btn-slider4-next-slide').click(function(event) {
        slider4.goToNextSlide();
        event.preventDefault();
    });
    
    // bxSlider instance for slider5
    var slider5 = $('#slider5').bxSlider({
        startSlide: 0,
        pager: false,
        pause: sliderPause,
        speed: 700,
        controls: false,
        onSlideAfter: 
            function($slideElem, oldIndex, newIndex) {
//                console.log("onSlideAfter");
                selectLocalnav(5, newIndex);
            }
    });
    // linking custom prev/next selectors to slider5
    $('#btn-slider5-prev-slide').click(function(event) {
        slider5.goToPrevSlide();
        event.preventDefault();
    });
    $('#btn-slider5-next-slide').click(function(event) {
        slider5.goToNextSlide();
        event.preventDefault();
    });
    
    /**
     *
     * ADD NEW SLIDER INSTANCES HERE
     *
    **/
    
    /**
     * EVENT HANDLERS
     **/
    // full page scroll plugin initialisation
    var sectionScrollSpeed = 700;
    $('#sectionscroll-container').fullpage({
        scrollBar: true,
        onLeave: function(index, nextIndex, direction) {
            switch (index) {
                case 1:
                    $('#localnav1').fadeOut('fast');
                    if(direction == 'down') {
                        currSection = 2;
                        reloadSlider(currSection);
                        $('#localnav2').delay(sectionScrollSpeed).fadeIn('slow');
                    }
                    break;
                case 2:
                    $('#localnav2').fadeOut('fast');
                    if(direction == 'down') {
                        currSection = 3;
                        reloadSlider(currSection);
                        $('#localnav3').delay(sectionScrollSpeed).fadeIn('slow');
                    } else if(direction == 'up') {
                        currSection = 1;
                        reloadSlider(currSection);
                        $('#localnav1').delay(sectionScrollSpeed).fadeIn('slow');
                    }
                    break;
                case 3:
                    $('#localnav3').fadeOut('fast');
                    if(direction == 'down') {
                        currSection = 4;
                        reloadSlider(currSection);
                        $('#localnav4').delay(sectionScrollSpeed).fadeIn('slow');
                    } else if(direction == 'up') {
                        currSection = 2;
                        reloadSlider(currSection);
                        $('#localnav2').delay(sectionScrollSpeed).fadeIn('slow');
                    }
                    break;
                case 4:
                    $('#localnav4').fadeOut('fast');
                    if(direction == 'down') {
                        currSection = 5;
                        reloadSlider(currSection);
                        $('#localnav5').delay(sectionScrollSpeed).fadeIn('slow');
                    } else if(direction == 'up') {
                        currSection = 3;
                        reloadSlider(currSection);
                        $('#localnav3').delay(sectionScrollSpeed).fadeIn('slow');
                    }
                    break;
                case 5:
                    $('#localnav5').fadeOut('fast');
                    if(direction == 'up') {
                        currSection = 4;
                        reloadSlider(currSection);
                        $('#localnav4').delay(sectionScrollSpeed).fadeIn('slow');
                    }
                    break;
            }
        }
    });
    
    // listener for page scroll, requires jQuery easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
    
    // click listener to close collapsible menu on item click
    // and toggle navbar background appropriately
    var localnavToggle = 0;
    $('.navbar-nav li a').click(function() {
        $('.navbar-collapse').collapse('hide');
        $('.local-navbar-custom .navbar-header').css({"background-color": "transparent"});
        localnavToggle = 0;
    });
    
    // listener to toggle local navbar colour for small screens
    $('.local-navbar-custom .navbar-toggle').click(function() {
//        console.log("localnav expanded");
        if(!localnavToggle) {
            $('.local-navbar-custom .navbar-header').css({"background-color": "rgba(0, 0, 0, .8)"});
        } else {
            $('.local-navbar-custom .navbar-header').css({"background-color": "transparent"});
        }
        localnavToggle = !localnavToggle;
    });
    
    // listener for slider links
    $('a.local-scroll').bind('click', function(event) {
        event.preventDefault();
        var slideIndex = $(this).parent().attr('data-slide-number') - 1;
        goToSlide(currSection, slideIndex);
    });
    
    // click listener for ripple effect on links
    $(".ripplelink").click(function(e) {
        var ink, d, x, y;
        if($(this).find(".ink").length === 0) {
            $(this).prepend("<span class='ink'></span>");
        }

        ink = $(this).find(".ink");
        ink.removeClass("animate");

        if(!ink.height() && !ink.width()) {
            d = Math.max($(this).outerWidth(), $(this).outerHeight());
            ink.css({height: d, width: d});
        }

        x = e.pageX - $(this).offset().left - ink.width()/2;
        y = e.pageY - $(this).offset().top - ink.height()/2;

        ink.css({top: y+'px', left: x+'px'}).addClass("animate");
        setTimeout(function() {
            ink.removeClass("animate");
        }, 600);
    });
    
    // click listener to open up contact info from below
    $("#contact").height(window.innerHeight - ($('#footer').outerHeight() + $('#globalnav').outerHeight() + $('#localnav2').outerHeight()));
    $('#connect-btn').click(function(e) {
        e.preventDefault();
//        console.log("connect-btn clicked");
//        if(!isFormOpen) {
//            $.fn.fullpage.setAllowScrolling(false);
//            $.fn.fullpage.setKeyboardScrolling(false);
//            isFormOpen = true;
//        } else {
//            $.fn.fullpage.setAllowScrolling(true);
//            $.fn.fullpage.setKeyboardScrolling(true);
//            isFormOpen = false;
//        }
        isFormOpen = !isFormOpen;
        document.querySelector('#contact').setAttribute('aria-hidden', !isFormOpen);
        document.body.classList.toggle('noscroll', isFormOpen);
        $("#contact").css({"z-index": "222"})
                     .animate({height: "toggle"},
                              1000
                            );
    });
    
    // click listener for overlay close button
    $('#overlay-close').click(function(e) {
        e.preventDefault();
        isFormOpen = !isFormOpen;
        document.querySelector('#contact').setAttribute('aria-hidden', !isFormOpen);
        document.body.classList.toggle('noscroll', isFormOpen);
        $("#contact").css({"z-index": "222"})
                     .animate({height: "toggle"},
                              1000
                            );
    });
    
    // wow animation init
    new WOW().init();
    
});
