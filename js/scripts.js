/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict
    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
        loop: true
    });
    
    typewriter.typeString('Welcome!')
        .pauseFor(2000)
        .deleteAll()
        .typeString('Bienvenu!')
        .pauseFor(2000)
        .deleteAll()
        .typeString('Herzlich Willkommen!')
        .pauseFor(2000)
        .deleteAll()
        .typeString('欢迎!')
        .pauseFor(2000)
        .deleteAll()
        .typeString('أهلا بك')
        .pauseFor(2000)
        .deleteAll()
        .start();
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    

})(jQuery); // End of use strict


