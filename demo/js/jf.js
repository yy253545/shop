$(function(){

	var button ="";
	var oneIndex=0;
	var t
	auto()
	function auto(){
		t=setInterval(function(){
			move(oneIndex+1)
		},1500)
	}
	$(".banner_03").mouseover(function(){
		clearInterval(t)
	})
	$(".banner_03").mouseout(function(){
		auto()
	})
	for(var i =0;i<$("img").length;i++){
		button+="<li></li>"
	}
	var wi = $(".banner_03 img").innerWidth()
	console.log(wi)
	$(".button_03").html(button);
	$(".button_03").find("li").eq(0).addClass("on_03");
	var w = wi*($("img").length);
	$(".box").css({"width":w+"px"});
	$(".button_03").find("li").click(function(){
		move($(this).index())
	})
	function move(index){
		if(index>$("img").length-1){
			index=0;
		}
		if(index<0){
			index=$("img").length-1
		}
		$(".button_03").find("li").eq(index).addClass("on_03").siblings(".button_03 li").removeClass("on_03");
		$(".box_03").stop().animate({"left":-wi*(index)+"px"},0)
		oneIndex=index;
	}
})
