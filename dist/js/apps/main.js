;(function (win, $) {
    // Fixed #footer to bottom
    var containerPb = function () {
        var footerHeight = $('#footer').outerHeight();

        $('#container').css('padding-bottom',footerHeight);
    }

    $(function () {
        // sample2.init();
        // sample3.init();
    });

    $(win).on('load', function () {
        // sample.init();
        // sample4();
        // sample5();
        // $('body').sample6();

        containerPb();
    });
})(window, window.jQuery);
