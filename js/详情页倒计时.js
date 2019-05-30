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
			var hours=parseInt(diff/60/60);
			var hoursEle=hours<10 ? "0"+hours : hours ;
			var minuteEle=minutes<10 ? "0"+minutes : minutes;
			var secondEle=second<10 ? "0"+second : second;	
			countdown.innerHTML=hoursEle+":"+minuteEle+":"+secondEle;
		}
		setInterval(kill,1000)