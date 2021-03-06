var View =
    {
        isMobile: function () {
            var ua = navigator.userAgent;

            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),

                isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),

                isAndroid = ua.match(/(Android)\s+([\d.]+)/),

                isMobile = isIphone || isAndroid;

            return isMobile;
        },
        params: {
            index: 0,
            'wrapper': [//新增幻灯片
                '<div class="swiper-slide"' +
                '>' +
                '<a href="/index.php?r=a/t&i=ab0cf23544912b69"' +
                ' data-mold="4" data-el="1" data-addr="/index.php?r=a/t&amp;i=ab0cf23544912b69">' +
                '<img src="https://img.alicdn.com/imgextra/i1/2508158775/O1CN012Egzvu9UIZ1hGlk_!!2508158775.jpg ">' +
                '</a>' +
                '</div>',
            ],
            'swiper': [
                '<span class="swiper-pagination-bullet"></span>',
            ],
        },
        init: function () {
            View.replayNav();
            View.render();
        },
        render: function () {
            setTimeout(function () {
                // ui_swiper
                if(View.isMobile()){
                    var childrens = $(".ui_swiper .swiper-wrapper").children().length;
                    console.log("childrens:" + childrens - 1);
                    View.params.wrapper.index = childrens - 1;
                    var html = $(".ui_swiper .swiper-wrapper").html() + View.params.wrapper.join("");
                    var html2 = $(".ui_swiper .swiper-pagination").html() + View.params.swiper.join("");
                    $(".ui_swiper .swiper-wrapper").html(html);
                    $(".ui_swiper .swiper-pagination").html(html2);
                }else {
                    var childrens = $(".unslider .swiper-wrapper").children().length;
                    console.log("childrens:" + childrens - 1);
                    View.params.wrapper.index = childrens - 1;
                    var html = $(".unslider .swiper-wrapper").html() + View.params.wrapper.join("");
                    var html2 = $(".unslider .swiper-pagination").html() + View.params.swiper.join("");
                    $(".unslider .swiper-wrapper").html(html);
                    $(".unslider .swiper-pagination").html(html2);
                }


                if(!View.isMobile()){
                    var swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev',
                        slidesPerView: 1,
                        paginationClickable: true,
                        spaceBetween: 30,
                        autoplay: 3000,
                        loop: true
                    });

                    var overSwiper = function (s) {
                        if (swiper) {
                            $('.unslider').mouseleave(function () {
                                swiper.startAutoplay();
                            });
                            $('.swiper-pagination .swiper-pagination-bullet').mouseenter(function () {
                                $(this).click();
                                swiper.startAutoplay();
                            });
                        } else {
                            if (s < 10) {
                                s++;
                                setTimeout(function () {
                                    overSwiper(s);
                                }, 500);
                            }
                        }
                    }

                    if (swiper) {
                        $('.unslider').mouseleave(function () {
                            swiper.startAutoplay();
                        });
                        $('.swiper-pagination .swiper-pagination-bullet').mouseenter(function () {
                            $(this).click();
                            swiper.startAutoplay();
                        });
                    } else {
                        overSwiper(s);
                    }
                }
            }, 1000)
        },
        nav:[
            '<div class="home_nav" style="layout:2;margin-bottom:5px;"> ' +
            '<ul class="row-s" ui-mta-modular="" data-mta_name="首页-图标导航" isload="true">' +
            '<li class="col-10-2"><a href="index.php?r=realtime/wap" data-mold="0" data-el="1" data-addr="/index.php?r=nine">' +
                '<i class="iconfont">' +
                '<img src="/hunki/assets/images/cat/1.png" alt="">' +
                '</i>疯抢排行</a>' +
            '</li>' +
			'<li class="col-10-2"><a href="index.php?r=ddq/wap" data-mold="0" data-el="1" data-addr="/index.php?r=nine">' +
                '<i class="iconfont">' +
                '<img src="/hunki/assets/images/cat/2.png" alt="">' +
                '</i>咚咚抢</a>' +
            '</li>' +
            '<li class="col-10-2">' +
            '   <a href="/index.php?r=nine/list&n_id=2" data-mold="0" data-el="3" data-addr="/index.php?r=ddq">' +
            '   <i class="iconfont">' +
            '<img src="/hunki/assets/images/cat/4.png" alt="">' +
            '</i>每日精选</a>' +
            '</li>' +
            '<li class="col-10-2"><a href="index.php?r=realtime/fold" data-mold="0" data-el="4" data-addr="/index.php?r=index/r">' +
            '<i class="iconfont">' +
            '<img src="/hunki/assets/images/cat/5.png" alt="">' +
            '</i>折上折</a>' +
            '</li>' +
            '<li class="col-10-2">' +
            '   <a href="/index.php?r=index/r" data-mold="0" data-el="3" data-addr="/index.php?r=ddq">' +
            '   <i class="iconfont">' +
            '<img src="/hunki/assets/images/cat/6.png" alt="">' +
            '</i>编辑精选</a>' +
            '</li>' +
            '</li>' +
            '<li class="col-10-2">' +
            '   <a href="/index.php?r=nine/wap" data-mold="0" data-el="3" data-addr="/index.php?r=ddq">' +
            '   <i class="iconfont">' +
            '<img src="/hunki/assets/images/cat/3.png" alt="">' +
            '</i>9.9包邮</a>' +
            '</li>' +
            '</li>' +
            '<li class="col-10-2">' +
            '   <a href="/index.php?r=index/lay" data-mold="0" data-el="3" data-addr="/index.php?r=ddq">' +
            '   <i class="iconfont">' +
            '<img src="/hunki/assets/images/cat/8.png" alt="">' +
            '</i>商品分类</a>' +
            '</li>' +
            '</li>' +
            '<li class="col-10-2">' +
            '   <a href="/index.php?r=index/search&s_type=1&kw=&kws=" data-mold="0" data-el="3" data-addr="/index.php?r=ddq">' +
            '   <i class="iconfont">' +
            '<img src="/hunki/assets/images/cat/10.png" alt="">' +
            '</i>全网搜索</a>' +
            '</li>' +
			'<li class="col-10-2"><a href="/index.php?r=user/list" data-mold="0" data-el="1" data-addr="/index.php?r=nine">' +
                '<i class="iconfont">' +
                '<img src="/hunki/assets/images/cat/7.png" alt="">' +
                '</i>收藏</a>' +
            '</li>' +
			'<li class="col-10-2"><a href="/index.php?r=user/index" data-mold="0" data-el="1" data-addr="/index.php?r=nine">' +
                '<i class="iconfont">' +
                '<img src="/hunki/assets/images/cat/9.png" alt="">' +
                '</i>个人中心</a>' +
            '</li>' +
            ' </ul>' +
            '</div>'
        ],
        replayNav:function () {
            setTimeout(function () {
                $("[data-item='indexContentNav'] .home_nav").html(View.nav.join(""))
            },1000);
        }
    };
$(document).ready(function () {
    View.init();
});