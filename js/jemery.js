$(function() {

    var wi = $('.banner_zzj').outerHeight() + $('.s-nav').outerHeight();
    $('.yidong').css({
        "margin-top": wi + "px"
    });

    var arr_C = ['首&nbsp;&nbsp;页', '核心业务<ul id="menu-show" class="dropdown-menu" aria-labelledby="dropdownMen2" style="text-align:center;display:block;"><li style="clear:both;"><a href="#" style="padding:5px;">核心业务</a></li><li style="clear:both;"><a href="#" style="padding:5px;">销售渠道</a></li><li style="clear:both;"><a href="#" style="padding:5px;">合作伙伴</a></li></ul><ul class="mobile1" style="display:none;"><li style="clear:both;"><a href="#" style="padding:5px;">核心业务</a></li><li style="clear:both;"><a href="#" style="padding:5px;">销售渠道</a></li><li style="clear:both;"><a href="#" style="padding:5px;">合作伙伴</a></li></ul>', '新&nbsp;&nbsp闻', '案&nbsp;&nbsp;例', '关&nbsp;于&nbsp;&nbsp;我&nbsp;们', '&nbsp;联&nbsp;系&nbsp;&nbsp;我&nbsp;们'];
    var arr_E = ['<span class="icon_q"></span>HOME', '<span class="icon_q"></span>CORE<span class="caret"></span><span class=" icon-show">+</span>', '<span class="icon_q"></span>NEWS', '<span class="icon_q"></span>CASE', '<span class="icon_q"></span>ABOUT US', '<span class="icon_q"></span>CONTACT US'];
    $('#s-nav>li').on('mouseenter mouseleave click', function(ev) {
        switch (ev.type) {
            case 'click':
            case 'mouseenter':
                $(this).children().html(arr_C[$(this).index()]);
                break;
            case 'mouseleave':
                $(this).children().html(arr_E[$(this).index()]);
                break;
        }
    });
    if ($(window).width() <= 768) {
        $('.logo').attr('src', './img/logo_2.gif');
        $('#menu-show').css('display', 'none');
    } else {
        $('.logo').attr('src', './img/logo.gif');
    }
    /*调整窗口自动调整宽度*/
    $(window).resize(function() {
        if ($(window).width() <= 768) {
            $('.logo').attr('src', './img/logo_2.gif');
        } else {
            $('.logo').attr('src', './img/logo.gif');
        }
    });

    var count = 0;
    $('.nav-ss').on('click', function() {
        //banner_zzj  bannner 的类
        //.s-nav   导航栏的类

        count++;
        if (count % 2 == 1) {
            $('.nav-su').css('left', '-1%');
            $('.contorl').css('left', '70%');
            $('.nav-su').css('transition', 'all 1s');
            $('.contorl').css('transition', 'all 1s');
        } else {
            $('.nav-su').css('left', '-70%');
            $('.contorl').css('left', '0%');
            $('.nav-su').css('transition', 'all 1s');
            $('.contorl').css('transition', 'all 1s');
        }

    });
    var count1 = 0;
    $('#li_core').on('click', function() {
        count1++;
        if (count1 % 2 == 1) {
            $('#s2-nav').css('display', 'block');
        } else {
            $('#s2-nav').css('display', 'none');
        }

    })
})