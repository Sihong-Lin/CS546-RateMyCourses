(function($) {
    "use strict";


    /*-------------------------------------
     Auto height for product listing
     -------------------------------------*/
    $(window).on('load resize', function() {

        $('[data-type="section-switch"], #main-demo1 > a, #main-demo2 a').on('click', function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                if (target.length > 0) {

                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

        /*-------------------------------------
        On Scroll
        -------------------------------------*/
        $(window).on('scroll', function() {

            // Back Top Button
            if ($(window).scrollTop() > 700) {
                $('.return-to-top').addClass('back-top');
            } else {
                $('.return-to-top').removeClass('back-top');
            }
        });
    });

    /*--------------------------------------
    Isotope initialization
    --------------------------------------*/
    var $container = $(".isotope-wrap");
    if ($container.length > 0) {

        var $isotope;
        var blogGallerIso = $(".featuredContainer", $container).imagesLoaded(function() {
            var selectero = $container.find('.isotope-classes-tab .nav-item:first-child').data('filter') || '*';

            $isotope = $(".featuredContainer", $container).isotope({
                filter: selectero,
                transitionDuration: "1s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    transform: "scale(1)",
                    opacity: 1
                }
            });
        });
        $container.find(".isotope-classes-tab").on("click", "a", function() {
            var $this = $(this);
            $this
                .parent(".isotope-classes-tab")
                .find("a")
                .removeClass("current");
            $this.addClass("current");
            var selector = $this.attr("data-filter");
            $isotope.isotope({
                filter: selector
            });
            return false;
        });
    }

})(jQuery);