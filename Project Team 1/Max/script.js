
// change the background color

var backgr = "black";
var articletxt = "white";

document.getElementById("changeclr").onclick = function() {new_background_color()};
function new_background_color() {
	var x = Math.floor(Math.random() * 256);
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	var BgColor = "rgb(" + x + "," + y + "," + z + ")";
 		console.log(BgColor);

	document.body.style.background = BgColor;
	}


// me.salary = 

//document.getElementById("oldclr").onclick = 



// --------------------------------------------
// change the background color back to white
var oldClr = document.querySelector("#oldClr");
oldClr.addEventListener("click", function(){
document.body.style.background = "white";
});   
// -------------------------------------
// moving button


// --------------------------------------
// function to open the Side-Navbar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// var nav = document.getElementsByClassName("Navbar");
// nav.style.display = "none";

// ----------------------------------------
// change to navbar 1
var chngNavbar1 = document.querySelector("#chngNavbar1");
chngNavbar1.addEventListener("click", function(){
document.querySelectorAll(".Navbar")[0].style.display ="none";
document.querySelectorAll(".Navbar")[1].style.display ="none"; 
document.querySelectorAll(".topnav")[0].style.display ="block";
document.querySelectorAll(".topnav")[1].style.display ="block";
closeNav()

});

// ----------------------------------------
// change to navbar 2
var chngNavbar2 = document.querySelector("#chngNavbar2");
chngNavbar2.addEventListener("click", function(){
document.querySelectorAll(".Navbar")[0].style.display ="none";
document.querySelectorAll(".Navbar")[1].style.display ="none"; 
document.querySelectorAll(".topnav")[0].style.display ="none";
document.querySelectorAll(".topnav")[1].style.display ="none";
openNav()

});



// ----------------------------------------
// change to navbar 3
var chngNavbar3 = document.querySelector("#chngNavbar3");
chngNavbar3.addEventListener("click", function(){
document.querySelectorAll(".Navbar")[0].style.display ="flex";
document.querySelectorAll(".Navbar")[1].style.display ="flex"; 
document.querySelectorAll(".topnav")[0].style.display ="none";
document.querySelectorAll(".topnav")[1].style.display ="none";
closeNav()

});
;




