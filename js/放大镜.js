$(function(){
	$(".all_fenlei_back").mouseenter(function(){
		$("#meanu").css("display","block")
	}).mouseleave(function(){
		$("#meanu").css("display","none")
	})
	$("#meanu li").mouseenter(function(){
//		var index=$(this).index();
		$(this).addClass("active").siblings().removeClass("active")
//		$("#meanu li").eq(index).css("background-color","white").siblings().css("background-color","#fa3778")
	})
//	.mouseleave(function(){
//		$("#meanu li").css("background","white")
//	})
})
//倒计时
var countdown=document.getElementsByClassName("countdown")[0];
function kill(){
			var now=new Date();//系统时间
			
			var killTime=new Date(2019,4,26);
//			秒数差
			var diff=parseInt((killTime.getTime()-now.getTime())/1000);
//			秒
			var second=diff%60;
//			分钟
			var minutes=parseInt(diff/60%60);
//			小时
			var hours=parseInt(diff/60%60);
//			天
			var days=parseInt(diff/60/60%24);
			var daysEle=days<10 ? "0"+days : days ;
			var hoursEle=hours<10 ? "0"+hours : hours ;
			var minuteEle=minutes<10 ? "0"+minutes : minutes;
			var secondEle=second<10 ? "0"+second : second;	
			countdown.innerHTML=daysEle+"天"+hoursEle+"时"+minuteEle+"分"+secondEle+"秒";
		}
		setInterval(kill,1000)
//li添加active样式
$(".mycart_ul li").click(function(){
	$(this).addClass("active").siblings().removeClass("active")
	var index=$(this).index();
	console.log(index)
	if (index==0) {
		window.scrollTo(1000,700)
	}else if (index==1) {
		window.scrollTo(1500,1500)
	}else if (index==2) {
		window.scrollTo(6500,7900)
	}
})

//
//鼠标移入移出 让大盒子遮罩显示  和隐藏
	$(".magnifier_left").mouseenter(function(){
		$(".magnifier_big").show();
		$(".mask").show();
	}).mouseleave(function(){
		$(".magnifier_big").hide();
		$(".mask").hide();
	})
	//给小盒子绑定鼠标移动事件
	$(".magnifier_left").mousemove(function(e){
		var x=e.pageX-$(".magnifier_left").offset().left-$(".mask").width()/2;
		var y=e.pageY-$(".magnifier_left").offset().top-$(".mask").height()/2;
		//限制
		x<0 ? x=0 : x;
		y<0 ? y=0 : y;
		x>$(".magnifier_left").width()-$(".mask").width() ? x=$(".magnifier_left").width()-$(".mask").width() :x;
		y>$(".magnifier_left").height()-$(".mask").height()? y=$(".magnifier_left").height()-$(".mask").height():y;
		$(".mask").css({
			left:x+"px",
			top:y+"px"
		})
		//算出比例
		var bilix=$(".magnifier_big img").width()/$(".magnifier_left").width();
		var biliy=$(".magnifier_big img").height()/$(".magnifier_left").height();
		$(".magnifier_big").scrollLeft(bilix*x);
		$(".magnifier_big").scrollTop(biliy*y);
	})
//数据渲染
var search = location.search.substr(1).split("=");
console.log(location.search)
$.ajax({
	url:"json/详情页到放大镜.json",
			type:"get",
			success:function(res){
//				console.log(res);
				var Arr=res.data;
//				console.log(Arr[0].pid)
				$.each(Arr, function(index,ele) {
//					console.log(Arr[index].pid)
					if (ele.pid==search[1]) {
						console.log(ele)
					
					$(".magnifier_left").html('<img src="'+ele.imgsrc+'"/>'
											+'<div class="mask"></div>'
											)
					$(".magnifier_big").html('<img src="'+ele.imgsrc+'"/>')
					$(".small_img").html('<img src="'+ele.imgsrc+'"/>'
										+'<img src="'+ele.sma2+'" />'
										+'<img src="'+ele.sma3+'" />'
									)
					}
				});
				
				//放大镜 
				//点击切换图片
				var lis=document.querySelectorAll(".small_img img");
				var small=document.querySelector(".magnifier_left img")
				var big=document.querySelector(".magnifier_big img")
				for (var i=0;i<lis.length;i++) {
					lis[i].index=i;
					lis[i].onclick=function(){
						small.src=lis[this.index].src
						big.src=lis[this.index].src
				//		console.log(lis[this.index].src)
					}
				}
			}
	
})
$(".lu").click(function(){
	location.href="登录.html"
})
$(".dengluu").click(function(){
	location.href="注册.html"
})
//点击加减  数量变化
	var numbx=document.getElementsByClassName("numbx")[0];
	var numb=document.getElementsByClassName("numb")[0];
	var numb_shu=document.getElementsByClassName("numb_shu")[0];
	console.log(numb_shu)
	var nn = 1;
	numbx.onclick=function(){	
		console.log(nn)
		nn--;
//		console.log(numb_shux.innerHTML)
		if (nn<=1) {
		numb_shu.innerHTML=1
		nn = 1;
		}else{
			numb_shu.innerHTML=nn;
			console.log(nn-1)
		}
	}
	
	numb.onclick=function(){
		
		nn++;
		numb_shu.innerHTML=nn;
		console.log(numb_shu.innerHTML)
	}
	
//点击添加到购物车页面
//$(".now_gou").click(function(){
	$.ajax({
		type:"get",
		url:"json/放大镜到购物车.json",
		async:true,
		success:function(res){
//			console.log(res)
//			console.log(res)
//			location.href="购物车.html?pid="+res.data.pid
			var pid = location.search.substr(1).split("=");
			$.each(res.data, function(index,ele) {
				if(ele.pid==pid[1]){
					$(".now_gou").click(function(){
						var locuser=localStorage.user;
						if (locuser) {
							var locuserparse=JSON.parse(locuser)
							console.log(locuser);
							if (locuserparse[0].user&&locuserparse[0].pass) {
				     		
								var arr = localStorage.cart;
								if(!arr){
									localStorage.cart = "[]";
								}
								arr = JSON.parse(localStorage.cart);
								var obj = {
									"pid":pid[1],
									"num":Number(numb_shu.innerHTML)
								}
								var cartfalg = true;
								if(arr.length==0){
									console.log(arr.length)
									arr.push(obj);
									localStorage.cart = JSON.stringify(arr);
									location.href="购物车.html"
								}else{
									$.each(arr, function(arrindex,arrele) {
										if(arrele.pid==pid[1]){
											arrele.num = Number(arrele.num)+Number(numb_shu.innerHTML);
											localStorage.cart = JSON.stringify(arr);
											cartfalg = false;
											location.href="购物车.html"
										}
									});
									if(cartfalg){
										arr.push(obj);
										console.log(arr);
										localStorage.cart = JSON.stringify(arr);
										location.href="购物车.html"
									}
								}
							}	
						} else{
							alert("请注册！")
							location.href="注册.html"
						}
						
						
					
					})
				}
			});
			
		}
})