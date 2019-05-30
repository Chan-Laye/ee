//轮播图
var imgs=document.querySelectorAll(".Rotation_chart_img img");
var lis=document.querySelectorAll(".Rotation_chart_dian li")
var index=0;
var timer=null;
timer=setInterval(next,2000);
function next(){
	//		所有图片隐藏
		for (var i=0;i<imgs.length;i++) {
			lis[i].index=i;
			imgs[i].style.display="none"
			lis[i].style.background="#999999"
		}
//		console.log(index)
	//		当前下标图片出现
		imgs[index].style.display="block";
		lis[index].style.background="#ff89a5";
		if (index==5) {
			index=0;
		} else{
			index++;//代表当前图片下标
		}
		
}
for (var i=0;i<imgs.length;i++) {
			lis[i].index=i;
			imgs[i].style.display="none"
			lis[i].style.background="#999999"
			lis[i].onmouseenter=function(){
				clearInterval(timer);
				for (var k=0;k<lis.length;k++) {
					imgs[k].style.display="none"
					lis[k].style.background="#999999"
				}
				imgs[this.index].style.display="block";
				lis[this.index].style.background="#ff89a5";
				index=this.index;
			}
			lis[i].onmouseleave=function(){
				timer=setInterval(next,2000);
			}
}
//滚动事件
var topp=document.getElementsByClassName("right_fix_top")[0];
var foure=document.getElementsByClassName("yanse");
var foo=document.getElementsByClassName("four_a")[0];
//回到顶部
topp.onclick=function(){
	scrollTo(0,0)
}
//点击跳转
//for(var h=0;h<foure.length;h++){
//	foure[h].index=h;
//	console.log(foure[h].index)
//	foure[h].onclick=function(){
//		
//		if(this.index==0){
//			window.scrollTo(300,810);
//			baise();
//			foure[this.index].style.background="#ff6584"
//			console.log(this.index)
//		}else if(this.index==1){
//			window.scrollTo(300,5500);
//			baise();
//			foure[this.index].style.background="#ff6584";
//			console.log(this.index);
//		}else if(this.index==2){
//			window.scrollTo(300,6000)
//			baise();
//			foure[this.index].style.background="#ff6584";
//			console.log(this.index);
//		}else if(this.index==3){
//			window.scrollTo(300,6500)
//			baise();
//			foure[this.index].style.background="#ff6584";
//			console.log(this.index);
//		}
//	}
//}
window.onscroll=function(){
var top=document.documentElement.scrollTop||document.body.scrollTop;
foo.style.display="none";
	if (top<20) {
		topp.style.display="none"
	}else {
		topp.style.display="block"
	}
	if(top>800&&top<5500) {
		baise();
		foure[0].style.background="#ff6584"
	}else if (top>=5500&&top<6000){	
		baise();
		foure[1].style.background="#ff6584"
	}else if (top>=6000&&top<6500) {
		baise();
		foure[2].style.background="#ff6584"
	}else if (top>=6500) {
		baise();
		foure[3].style.background="#ff6584"
	}
	
	//点击跳转
for(var h=0;h<foure.length;h++){
	foure[h].index=h;
	console.log(foure[h].index)
	foure[h].onclick=function(){
		
		if(this.index==0){
			window.scrollTo(300,810);
			baise();
			foure[this.index].style.background="#ff6584"
			console.log(this.index)
		}else if(this.index==1){
			window.scrollTo(300,5500);
			baise();
			foure[this.index].style.background="#ff6584";
			console.log(this.index);
		}else if(this.index==2){
			window.scrollTo(300,6000)
			baise();
			foure[this.index].style.background="#ff6584";
			console.log(this.index);
		}else if(this.index==3){
			window.scrollTo(300,6500)
			baise();
			foure[this.index].style.background="#ff6584";
			console.log(this.index);
		}
	}
}
}
function baise(){
	foo.style.display="block";
			for(var i=0;i<foure.length;i++){
				foure[i].style.background="white"
			}
}
var close=document.getElementsByClassName("foot_close")[0];
	close.onclick=function(){
		var closed=document.getElementsByClassName("foot_touming")[0];
		closed.style.display="none"
	}
