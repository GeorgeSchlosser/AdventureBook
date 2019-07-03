(function($) {
    'use strict';
    // Get user location via HTTP GET Request res.body.currentLocation
    var currentLocation = 'slide-1';

    $.fn.chooseIt = function( options ) {

        var settings = $.extend({
            initSlide: currentLocation,
            navClass: 'ci-nav',
            slideClass: 'ci-slide'
        }, options);

        var showNextSlide = function() {

            var action = $(this);
            console.log(action.attr('path')); // This sends to server in a POST request
    
            action.parent('.' + settings.slideClass).fadeOut('fast', function() {
                $(this).siblings('#' + action.attr('path')).fadeIn('slow');
            });
        };

        return this.each(function() {

            var thisSlide = $(this);

            thisSlide.children('.' + settings.slideClass).each(function() {
                $(this).children('.' + settings.navClass).click( showNextSlide );
            }).hide();

            thisSlide.children('#' + settings.initSlide).fadeIn('slow');
        });
    };
})(jQuery);