var search = location.search.substr(1).split("=");
console.log(location.search)
var pid = JSON.parse(localStorage.cart);
console.log(pid)
$.ajax({
	type:"get",
	url:"json/放大镜到购物车.json",
	async:true,
	success:function(res){
		var dataArr = res.data;
		var str='';
		var x = 0;
		$.each(pid, function(pidindex,pidele) {
			$.each(dataArr, function(dataindex,dataele) {
					if(pidele.pid==dataele.pid){
						console.log(dataele);
						x++;
						console.log(x)
							str+=	'<div class="shangpin" pid="'+dataele.pid+'">'
									+'<div class="check">'
						             +' <input type="checkbox" class="hobbys'+x+' hobbys" />'				
									+'</div>'
									+'<div class="shangpin_img">'
										+'<img src="'+dataele.imgsrc+'" />'
									+'</div>'
									+'<div class="tao">'
										+'<p class="taoyi">'+dataele.jianjie+'</p>'
										+'<p class="taoer">'+dataele.tao+'</p>'
									+'</div>'
									+'<div class="onejian_money">'+dataele.price+'</div>'
									+'<div class="tiao_num">'
										+'<span>-</span>'
										+'<span id="tiao_num_small">'+pid[0].num+'</span>'
										+'<span>+</span>'
									+'</div>'
									+'<div class="small_sum_money">'
										+'<p class="small_sum_money_num">￥'+dataele.price*pid[0].num+'</p>'
										+'<p class="baoshui">商品已包税</p>'
									+'</div>'
									+'<div id="btn" class="del">'
										+'删除'
									+'</div>'
									+'</div>'
							
					
					}	
			});
		});
		$(".shangpin_wrap").html(str);
		
		$(".hobbys").change(function(){
			addPrice();
		})
		//	删除一整行数据
		$(".del").click(function(){

			var shoppid = $(this).parent().attr("pid");
			$(this).parent().remove();
			var pids = JSON.parse(localStorage.cart);
			$.each(pids, function(pindexs,peles) {
				if(shoppid==peles.pid){
					pids.splice(pindexs,1);
					localStorage.cart = JSON.stringify(pids);
					addPrice();
				}
			});
		})
//		总价
		function addPrice(){
			var pfalg = true;
			var allPrice = 0;
			
			$.ajax({
				type:"get",
				url:"json/放大镜到购物车.json",
				async:false,
				success:function(res){
					var dataArr = res.data;
					var y=0;
					$.each(pid, function(pidindex,pidele) {
						$.each(dataArr, function(dataindex,dataele) {

								if(pidele.pid==dataele.pid){
									pfalg = false;
									y++;
//										if($(".hobbys").checked==true){
										var ss = document.getElementsByClassName("hobbys"+y+"")[0];
//										console.log(ss.checked);
										if(ss.checked==true){
											allPrice += dataele.price*pid[0].num;
										}
											
//										}
								}

						});
					});
				}
			})
			$(".fen").html("￥"+allPrice);
		}
		addPrice();
		
	}
});
$(".goon_buy").click(function(){
	location.href="详情页.html"
})
