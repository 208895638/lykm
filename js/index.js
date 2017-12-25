$(function(){
	var zflx; // 支付类型
	$(".zffs").on("click","li",function(){
		$(this).addClass("on").siblings().removeClass("on");
	});
	//在线加款  人工加款切换
	$(".tab li").on("click",function(){
		$(this).addClass("on").siblings().removeClass("on");
		var i = $(this).index();
		$(".mainContent .per").eq(i).show().siblings().hide();
	})
	//  支付宝  微信跳转层切换效果
	$(".cz").on("click",function(){
		maskShow(".wx");
	});
	//点击小x关闭
	$(".mask h2 em").on("click",function(){
		maskHide('.wx');
	});
	function maskShow(obj){
		$(".mask").show();
		$(".mask").find(obj).show();
		$(".mask").find(obj).addClass("animate");
	};
	function maskHide(obj){
		$(".mask").find(obj).removeClass("animate");
		$(".mask").find(obj).hide(500,function(){
			$(".mask").hide();
		});
	};
});
