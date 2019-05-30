$(".register").click(function(){
	location.href="注册.html"
})
//cookie储存
var btn=document.getElementsByClassName("enroll_deng")[0];
			btn.onclick=function(){
				var locuser=localStorage.user;
				locuserparse=JSON.parse(locuser)
				console.log(locuserparse);
				var phone=document.getElementsByClassName("phone")[0].value;
				var passwor=document.getElementsByClassName("password")[0].value;
				var yanzheng=document.getElementsByClassName("yanzheng")[0].value;
				
				var rember=document.getElementById("rember");
				var nowdate=new Date();
				nowdate.setDate(15);
				if(locuserparse[0].user==phone&&locuserparse[0].pass){
					alert("提示：登陆成功")
					location.href="详情页.html";
					
				}else{
					alert("提示：商品无法加入购物车！")
//					location.href="详情页.html";
				}
				//location.href="详情页.html";
			}
			//判断cookie中是否有用户名密码  
//			var cookieUser=cookieObj.get("phone");
//			var cookiePass=cookieObj.get("passwor");
//			if(cookieUser&&cookiePass){
//				alert("以免登录");
//				location.href="详情页.html";
//				
//			}