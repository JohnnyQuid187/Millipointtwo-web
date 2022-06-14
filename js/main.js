(function ($) {
    "use strict";

    $(window).on('load', function(){
        // Prealoder
        $("#preloader").delay(1150).fadeOut("slow");
    });

    $(document).ready(function () {

        // sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();

        // Hamburger-menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, .ofcavas-menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });

        // Cookie popup
        $('.manage_consent').on('click', function () {
            $('.cookie_popup').addClass('current');
        });

        $('.popup_close, .accept, .deny').on('click', function () {
            $('.cookie_popup').removeClass('current');
        });


        // gallery section title active 

        $('.gallery_area .box.a .btn').on('click', function () {
            $('.gallery_area .box.a h1').addClass('active');
            $('.gallery_area .box.b h1').removeClass('active');
            $('.gallery_area .box.c h1').removeClass('active');
        });

        $('.gallery_area .box.b .btn').on('click', function () {
            $('.gallery_area .box.a h1').removeClass('active');
            $('.gallery_area .box.b h1').addClass('active');
            $('.gallery_area .box.c h1').removeClass('active');
        });

        $('.gallery_area .box.c .btn').on('click', function () {
            $('.gallery_area .box.a h1').removeClass('active');
            $('.gallery_area .box.b h1').removeClass('active');
            $('.gallery_area .box.c h1').addClass('active');
        });


        // magnific Popup Initialize
        $(document).ready(function () {
            $(function () {
                $('.popup-gallery-1').magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    gallery: {
                        enabled: true,
                        arrowMarkup: '<span title="%title%" role="button" class="gallery-arrow gallery-arrow-%dir%"></span>'
                    },
                    callbacks: {
                        change: function () {
                            galleryArrowPosition();
                        },
                        resize: function () {
                            galleryArrowPosition();
                        },
                        open: function () {
                            galleryArrowPosition();
                        },
                        buildControls: function () {
                            // re-appends controls inside the main container
                            if( window.screen.width > 767){
                                this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
                            }
                        }
                    }
                });

                $('.popup-gallery-2').magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    gallery: {
                        enabled: true,
                        arrowMarkup: '<span title="%title%" role="button" class="gallery-arrow gallery-arrow-%dir%"></span>'
                    },
                    callbacks: {
                        change: function () {
                            galleryArrowPosition();
                        },
                        resize: function () {
                            galleryArrowPosition();
                        },
                        open: function () {
                            galleryArrowPosition();
                        },
                        buildControls: function () {
                            // re-appends controls inside the main container
                            if (window.screen.width > 767) {
                                this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
                            }
                        }
                    }
                });


                $('.popup-gallery-3').magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    gallery: {
                        enabled: true,
                        arrowMarkup: '<span title="%title%" role="button" class="gallery-arrow gallery-arrow-%dir%"></span>'
                    },
                    callbacks: {
                        change: function () {
                            galleryArrowPosition();
                        },
                        resize: function () {
                            galleryArrowPosition();
                        },
                        open: function () {
                            galleryArrowPosition();
                        },
                        buildControls: function () {
                            // re-appends controls inside the main container
                            if (window.screen.width > 767) {
                                this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
                            }
                        }
                    }
                });

            });

            var arrowWidth = 30;
            var arrowGap = 20;  

            function galleryArrowPosition() {
                var contWidth = $('.mfp-content').width(); 
                var left = contWidth / 2 + arrowGap + arrowWidth;
                var right = contWidth / 2 + arrowGap; 
                $('.gallery-arrow-left').css('margin-left', '-' + left + 'px');
                $('.gallery-arrow-right').css('margin-left', right + 'px');
            }
        });
        
    });

})(jQuery);