function ajax(type,url,data,async,fn){
	var xhr = null;
	try{
		xhr = new XMLHttpRequest();
	}catch{
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if(type == "get"&&data!=""){
		url += "?"+data;
	}
	xhr.open(type,url,async);
	if(type == "post"){
		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
		xhr.send(data)
	}else{
		xhr.send();
	}
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4&&xhr.status == 200){
			fn(xhr.responseText);	
		}
	}
}
