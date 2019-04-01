
$(function(){
    var live = true;
    $(".nav_02").find(".zzz").hover(function(){
        $(this).addClass("on").siblings().removeClass("on");
    })
    $(".nav_02").find(".zzz").eq(0).hover(function(){
        $(".select_card_02>li").hide();
        $(".downList_02").stop().slideToggle();
        // $(".select_card_02").toggle();
    })
    $(".select_card_02>li").hover(function(){
        $(".select_card_02>li").eq($(this).index()).toggle()
    })
    $(".downList_02>li").hover(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".select_card_02").find("li").eq($(this).index()).show().siblings().hide();
    })
    // $(".content_03").hide();
    $(".nav_02>.zzz").click(function(){
        $(".content_body_02").children().eq($(this).index()).show().siblings().hide();
        
    })
    // 个人中心
    // banner轮播
    var mySwiper = new Swiper (".index_banner_02",{
        direction:"horizontal",
        // autoplay:true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
    })
    var mySwiper = new Swiper('.minute_box_02',{
        slidesPerView : 1,
        direction:"horizontal",
        freeMove:false,
        // autoplay:true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
    })
    // 获取时间对象
    setInterval(function(){
        var oDate = new Date();
        var Ohours = oDate.getHours();
        var Ominutes = oDate.getMinutes();
        var Oseconds = oDate.getSeconds();
        $(".hours_02").html(Ohours)
        $(".min_02").html(Ominutes)
        $(".sec_02").html(Oseconds)
    },1000)


})