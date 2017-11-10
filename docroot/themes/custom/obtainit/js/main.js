(function ($, Drupal) {
    $(document).ready(function () {
        // reference for main items
        var slider = $('#slider');
        // reference for thumbnail items
        var thumbnailSlider = $('#thumbnailSlider');
        //transition time in ms
        var duration = 500;

        // carousel function for main slider
        slider.owlCarousel({
            loop: false,
            nav: false,
            items: 1
        }).on('changed.owl.carousel', function (e) {
            //On change of main item to trigger thumbnail item
            thumbnailSlider.trigger('to.owl.carousel', [e.item.index, duration, true]);
        });

        // carousel function for thumbnail slider
        thumbnailSlider.owlCarousel({
            loop: false,
            center: true, //to display the thumbnail item in center
            nav: false,
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 6
                }
            }
        }).on('click', '.owl-item', function () {
            // On click of thumbnail items to trigger same main item
            slider.trigger('to.owl.carousel', [$(this).index(), duration, true]);

        }).on('changed.owl.carousel', function (e) {
            // On change of thumbnail item to trigger main item
            slider.trigger('to.owl.carousel', [e.item.index, duration, true]);
        });
        $('#obtainit-mobile-menu-trigger').click(function(){
            $(this).toggleClass('open');
            $('.obtainit-menu-wrapper').toggleClass('mobile-menu-open');
        });

        // Show/hide filters
        $('.obtainit-listing__filters h3').click(function() {
            $( "ul" ).toggle()
        });
    });
})(jQuery, Drupal);