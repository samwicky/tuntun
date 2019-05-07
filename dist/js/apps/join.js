 ;(function (win, $) {
    var scrbar = function () {
        $(".val_lst").scrollBox();
    };

    var initShortcut = function () {
        var eleLi = $('.shortcut_lnk').find('li');
        var liCount = eleLi.length;
        eleLi.each(function (i) {
            $(this).css({
                'bottom': (liCount - 1 - i) * 120 + "px",
                'z-index': liCount - i
            });
        });
    };

    var containerPb = function () {
        var footerHeight = $('#footer').outerHeight();
        $('#container').css('padding-bottom',footerHeight);
    };

    $(document).ready(function () {
        var agr_chb = $('.list_agreement').find('input[type="checkbox"]');
        $('#accept_all').click(function () {
            agr_chb.prop('checked',$(this).is(':checked'));
        });

        agr_chb.click(function () {
            if(agr_chb.filter(':checked').length === agr_chb.length){
                $('#accept_all').prop('checked',true);
            } else {
                $('#accept_all').prop('checked',false);
            }
        });

        $('.toggle_pass').click(function (e) {
            e.preventDefault();
            var inp = $(this).prev('input');
            if(inp.attr('type') === 'password'){
                inp.attr('type','text');
                $(this).find('span.hide').attr('class','show');
            } else {
                inp.attr('type','password');
                $(this).find('span.show').attr('class','hide');
            }
        });

        $('.custom_select').on('click','button',function () {
            $(this).parents('.custom_select').toggleClass('open')
        });

        $(window).click(function (e) {
            if($('.custom_select.open').has($(e.target)).length === 0){
                $('.custom_select.open').removeClass('open');
            }
        });

        scrbar();
        $('.custom_select > button').click(function () {
            $(window).trigger("resize.scrollBox");
        });

        $('.custom_select').find('ul.val_lst button').click(function () {
            var val = $(this).text();
            $(this).parents('.val_lst').prev('button').text(val);
            $(this).parents('.val_lst').next('input[type="hidden"]').val(val);
        });

        $('.play_act_lst').on('init reInit afterChange', function(event, slick, currentSlide){
            var i = (currentSlide ? currentSlide : 0) + 1;
            $(this).next('.slide_page').text(i + '/' + slick.slideCount);
        });

        $('.play_act_lst').slick({
            nextArrow: '<button class="sl_thumb_next"><i class="next"></i></button>',
            prevArrow: '<button class="sl_thumb_prev"><i class="prev"></i></button>',
            infinite: true,
            variableWidth: true
        });

        $('.scroll_lnk').click(function (e) {
            e.preventDefault();
            var hash = $(this).attr('href');
            $('html,body').animate({
                scrollTop: $(hash).offset().top - 26
            }, 800)
        });

        $(win).on('scroll',function(){
            var pos = $('html, body').scrollTop();
            var appT = $('.apply_fm').offset().top;
            if(pos >= (appT - $(win).height())){
                $('.fixed_container.displayed.exp_app').fadeOut(400,function () {
                    $('.fixed_container.displayed.exp_app').removeClass('displayed');
                })
            } else {
                $('.fixed_container.exp_app').fadeIn(400,function () {
                    $('.fixed_container.exp_app').addClass('displayed');
                })
            }
        });

        $('.qa_item').on('click','a',function (e) {
            e.preventDefault();
            $(this).next('.ans').slideToggle();
            $(this).parents('.qa_item').toggleClass('open');
        })
    });

    $(win).on('load', function () {
        containerPb();
        initShortcut();
    });
})(window, window.jQuery);