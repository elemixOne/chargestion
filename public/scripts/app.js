(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

// LOADER
$(document).ready(function () {
    "use strict";

    setTimeout(function () {
        $('body').addClass('loaded');
    }, 1000);

    // OwlCarousels


    $('.lightbox').magnificPopup({
        type: 'image'
    });

    var owl = $("#shoots");

    owl.owlCarousel({

        itemsCustom: [[0, 2], [450, 1], [600, 2], [700, 3], [1000, 4], [1200, 4], [1400, 4], [1600, 4]],
        navigation: false,
        pagination: true,
        autoPlay: 3000, // set slide intervals here
        stopOnHover: true

    });

    // Used for main slider/carousel

    $("#main-carousel").owlCarousel({

        navigation: false, // Show next and prev buttons
        pagination: false,
        slideSpeed: 400,
        autoPlay: 6000, // set slide intervals here
        singleItem: true,
        autoHeight: true, // use same size images to change this in to false
        stopOnHover: true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

    // Seeting for quote carousel

    $("#quote-carousel").owlCarousel({

        navigation: false, // Show next and prev buttons
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        autoPlay: 5000, // set slide intervals here
        singleItem: true,
        autoHeight: true, // use same size images to change this in to false
        transitionStyle: "fade",
        stopOnHover: true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

    /**    add image o the elemenet via data atribute and class="tile-item" or class="bg-image"
     *  example used in breadcrumbs
     *****************************************************/
    $(".tile-item, .bg-image").css('background', function () {
        var bg = 'url(' + $(this).data("image-src") + ') no-repeat center center';
        return bg;
    });

    // cover data image
    $(".tile-item, .bg-image").css("background-size", "cover");
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('.page-scroll a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// jQuery to collapse the navbar on scroll
$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

/**    Activate tooltips
 *************************************************** **/

jQuery('[data-toggle~="tooltip"]').tooltip({
    container: 'body'
});

/**    Activate popovers
 *************************************************** **/

jQuery('[data-toggle~="popover"]').popover({
    container: 'body'
});

/**    Contact form

 *************************************************** **/

jQuery('#contactform').submit(function () {

    var action = $(this).attr('action');

    jQuery("#message").slideUp(750, function () {
        jQuery('#message').hide();

        jQuery.post(action, {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            comments: $('#comments').val()
        }, function (data) {
            document.getElementById('message').innerHTML = data;
            $('#message').slideDown('slow');
            if (data.match('success') != null) $('#contactform').slideUp('slow');
        });
    });

    return false;
});

/**    Change text on contact button when open

 *************************************************** **/

$('.btn-contact').click(function () {

    var $this = $(this);

    $this.toggleClass('Open contact form');

    if ($this.hasClass('Open contact form')) {

        $this.text('Close me if you done');
    } else {

        $this.text('Open contact form');
    }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7QUFDQSxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFlBQVk7QUFDMUI7O0FBRUEsZUFBVyxZQUFZO0FBQ25CLFVBQUUsTUFBRixFQUFVLFFBQVYsQ0FBbUIsUUFBbkI7QUFDSCxLQUZELEVBRUcsSUFGSDs7QUFNSjs7O0FBR0ksTUFBRSxXQUFGLEVBQWUsYUFBZixDQUE2QjtBQUN6QixjQUFNO0FBRG1CLEtBQTdCOztBQUtBLFFBQUksTUFBTSxFQUFFLFNBQUYsQ0FBVjs7QUFFQSxRQUFJLFdBQUosQ0FBZ0I7O0FBRVoscUJBQWEsQ0FDVCxDQUFDLENBQUQsRUFBSSxDQUFKLENBRFMsRUFFVCxDQUFDLEdBQUQsRUFBTSxDQUFOLENBRlMsRUFHVCxDQUFDLEdBQUQsRUFBTSxDQUFOLENBSFMsRUFJVCxDQUFDLEdBQUQsRUFBTSxDQUFOLENBSlMsRUFLVCxDQUFDLElBQUQsRUFBTyxDQUFQLENBTFMsRUFNVCxDQUFDLElBQUQsRUFBTyxDQUFQLENBTlMsRUFPVCxDQUFDLElBQUQsRUFBTyxDQUFQLENBUFMsRUFRVCxDQUFDLElBQUQsRUFBTyxDQUFQLENBUlMsQ0FGRDtBQVlaLG9CQUFZLEtBWkE7QUFhWixvQkFBWSxJQWJBO0FBY1osa0JBQVUsSUFkRSxFQWNJO0FBQ2hCLHFCQUFhOztBQWZELEtBQWhCOztBQW1CQTs7QUFFQSxNQUFFLGdCQUFGLEVBQW9CLFdBQXBCLENBQWdDOztBQUU1QixvQkFBWSxLQUZnQixFQUVUO0FBQ25CLG9CQUFZLEtBSGdCO0FBSTVCLG9CQUFZLEdBSmdCO0FBSzVCLGtCQUFVLElBTGtCLEVBS1o7QUFDaEIsb0JBQVksSUFOZ0I7QUFPNUIsb0JBQVksSUFQZ0IsRUFPVjtBQUNsQixxQkFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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QUFGLENBQVo7O0FBSUEsVUFBTSxXQUFOLENBQWtCLG1CQUFsQjs7QUFJQSxRQUFJLE1BQU0sUUFBTixDQUFlLG1CQUFmLENBQUosRUFBeUM7O0FBRXJDLGNBQU0sSUFBTixDQUFXLHNCQUFYO0FBRUgsS0FKRCxNQUlPOztBQUVILGNBQU0sSUFBTixDQUFXLG1CQUFYO0FBRUg7QUFFSixDQXBCRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIExPQURFUlxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbG9hZGVkJylcbiAgICB9LCAxMDAwKTtcblxuXG5cbi8vIE93bENhcm91c2Vsc1xuXG5cbiAgICAkKCcubGlnaHRib3gnKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgdHlwZTogJ2ltYWdlJ1xuICAgIH0pO1xuXG5cbiAgICB2YXIgb3dsID0gJChcIiNzaG9vdHNcIik7XG5cbiAgICBvd2wub3dsQ2Fyb3VzZWwoe1xuXG4gICAgICAgIGl0ZW1zQ3VzdG9tOiBbXG4gICAgICAgICAgICBbMCwgMl0sXG4gICAgICAgICAgICBbNDUwLCAxXSxcbiAgICAgICAgICAgIFs2MDAsIDJdLFxuICAgICAgICAgICAgWzcwMCwgM10sXG4gICAgICAgICAgICBbMTAwMCwgNF0sXG4gICAgICAgICAgICBbMTIwMCwgNF0sXG4gICAgICAgICAgICBbMTQwMCwgNF0sXG4gICAgICAgICAgICBbMTYwMCwgNF1cbiAgICAgICAgXSxcbiAgICAgICAgbmF2aWdhdGlvbjogZmFsc2UsXG4gICAgICAgIHBhZ2luYXRpb246IHRydWUsXG4gICAgICAgIGF1dG9QbGF5OiAzMDAwLCAvLyBzZXQgc2xpZGUgaW50ZXJ2YWxzIGhlcmVcbiAgICAgICAgc3RvcE9uSG92ZXI6IHRydWVcblxuICAgIH0pO1xuXG4gICAgLy8gVXNlZCBmb3IgbWFpbiBzbGlkZXIvY2Fyb3VzZWxcblxuICAgICQoXCIjbWFpbi1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XG5cbiAgICAgICAgbmF2aWdhdGlvbjogZmFsc2UsIC8vIFNob3cgbmV4dCBhbmQgcHJldiBidXR0b25zXG4gICAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxuICAgICAgICBzbGlkZVNwZWVkOiA0MDAsXG4gICAgICAgIGF1dG9QbGF5OiA2MDAwLCAvLyBzZXQgc2xpZGUgaW50ZXJ2YWxzIGhlcmVcbiAgICAgICAgc2luZ2xlSXRlbTogdHJ1ZSxcbiAgICAgICAgYXV0b0hlaWdodDogdHJ1ZSwgLy8gdXNlIHNhbWUgc2l6ZSBpbWFnZXMgdG8gY2hhbmdlIHRoaXMgaW4gdG8gZmFsc2VcbiAgICAgICAgc3RvcE9uSG92ZXI6IHRydWVcblxuICAgICAgICAvLyBcInNpbmdsZUl0ZW06dHJ1ZVwiIGlzIGEgc2hvcnRjdXQgZm9yOlxuICAgICAgICAvLyBpdGVtcyA6IDEsXG4gICAgICAgIC8vIGl0ZW1zRGVza3RvcCA6IGZhbHNlLFxuICAgICAgICAvLyBpdGVtc0Rlc2t0b3BTbWFsbCA6IGZhbHNlLFxuICAgICAgICAvLyBpdGVtc1RhYmxldDogZmFsc2UsXG4gICAgICAgIC8vIGl0ZW1zTW9iaWxlIDogZmFsc2VcblxuICAgIH0pO1xuXG4gICAgLy8gU2VldGluZyBmb3IgcXVvdGUgY2Fyb3VzZWxcblxuICAgICQoXCIjcXVvdGUtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xuXG4gICAgICAgIG5hdmlnYXRpb246IGZhbHNlLCAvLyBTaG93IG5leHQgYW5kIHByZXYgYnV0dG9uc1xuICAgICAgICBwYWdpbmF0aW9uOiBmYWxzZSxcbiAgICAgICAgc2xpZGVTcGVlZDogMzAwLFxuICAgICAgICBwYWdpbmF0aW9uU3BlZWQ6IDQwMCxcbiAgICAgICAgYXV0b1BsYXk6IDUwMDAsIC8vIHNldCBzbGlkZSBpbnRlcnZhbHMgaGVyZVxuICAgICAgICBzaW5nbGVJdGVtOiB0cnVlLFxuICAgICAgICBhdXRvSGVpZ2h0OiB0cnVlLCAvLyB1c2Ugc2FtZSBzaXplIGltYWdlcyB0byBjaGFuZ2UgdGhpcyBpbiB0byBmYWxzZVxuICAgICAgICB0cmFuc2l0aW9uU3R5bGU6IFwiZmFkZVwiLFxuICAgICAgICBzdG9wT25Ib3ZlcjogdHJ1ZVxuXG4gICAgICAgIC8vIFwic2luZ2xlSXRlbTp0cnVlXCIgaXMgYSBzaG9ydGN1dCBmb3I6XG4gICAgICAgIC8vIGl0ZW1zIDogMSxcbiAgICAgICAgLy8gaXRlbXNEZXNrdG9wIDogZmFsc2UsXG4gICAgICAgIC8vIGl0ZW1zRGVza3RvcFNtYWxsIDogZmFsc2UsXG4gICAgICAgIC8vIGl0ZW1zVGFibGV0OiBmYWxzZSxcbiAgICAgICAgLy8gaXRlbXNNb2JpbGUgOiBmYWxzZVxuXG4gICAgfSk7XG5cblxuICAgIC8qKiAgICBhZGQgaW1hZ2UgbyB0aGUgZWxlbWVuZXQgdmlhIGRhdGEgYXRyaWJ1dGUgYW5kIGNsYXNzPVwidGlsZS1pdGVtXCIgb3IgY2xhc3M9XCJiZy1pbWFnZVwiXG4gICAgICogIGV4YW1wbGUgdXNlZCBpbiBicmVhZGNydW1ic1xuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAkKFwiLnRpbGUtaXRlbSwgLmJnLWltYWdlXCIpLmNzcygnYmFja2dyb3VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJnID0gKCd1cmwoJyArICQodGhpcykuZGF0YShcImltYWdlLXNyY1wiKSArICcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyJyk7XG4gICAgICAgIHJldHVybiBiZztcbiAgICB9KTtcblxuICAgIC8vIGNvdmVyIGRhdGEgaW1hZ2VcbiAgICAkKFwiLnRpbGUtaXRlbSwgLmJnLWltYWdlXCIpLmNzcyhcImJhY2tncm91bmQtc2l6ZVwiLCBcImNvdmVyXCIpO1xuXG5cbn0pO1xuXG5cblxuLy9qUXVlcnkgZm9yIHBhZ2Ugc2Nyb2xsaW5nIGZlYXR1cmUgLSByZXF1aXJlcyBqUXVlcnkgRWFzaW5nIHBsdWdpblxuJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnBhZ2Utc2Nyb2xsIGEnKS5iaW5kKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgJGFuY2hvciA9ICQodGhpcyk7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoJGFuY2hvci5hdHRyKCdocmVmJykpLm9mZnNldCgpLnRvcFxuICAgICAgICB9LCAxNTAwLCAnZWFzZUluT3V0RXhwbycpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xufSk7XG5cblxuXG4vLyBqUXVlcnkgdG8gY29sbGFwc2UgdGhlIG5hdmJhciBvbiBzY3JvbGxcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKFwiLm5hdmJhclwiKS5vZmZzZXQoKS50b3AgPiA1MCkge1xuICAgICAgICAkKFwiLm5hdmJhci1maXhlZC10b3BcIikuYWRkQ2xhc3MoXCJ0b3AtbmF2LWNvbGxhcHNlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIubmF2YmFyLWZpeGVkLXRvcFwiKS5yZW1vdmVDbGFzcyhcInRvcC1uYXYtY29sbGFwc2VcIik7XG4gICAgfVxufSk7XG5cblxuLyoqICAgIEFjdGl2YXRlIHRvb2x0aXBzXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICoqL1xuXG5qUXVlcnkoJ1tkYXRhLXRvZ2dsZX49XCJ0b29sdGlwXCJdJykudG9vbHRpcCh7XG4gICAgY29udGFpbmVyOiAnYm9keSdcbn0pO1xuXG4vKiogICAgQWN0aXZhdGUgcG9wb3ZlcnNcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKiovXG5cbmpRdWVyeSgnW2RhdGEtdG9nZ2xlfj1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKHtcbiAgICBjb250YWluZXI6ICdib2R5J1xufSk7XG5cblxuLyoqICAgIENvbnRhY3QgZm9ybVxuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICoqL1xuXG5cblxualF1ZXJ5KCcjY29udGFjdGZvcm0nKS5zdWJtaXQoZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIGFjdGlvbiA9ICQodGhpcykuYXR0cignYWN0aW9uJyk7XG5cbiAgICBqUXVlcnkoXCIjbWVzc2FnZVwiKS5zbGlkZVVwKDc1MCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBqUXVlcnkoJyNtZXNzYWdlJykuaGlkZSgpO1xuXG4gICAgICAgIGpRdWVyeS5wb3N0KGFjdGlvbiwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICQoJyNuYW1lJykudmFsKCksXG4gICAgICAgICAgICAgICAgZW1haWw6ICQoJyNlbWFpbCcpLnZhbCgpLFxuICAgICAgICAgICAgICAgIHBob25lOiAkKCcjcGhvbmUnKS52YWwoKSxcbiAgICAgICAgICAgICAgICBjb21tZW50czogJCgnI2NvbW1lbnRzJykudmFsKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJykuaW5uZXJIVE1MID0gZGF0YTtcbiAgICAgICAgICAgICAgICAkKCcjbWVzc2FnZScpLnNsaWRlRG93bignc2xvdycpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLm1hdGNoKCdzdWNjZXNzJykgIT0gbnVsbCkgJCgnI2NvbnRhY3Rmb3JtJykuc2xpZGVVcCgnc2xvdycpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICB9KTtcblxuICAgIHJldHVybiBmYWxzZTtcblxufSk7XG5cbi8qKiAgICBDaGFuZ2UgdGV4dCBvbiBjb250YWN0IGJ1dHRvbiB3aGVuIG9wZW5cblxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqKi9cblxuXG5cbiQoJy5idG4tY29udGFjdCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG5cblxuXG4gICAgJHRoaXMudG9nZ2xlQ2xhc3MoJ09wZW4gY29udGFjdCBmb3JtJyk7XG5cblxuXG4gICAgaWYgKCR0aGlzLmhhc0NsYXNzKCdPcGVuIGNvbnRhY3QgZm9ybScpKSB7XG5cbiAgICAgICAgJHRoaXMudGV4dCgnQ2xvc2UgbWUgaWYgeW91IGRvbmUnKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgJHRoaXMudGV4dCgnT3BlbiBjb250YWN0IGZvcm0nKTtcblxuICAgIH1cblxufSk7XG4iXX0=
