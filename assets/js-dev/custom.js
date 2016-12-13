
$(document).ready(function () {

    var header = $('header');
    var offset = $(header).offset();
    $('body').on('click', '.scroller', function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 90
        }, 800);
    });

    //functions to run on scroll
    $(window).scroll(function () {
        headerAnimate();
    });


    function checkTheHeader() {
        var offset = $(header).offset();
        if (offset.top > 20) {
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
        }
    }
    checkTheHeader();

    function headerAnimate() {
        var scrollTop = $(window).scrollTop();
        var offset = $(header).offset();
        if (scrollTop > 20) {
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
        }
    }

// menu-trigger
    var $menu = $('#menu');

    $(document).mouseup(function (e) {

        if (!$menu.is(e.target) &&
            $menu.has(e.target).length === 0) {
            $menu.removeClass('active');
        }
    });

    $(window).resize(function () {
        if ($(window).width() >= 991) {
            $('#menu').removeClass('active');
        }
    });

    $('.menu-trigger a').click(function () {
        $('#menu').toggleClass('active');
    });

    $menu.find('li>a').click(function () {
        $('#menu').removeClass('active');
    });


});