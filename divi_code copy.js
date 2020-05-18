/* Fullscreen Slider*/

<script>
(function($) {
    $(window).on('load resize', function() {
        $('.et_fullscreen_slider').each(function() {
            et_fullscreen_slider($(this));
        });
    });
    function et_fullscreen_slider(et_slider) {
        var et_viewport_height = $(window).height(),
            et_slider_height = $(et_slider).find('.et_pb_slider_container_inner').innerHeight(),
            $admin_bar = $('#wpadminbar'),
            $main_header = $('#main-header'),
            $top_header = $('#top-header');
        $(et_slider).height('auto');
        if ($admin_bar.length) {
            var et_viewport_height = et_viewport_height - $admin_bar.height();
        }
        if ($top_header.length) {
            var et_viewport_height = et_viewport_height - $top_header.height();
        }
        if (!$('.et_transparent_nav').length && !$('.et_vertical_nav').length) {
            var et_viewport_height = et_viewport_height - $main_header.height();
        }
        if (et_viewport_height > et_slider_height) {
            $(et_slider).height(et_viewport_height);
        }
    }
})(jQuery);
</script>


/* Popup Form */

<script type="text/javascript">
jQuery(function($){
jQuery('.button').click(function() {
jQuery('.popup').css('display', 'block');
});
jQuery('.close').click(function() {
jQuery('.popup').css('display', 'none');
});});
</script>
</script>

<script type="text/javascript">
jQuery(function($){
jQuery('.button2').click(function() {
jQuery('.popup2').css('display', 'block');
});
jQuery('.close').click(function() {
jQuery('.popup2').css('display', 'none');
});});
</script>

/*Pop up Form JS
transform: translatey(-50%) translatex(-50%);
position: fixed;
top: 50%;
left: 50%;
z-index: 1000;
border: 2px solid #56849f;
border-radius: 8px;*/