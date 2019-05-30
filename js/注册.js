$(".register").click(function(){
	location.href="登录.html"
})
function Check(ele,reg,tips){
	var eles=document.getElementsByClassName(ele)[0];
}
			var flag=true;
			//验证码
			var num=Math.floor(Math.random()*8889+1000);
			console.log(num)
			var array_num=document.getElementsByClassName("array_num")[0];
			array_num.innerHTML=num
			//注册点击时候存储cookie
			var reg=document.getElementsByClassName("enroll_deng")[0];
			reg.onclick=function(){
					Check("phone",/^1[3|5|7|8|9|4|6]\d{9}$/,"手机号");
					Check("password",/\w{6,12}/,"密码");
					Check("again",/\w{6,12}/,"密码");
					Check("yanzhengma",num,"学校");
					var userval=document.getElementsByClassName("phone")[0].value;//用户名
					var passval=document.getElementsByClassName("password")[0].value;
					var phoneval=document.getElementsByClassName("again")[0].value;
					var yanzhengmaval=document.getElementsByClassName("yanzheng")[0].value;
				if(userval&&passval&&phoneval&&yanzhengmaval){
//						var nowdate=new Date();
//						nowdate.setHours(13);
//						cookieObj.set({
//							name:"username",
//							value:userval,
//							expires:nowdate.toGMTString()
//						})
//						cookieObj.set({
//							name:"pass",
//							value:passval,
//							expires:nowdate.toGMTString()
//						})	
//						cookieObj.set({
//							name:"phone",
//							value:phoneval,
//							expires:nowdate.toGMTString()
//						})	
						var arr = localStorage.user
						if(!arr){
							localStorage.user = "[]"
						}
						arr =JSON.parse(localStorage.user)
						var Obj = {
							"user":userval,
							"pass":passval
						}
						arr.push(Obj)
						localStorage.user = JSON.stringify(arr)
						alert("注册成功，跳转登录页面...");
						location.href="登录.html"
				
				}else{
					alert("请填写必填项");
				}
				return false;//阻止默认行为
}
