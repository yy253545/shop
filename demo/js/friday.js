$(function(){
    $(".aim_01 li").click(function(){
        
    })
    $(".Specifications_01 li").click(function(){
        $(this).addClass({"background":"#666","color":"#fff"}).toggle()
    })
    $(".detailsT_01").click(function(){
        $(".details_01").parent($(".all_01")).show();
        $(".evaluate_01").parent($(".all_01")).hide();
    })
    $(".evaluateT_01").click(function(){
        $(".details_01").parent($(".all_01")).hide();
        $(".evaluate_01").parent($(".all_01")).show();
    })
    $(".add_01").click(function(){
        layer.confirm('已成功加入购物车', {
            btn: ['继续购物','查看购物车'] //按钮
          }, function(){
            layer.msg('的确很重要', {icon: 1});
          }, function(){
            layer.msg('也可以这样', {
              time: 20000, //20s后自动关闭
              btn: ['明白了', '知道了']
            });
          });
    })

})