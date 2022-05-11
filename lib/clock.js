var now = new Date();
window.setInterval(function(){
	now.setSeconds(now.getSeconds()+1);
	var clock = document.getElementById("clock");
	var h,m;
	h=now.getHours();
	m=now.getMinutes();
	var dd = "<span class=\"blink\">:</span>";
	clock.innerHTML = (h<10?'0'+h:h)+dd+(m<10?'0'+m:m);
}, 1000);