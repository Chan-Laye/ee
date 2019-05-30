$(function(){
	$.ajax({
		type:"post",
		dataType: 'json',
		url:"http://www.sasa.com/brand-ajax_topfive_list.html",
		async:true,
		data:{},
		success:function(res){
			console.log(res)
			$(".skincare").append(
				'<div class="skincare_list">'					
				+'<div class="skincare_img"><img src="莎莎网图片/护肤排行榜1.jpg" /></div>'
				+'<div class="skincare_price">'
				+'<div class="skincare_tehui">'
				+'<span class="jinkou">国内保税仓 零扣关 包税</span>'
				+'<span class="neirong">'+res[0].data[0].brand_name+res[0].data[0].name+res[0].data[0].productSize+'</span>'
				+'</div>'
				+'<div class="skincare_pianyi">'
				+'<span class="skincare_dazhe">'
				+'￥13'
				+'</span>'
				+'<del class="skincare_yuanjia">'
				+'￥25'
				+'</del>'
				+'</div>'
				+'<div class="maidiao">已售</div>'
				+'</div>'
				+'</div>')
		}	
	})
	

//跳转详情页
	$(".fenlei div").click(function(){
		var pid=$(this).attr("pid");
		location.href="详情页.html";						
	})
})