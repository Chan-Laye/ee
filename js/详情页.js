$(function(){
//meanu	菜单移入移出
	$(".all_fenlei_back").mouseenter(function(){
		$("#meanu").css("display","block")
	}).mouseleave(function(){
		$("#meanu").css("display","none")
	})
	
//countdown 倒计时
//	数据渲染
	$.ajax({
			url:"json/详情页到放大镜.json",
			type:"get",
			success:function(res){
				console.log(res);
				$(".dazhe_left").click(function(){
					var ind = $(".dazhe_left").index(this);
//					console.log(ind)
					location.href = "放大镜.html?pid="+res.data[ind].pid;
				})
	
			}
		})
})
