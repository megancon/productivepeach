// FB tree code
var FB_tree = document.getElementById('fb_tree');
var FB_timer = document.getElementById('fb_tree_timer');
var fb_m_input = document.getElementById('fb_m');
var fb_h_input = document.getElementById('fb_h');
var fb_finalTime, fb_curr_hours, fb_curr_mins;
var fb_timeLeft = 0;
var fb_display_time = document.getElementById('fb_time_left');
FB_tree.onclick = 
	function () {
		FB_timer.style.display = "block";
	};

function FBhourValue(newValue)
{	fb_h_input.innerHTML=newValue;
}

function FBminuteValue(newValue)
{	fb_m_input.innerHTML=newValue;
}


function FBsubmitTime(){
	fb_finalTime= (3600000*fb_hours) + (60000*fb_minutes); 
  
}

document.getElementById("fb_submit").onclick =
		function(){

			if (fb_timeLeft == 0){
				fb_curr_hours = fb_h_input.innerHTML;
				fb_curr_minutes = fb_m_input.innerHTML;

 				fb_finalTime= 
 						(3600000*fb_curr_hours) + (60000*fb_curr_minutes);

 			FB_timer.style.display = "none";

 			var countDownTrgt = new Date().getTime() + fb_finalTime/* + user input time in milliseconds*/;
			var x = setInterval(function()
			{
				var now = new Date().getTime();
				fb_timeLeft = countDownTrgt - now;
				var hours = Math.floor((fb_timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				var minutes = Math.floor((fb_timeLeft % (1000 * 60 * 60)) / (1000 * 60));

				if ((hours != 0 && minutes != 0) || (hours != 0 && minutes == 0)) 
				{
					fb_display_time.innerHTML = hours + "h " + minutes + "m";
				}
				else if (hours == 0 && minutes != 0)
				{
					fb_display_time.innerHTML = minutes + "m";
				}
				if (fb_timeLeft < 0)
				{
					clearInterval(x);
					fb_display_time.innerHTML = "";
				}
			}, 1000);
		}

 	};




// Insta bush code
var IG_bush = document.getElementById('insta_bush');
var IG_timer = document.getElementById('ig_bush_timer');
var ig_m_input = document.getElementById('ig_m');
var ig_h_input = document.getElementById('ig_h');
var ig_finalTime, ig_curr_hours, ig_curr_mins;
var ig_timeLeft = 0;
var ig_display_time = document.getElementById('ig_time_left');
IG_bush.onclick = 
	function () {
		IG_timer.style.display = "block";
	};

function IGhourValue(newValue)
{	ig_h_input.innerHTML=newValue;
}

function IGminuteValue(newValue)
{	ig_m_input.innerHTML=newValue;
}


function IGsubmitTime(){
	ig_finalTime= (3600000*ig_hours) + (60000*ig_minutes); 
  
}

document.getElementById("ig_submit").onclick =
		function(){

			if (ig_timeLeft == 0){
				ig_curr_hours = ig_h_input.innerHTML;
				ig_curr_minutes = ig_m_input.innerHTML;

 				ig_finalTime= 
 						(3600000*ig_curr_hours) + (60000*ig_curr_minutes);

 			IG_timer.style.display = "none";

 			var countDownTrgt = new Date().getTime() +ig_finalTime/* + user input time in milliseconds*/;
			var x = setInterval(function()
			{
				var now = new Date().getTime();
				ig_timeLeft = countDownTrgt - now;
				var hours = Math.floor((ig_timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				var minutes = Math.floor((ig_timeLeft % (1000 * 60 * 60)) / (1000 * 60));

				if ((hours != 0 && minutes != 0) || (hours != 0 && minutes == 0)) 
				{
					ig_display_time.innerHTML = hours + "h " + minutes + "m";
				}
				else if (hours == 0 && minutes != 0)
				{
					ig_display_time.innerHTML = minutes + "m";
				}
				if (ig_timeLeft < 0)
				{
					clearInterval(x);
					ig_display_time.innerHTML = "";
				}
			}, 1000);
		}

 	};

//settings modal box
var modal = document.getElementById('settings_content')
var btn = document.getElementById("settings_btn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function addFB(){
  	window.alert("Your Facebook tree has been added!");
  	FB_tree.style.display = "block";
  	// FB_tree.onclick =
  	// 	function() {
  	// 		document.getElementById("mins").style.visibility = "visible";
 		// 	document.getElementById("hours").style.visibility = "visible";
 		// 	document.getElementById("submit").style.visibility = "visible";
   //          document.getElementById("tree_time").style.paddingLeft = "50%";
  	// 	};
}

function addIG(){
	window.alert("Your Instagram tree has been added!");
	IG_bush.style.display = "block";
	// IG_bush.onclick = 
	// 	function (){
	// 		document.getElementById("mins").style.visibility = "visible";
 // 			document.getElementById("hours").style.visibility = "visible";
 // 			document.getElementById("submit").style.visibility = "visible";
 //            document.getElementById("tree_time").style.paddingLeft = "50%";
	// 	};
}

function addSC(){
  	window.alert("Your Scapchat tree has been added!");
}

function addLI(){
  	window.alert("Your LinkedIn tree has been added!");
}

function addT(){
  	window.alert("Your Twitter tree has been added!");
}

function removeFB(){
  	window.alert("Your Facebook tree has been removed!");
}

function removeSC(){
  window.alert("Your Scapchat tree has been removed!");
}

function removeT(){
  window.alert("Your Twitter tree has been removed!");
}

function removeIG(){
  window.alert("Your Instagram tree has been removed!");
}

function removeLI(){
  window.alert("Your Linkedin tree has been removed!");
}

//friends modal box
var modal2 = document.getElementById('friends_content')
var btn2 = document.getElementById("friends_btn");
var span2 = document.getElementsByClassName("close2")[0];


btn2.onclick = function() {
    modal2.style.display = "block";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal2.style.display = "none";
    }
}

function Submit(){
  window.alert("Your friend has been added!");
}

