function runBtnRun(){
	document.getElementById("randomPos").style.top=Math.floor(Math.random()*200)+"px";
	document.getElementById("randomPos").style.left=Math.floor(Math.random()*200)+"px";
}

document.getElementById("randomPos").onmouseover = runBtnRun;	