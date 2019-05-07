;
(function (win, $) {

    // Click to anchor
    var clickToAnchor = function () {
        if ($('#program_book').length > 0) {
            var clickToAnchorBook = $("#program_book").offset().top;
        }
        if ($('#program_creator').length > 0) {
            var clickToAnchorCreator = $("#program_creator").offset().top;
            var clickToAnchorAct = $("#program_act").offset().top;
            var clickToAnchorPlaykit = $("#program_playkit").offset().top;
        }
        if ($('#program_smart').length > 0) {
            var clickToAnchorSmart = $("#program_smart").offset().top;
            var clickToAnchorApp = $("#program_app").offset().top;
            var clickToAnchorCube = $("#program_cube").offset().top;
        }
        if ($('#program_video').length > 0) {
            var clickToAnchorVideo = $("#program_video").offset().top;
        }

        $('.js_program_book').on('click', function () {
            $('html, body').animate({
                scrollTop: clickToAnchorBook - 156
            }, 300);
        });
        $('.js_program_creator').on('click', function () {
            $('html, body').animate({
                scrollTop: clickToAnchorCreator - 156
            }, 300);
        });
        $('.js_program_act').on('click', function () {
            $('html, body').animate({
                scrollTop: clickToAnchorAct - 156
            }, 300);
        });
        $('.js_program_playkit').on('click', function () {
            $('html, body').animate({
                scrollTop: clickToAnchorPlaykit - 156
            }, 300);
        });
        $('.js_program_smart_link').on('click', function () {
            $('html, body').animate({
                scrollTop: clickToAnchorSmart - 156
            }, 300);
        });
        $('.js_program_app').on('click', function () {
            $('html, body').animate({
                scrollTop: clickToAnchorApp - 156
            }, 300);
        });
        $('.js_program_cube').on('click', function () {
            $('html, body').animate({
                scrollTop: clickToAnchorCube - 156
            }, 300);
        });
        $('.js_program_video').on('click', function () {
            $('html, body').animate({
                scrollTop: clickToAnchorVideo - 156
            }, 300);
        });
        $('.js_program_video2').on('click', function () {
            $('html, body').animate({
                scrollTop: clickToAnchorVideo - 156
            }, 300);
        });
    };

    var unSlick = function () {
        $('.js_program_main_sl').slick('unslick');
        $('.js_program_main_slthumb').slick('unslick');
        $('.js_program_act_sl').slick('unslick');
        $('.js_program_other_sl').slick('unslick');
        $('.js_program_playkit_lst').slick('unslick');
        $('.js_spot_lst').slick('unslick');
        $('.sl_book').slick('unslick');
    }

    // Tab in program sada page
    var tabSada = function () {
        $('.js_main_tab').on('click', function () {
            $('.program_main_tab').find('.on').removeClass('on');
            $(this).addClass('on');
        });
        $('.js_main_tab_aaron').on('click', function () {
            $('.tab_sing_ct').css('display', 'none');
            $('.tab_aaron_ct').css('display', 'block');
            unSlick();
            programSlider();
            bookSlider();
        });
        $('.js_main_tab_sing').on('click', function () {
            $('.tab_aaron_ct').css('display', 'none');
            $('.tab_sing_ct').css('display', 'block');
            unSlick();
            programSlider();
            bookSlider();
        });
    }

    // Equalize heights of elements
    var equalizeHieghts = function () {
        var maxHeight = 0;

        $('.js_program_smart').each(function () {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        });
        $('.js_program_smart').height(maxHeight);
    }

    // Slick slider
    var programSlider = function () {

        // Index number
        var $statusMainOrange = $('#program_main_orange .sl_count');
        var $slickElementMainOrange = $('#program_main_orange .js_program_main_sl');
        var $statusMainGreen = $('#program_main_green .sl_count');
        var $slickElementMainGreen = $('#program_main_green .js_program_main_sl');
        var $statusMainSing = $('#program_main_sing .sl_count');
        var $slickElementMainSing = $('#program_main_sing .js_program_main_sl');
        var $statusMainAaron = $('#program_main_aaron .sl_count');
        var $slickElementMainAaron = $('#program_main_aaron .js_program_main_sl');
        var $statusMainGyuri = $('#program_main_gyuri .sl_count');
        var $slickElementMainGyuri = $('#program_main_gyuri .js_program_main_sl');
        var $statusMainQplay = $('#program_main_qplay .sl_count');
        var $slickElementMainQplay = $('#program_main_qplay .js_program_main_sl');
        var $statusMainWplay = $('#program_main_wplay .sl_count');
        var $slickElementMainWplay = $('#program_main_wplay .js_program_main_sl');

        var $statusOrange = $('#program_book_orange .sl_count');
        var $slickElementOrange = $('#program_book_orange .sl_lst');
        var $statusGreen = $('#program_book_green .sl_count');
        var $slickElementGreen = $('#program_book_green .sl_lst');
        var $statusSing01 = $('#program_book_sing01 .sl_count');
        var $slickElementSing01 = $('#program_book_sing01 .sl_lst');
        var $statusSing02 = $('#program_book_sing02 .sl_count');
        var $slickElementSing02 = $('#program_book_sing02 .sl_lst');
        var $statusAaron01 = $('#program_book_aaron01 .sl_count');
        var $slickElementAaron01 = $('#program_book_aaron01 .sl_lst');
        var $statusAaron02 = $('#program_book_aaron02 .sl_count');
        var $slickElementAaron02 = $('#program_book_aaron02 .sl_lst');
        var $statusGyuri = $('#program_book_gyuri .sl_count');
        var $slickElementGyuri = $('#program_book_gyuri .sl_lst');
        var $statusQplay01 = $('#program_book_qplay01 .sl_count');
        var $slickElementQplay01 = $('#program_book_qplay01 .sl_lst');
        var $statusQplay02 = $('#program_book_qplay02 .sl_count');
        var $slickElementQplay02 = $('#program_book_qplay02 .sl_lst');
        var $statusQplay03 = $('#program_book_qplay03 .sl_count');
        var $slickElementQplay03 = $('#program_book_qplay03 .sl_lst');
        var $statusWplay01 = $('#program_book_wplay01 .sl_count');
        var $slickElementWplay01 = $('#program_book_wplay01 .sl_lst');
        var $statusWplay02 = $('#program_book_wplay02 .sl_count');
        var $slickElementWplay02 = $('#program_book_wplay02 .sl_lst');
        var $statusWplay03 = $('#program_book_wplay03 .sl_count');
        var $slickElementWplay03 = $('#program_book_wplay03 .sl_lst');
        
        function indexNumber(status, slickElement) {
            slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                var i = (currentSlide ? currentSlide : 0) + 1;
                status.text(i + '/' + slick.slideCount);
            });
        };
        
        indexNumber($statusMainOrange, $slickElementMainOrange);
        indexNumber($statusMainGreen, $slickElementMainGreen);
        indexNumber($statusMainSing, $slickElementMainSing);
        indexNumber($statusMainAaron, $slickElementMainAaron);
        indexNumber($statusMainGyuri, $slickElementMainGyuri);
        indexNumber($statusMainQplay, $slickElementMainQplay);
        indexNumber($statusMainWplay, $slickElementMainWplay);
        
        indexNumber($statusOrange, $slickElementOrange);
        indexNumber($statusGreen, $slickElementGreen);
        indexNumber($statusSing01, $slickElementSing01);
        indexNumber($statusSing02, $slickElementSing02);
        indexNumber($statusAaron01, $slickElementAaron01);
        indexNumber($statusAaron02, $slickElementAaron02);
        indexNumber($statusGyuri, $slickElementGyuri);
        indexNumber($statusQplay01, $slickElementQplay01);
        indexNumber($statusQplay02, $slickElementQplay02);
        indexNumber($statusQplay03, $slickElementQplay03);
        indexNumber($statusWplay01, $slickElementWplay01);
        indexNumber($statusWplay02, $slickElementWplay02);
        indexNumber($statusWplay03, $slickElementWplay03);

        // Init slick slider
        $('.js_program_main_sl').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.js_program_main_slthumb'
        });
        $('.js_program_main_slthumb').slick({
            nextArrow: '<button class="sl_thumb_next"><i class="ico_ar_thumbr"></i></button>',
            prevArrow: '<button class="sl_thumb_prev"><i class="ico_ar_thumbl"></i></button>',
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.js_program_main_sl',
            focusOnSelect: true
        });
        $('.js_program_act_sl').slick({
            nextArrow: '<button class="program_basic_next"><i class="ico_sl_s"></i></button>',
            prevArrow: '<button class="program_basic_prev"><i class="ico_sl_s"></i></button>',
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false
        });
        $('.js_program_other_sl').slick({
            nextArrow: '<button class="program_basic_next"><i class="ico_sl_s"></i></button>',
            prevArrow: '<button class="program_basic_prev"><i class="ico_sl_s"></i></button>',
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: false
        });
        $('.js_program_playkit_lst').slick({
            nextArrow: '<button class="program_playkit_next"><i class="ico_ar_thumbr_l"></i></button>',
            prevArrow: '<button class="program_playkit_prev"><i class="ico_ar_thumbl_l"></i></button>',
            slidesToShow: 1,
            slidesToScroll: 1,
        });
        $('.js_spot_lst').slick({
            nextArrow: '<button class="spot_sl_next"><i class="ico_ar_thumbr_l"></i></button>',
            prevArrow: '<button class="spot_sl_prev"><i class="ico_ar_thumbl_l"></i></button>',
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    };

    var bookSlider = function () {
        var gap = null,
            listLength = null,
            listLimite = null,
            listTitle = null,
            booleanCheck = true;

        $('.sl_book').slick({
            infinite: false,
            nextArrow: '<button class="sl_ctrl sl_ctrl_next"><i class="ico_slright_l"></i></button>',
            prevArrow: '<button class="sl_ctrl sl_ctrl_prev"><i class="ico_slleft_l"></i></button>',
            fade: true,
        });

        if ($('.program_story_main').next('div').find('.sl_item.on').find('.label').length > 0) {
            $('.program_story_main').find('.des').show();
        } else {
            $('.program_story_main').find('.des').hide();
        }

        $('.sl_book').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            booleanCheck = true;
        });

        $('.sl_book').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            listLength = $(this).parents('.program_story_main').next('div').find('li').length;
            listLimite = listLength / 2;
            listTitle = $(this).parents('.program_story_main').next('div').find('.sl_book_lst').find('li').eq(nextSlide).find('strong').text();

            // Set limit slide move
            if (listLimite > 5) {

                if (nextSlide < listLimite) {
                    $(this).parents('.program_story_main').next('div').find('.sl_book_lst .menu_sl').stop().animate({
                        marginTop: 0
                    });

                } else if (nextSlide >= listLimite) {
                    gap = $(this).parents('.program_story_main').next('div').find('.menu_sl').height() - $(this).parents('.program_story_main').next('div').find('.sl_book_lst').height();
                    $(this).parents('.program_story_main').next('div').find('.sl_book_lst .menu_sl').stop().animate({
                        marginTop: -gap + 'px'
                    });
                }
            }

            var activeSlide = $(this).parents('.program_dt_elem').index();

            // Sing Along & Dance Along
            if ($('.program_main_tab').length && $('.js_main_tab_sing').hasClass('on')) {
                if (activeSlide == 1) {
                    listButtonIndex0 = nextSlide;
                }
                if (activeSlide == 2) {
                    listButtonIndex1 = nextSlide;
                }
            } else if ($('.program_main_tab').length && $('.js_main_tab_aaron').hasClass('on')) {
                if (activeSlide == 1) {
                    listButtonIndex2 = nextSlide;
                }
                if (activeSlide == 2) {
                    listButtonIndex3 = nextSlide;
                }
            } else {
                if (activeSlide == 1) {
                    listButtonIndex0 = nextSlide;
                }
                if (activeSlide == 2) {
                    listButtonIndex1 = nextSlide;
                }
                if (activeSlide == 3) {
                    listButtonIndex2 = nextSlide;
                }
                if (activeSlide == 4) {
                    listButtonIndex3 = nextSlide;
                }
                if (activeSlide == 5) {
                    listButtonIndex4 = nextSlide;
                }
                if (activeSlide == 6) {
                    listButtonIndex5 = nextSlide;
                }
            }

            if ($(this).parents('.program_story_main').next('div').find('.sl_item.on').next().find('.label').length > 0) {
                $(this).parents('.program_story_main').find('.des').show();
            } else {
                $(this).parents('.program_story_main').find('.des').hide();
            }

            // Active list
            $(this).parents('.program_story_main').next('div').find('.sl_book_lst .sl_item').removeClass('on');
            $(this).parents('.program_story_main').next('div').find('.sl_book_lst').find('li').eq(nextSlide).addClass('on');

            // Change slide title
            $(this).parents('.program_story_main').find('.name').text(listTitle);
        });

        $('.program_story_menu').each(function () {
            var listLength = $(this).find('.menu_sl').find('li').length;
            if (listLength <= 10) {
                $(this).find('.sl_ctrl').hide();
            }
        });

        $('.menu_sl').each(function (index, element) {
            $(this).find('li').on('click', function (e) {
                e.preventDefault();
                console.log('aa')
                var listClickIndex = $(this).index();
                listLength = $(this).parents('ol').find('li').length;
                listLimite = listLength / 2;
                $(this).parents('.program_story_menu').prev('div').find('.sl_book').slick('slickGoTo', listClickIndex);
                if (listLength > 10) {
                    if (listClickIndex >= listLimite) {
                        gap = $(this).parents('.menu_sl').height() - $(this).parents('.sl_book_lst').height();
                        $(this).parents('.menu_sl').stop().animate({
                            marginTop: -gap + 'px'
                        });
                    } else if (listClickIndex < listLimite) {
                        gap = $(this).parents('.menu_sl').height() - $(this).parents('.sl_book_lst').height();
                        $(this).parents('.menu_sl').stop().animate({
                            marginTop: 0
                        });
                    }
                }

                if (index == 0) {
                    listButtonIndex0 = listClickIndex;
                }
                if (index == 1) {
                    listButtonIndex1 = listClickIndex;
                }
                if (index == 2) {
                    listButtonIndex2 = listClickIndex;
                }
                if (index == 3) {
                    listButtonIndex3 = listClickIndex;
                }
                if (index == 4) {
                    listButtonIndex4 = listClickIndex;
                }
                if (index == 5) {
                    listButtonIndex5 = listClickIndex;
                }

                if ($(this).find('.label').length > 0) {
                    $(this).parent().parent().parent().parent().find('.des').show();
                } else {
                    $(this).parent().parent().parent().parent().find('.des').hide();
                }

            });
        });

        var slBookButtonLength = parseInt($('.js_sl_book_button').length);

        for (var i = 0; i <= slBookButtonLength - 1; i++) {
            window['listButtonIndex' + i] = 0;
        }

        $('.js_sl_book_button').each(function (index, element) {
            $(this).on('click', function (e) {
                if (booleanCheck) {
                    booleanCheck = false;
                    if (index == 0) {
                        listButtonIndex0++;
                        if (listButtonIndex0 >= 6) {
                            gap = $(this).parents('.program_story_menu').find('.menu_sl').height() - $(this).parents('.program_story_menu').find('.sl_book_lst').height();
                            $(this).parents('.program_story_menu').find('.menu_sl').stop().animate({
                                marginTop: -gap + 'px'
                            });
                        } else if (listButtonIndex0 < 6) {
                            gap = $(this).parents('.program_story_menu').find('.menu_sl').height() - $(this).parents('.program_story_menu').find('.sl_book_lst').height();
                            $(this).parents('.program_story_menu').find('.menu_sl').stop().animate({
                                marginTop: 0
                            });
                        }
                        $(this).parents('.program_story_menu').prev('div').find('.sl_book').slick('slickGoTo', listButtonIndex0);
                    }
                    if (index == 1) {
                        listButtonIndex1++;
                        if (listButtonIndex1 >= 6) {
                            gap = $(this).parents('.program_story_menu').find('.menu_sl').height() - $(this).parents('.program_story_menu').find('.sl_book_lst').height();
                            $(this).parents('.program_story_menu').find('.menu_sl').stop().animate({
                                marginTop: -gap + 'px'
                            });
                        } else if (listButtonIndex1 < 6) {
                            gap = $(this).parents('.program_story_menu').find('.menu_sl').height() - $(this).parents('.program_story_menu').find('.sl_book_lst').height();
                            $(this).parents('.program_story_menu').find('.menu_sl').stop().animate({
                                marginTop: 0
                            });
                        }
                        $(this).parents('.program_story_menu').prev('div').find('.sl_book').slick('slickGoTo', listButtonIndex1);
                    }
                    if (index == 2) {
                        listButtonIndex2++;
                        if (listButtonIndex2 >= 6) {
                            gap = $(this).parents('.program_story_menu').find('.menu_sl').height() - $(this).parents('.program_story_menu').find('.sl_book_lst').height();
                            $(this).parents('.program_story_menu').find('.menu_sl').stop().animate({
                                marginTop: -gap + 'px'
                            });
                        } else if (listButtonIndex2 < 6) {
                            gap = $(this).parents('.program_story_menu').find('.menu_sl').height() - $(this).parents('.program_story_menu').find('.sl_book_lst').height();
                            $(this).parents('.program_story_menu').find('.menu_sl').stop().animate({
                                marginTop: 0
                            });
                        }
                        $(this).parents('.program_story_menu').prev('div').find('.sl_book').slick('slickGoTo', listButtonIndex2);
                    }
                    if (index == 3) {
                        listButtonIndex3++;
                        if (listButtonIndex3 >= 6) {
                            gap = $(this).parents('.program_story_menu').find('.menu_sl').height() - $(this).parents('.program_story_menu').find('.sl_book_lst').height();
                            $(this).parents('.program_story_menu').find('.menu_sl').stop().animate({
                                marginTop: -gap + 'px'
                            });
                        } else if (listButtonIndex3 < 6) {
                            gap = $(this).parents('.program_story_menu').find('.menu_sl').height() - $(this).parents('.program_story_menu').find('.sl_book_lst').height();
                            $(this).parents('.program_story_menu').find('.menu_sl').stop().animate({
                                marginTop: 0
                            });
                        }
                        $(this).parents('.program_story_menu').prev('div').find('.sl_book').slick('slickGoTo', listButtonIndex3);
                    }
                    if (index == 4) {
                        listButtonIndex4++;
                        if (listButtonIndex4 >= 6) {
                            gap = $(this).parents('.program_story_menu').find('.menu_sl').height() - $(this).parents('.program_story_menu').find('.sl_book_lst').height();
                            $(this).parents('.program_story_menu').find('.menu_sl').stop().animate({
                                marginTop: -gap + 'px'
                            });
                        } else if (listButtonIndex4 < 6) {
                            gap = $(this).parents('.program_story_menu').find('.menu_sl').height() - $(this).parents('.program_story_menu').find('.sl_book_lst').height();
                            $(this).parents('.program_story_menu').find('.menu_sl').stop().animate({
                                marginTop: 0
                            });
                        }
                        $(this).parents('.program_story_menu').prev('div').find('.sl_book').slick('slickGoTo', listButtonIndex4);
                    }
                    if (index == 5) {
                        listButtonIndex5++;
                        if (listButtonIndex5 >= 6) {
                            gap = $(this).parents('.program_story_menu').find('.menu_sl').height() - $(this).parents('.program_story_menu').find('.sl_book_lst').height();
                            $(this).parents('.program_story_menu').find('.menu_sl').stop().animate({
                                marginTop: -gap + 'px'
                            });
                        } else if (listButtonIndex5 < 6) {
                            gap = $(this).parents('.program_story_menu').find('.menu_sl').height() - $(this).parents('.program_story_menu').find('.sl_book_lst').height();
                            $(this).parents('.program_story_menu').find('.menu_sl').stop().animate({
                                marginTop: 0
                            });
                        }
                        $(this).parents('.program_story_menu').prev('div').find('.sl_book').slick('slickGoTo', listButtonIndex5);
                    }
                }

            });
        });
    }

    // Audio js
    var audioCtrl = function () {
        var music = document.getElementById('music'); // id for audio element
        var duration = music.duration; // Duration of audio clip, calculated here for embedding purposes
        var pButton = document.getElementById('pButton'); // play button
        var playhead = document.getElementById('playhead'); // playhead
        var timeline = document.getElementById('timeline'); // timeline

        var timelineWidth = 208;

        // play button event listenter
        pButton.addEventListener("click", play);

        // timeupdate event listener
        music.addEventListener("timeupdate", timeUpdate, false);

        // makes timeline clickable
        timeline.addEventListener("click", function(event) {
            moveplayhead(event);
            music.currentTime = duration * clickPercent(event);
        }, false);

        // returns click as decimal (.77) of the total timelineWidth
        function clickPercent(event) {
            return (event.clientX - getPosition(timeline)) / timelineWidth;
        }

        // makes playhead draggable
        playhead.addEventListener('mousedown', mouseDown, false);
        window.addEventListener('mouseup', mouseUp, false);

        // Boolean value so that audio position is updated only when the playhead is released
        var onplayhead = false;

        // mouseDown EventListener
        function mouseDown() {
            onplayhead = true;
            window.addEventListener('mousemove', moveplayhead, true);
            music.removeEventListener('timeupdate', timeUpdate, false);
        }

        // mouseUp EventListener
        // getting input from all mouse clicks
        function mouseUp(event) {
            if (onplayhead === true) {
                moveplayhead(event);
                window.removeEventListener('mousemove', moveplayhead, true);
                // change current time
                music.currentTime = duration * clickPercent(event);
                music.addEventListener('timeupdate', timeUpdate, false);
            }
            onplayhead = false;
        }
        // mousemove EventListener
        // Moves playhead as user drags
        function moveplayhead(event) {
            var newWidth = event.clientX - getPosition(timeline);

            if (newWidth >= 0 && newWidth <= timelineWidth) {
                playhead.style.width = newWidth + "px";
            }
            if (newWidth < 0) {
                playhead.style.width = "0px";
            }
            if (newWidth > timelineWidth) {
                playhead.style.width = timelineWidth + "px";
            }
        }

        // timeUpdate
        // Synchronizes playhead position with current point in audio
        function timeUpdate() {
            var playPercent = timelineWidth * (music.currentTime / duration);
            playhead.style.width = playPercent + "px";

            if (music.currentTime === duration) {
                pButton.className = "";
                pButton.className = "play";
            }
        }

        //Play and Pause
        function play() {
            // start music
            if (music.paused) {
                music.play();
                // remove play, add pause
                pButton.className = "";
                pButton.className = "pause";
            } else { // pause music
                music.pause();
                // remove pause, add play
                pButton.className = "";
                pButton.className = "play";
            }
        }

        // Gets audio file duration
        music.addEventListener("canplaythrough", function() {
            duration = music.duration;
        }, false);

        // getPosition
        // Returns elements left position relative to top-left of viewport
        function getPosition(el) {
            return el.getBoundingClientRect().left;
        }
    }


    $(function () {
        programSlider();
        bookSlider();
        equalizeHieghts();
        tabSada();
        audioCtrl();
    });

    $(win).on('load', function () {
        clickToAnchor();
    });
})(window, window.jQuery);