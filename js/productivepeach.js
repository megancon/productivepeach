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
	FB_timer.style.display = "none";

			if (fb_timeLeft == 0){
				fb_curr_hours = fb_h_input.innerHTML;
				fb_curr_minutes = fb_m_input.innerHTML;

 				 fb_finalTime= 
 				 		(3600000*fb_curr_hours) + (60000*fb_curr_minutes);

 			var countDownTrgt = new Date().getTime() + fb_finalTime;
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
  
}

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

			if (ig_timeLeft == 0){
				ig_curr_hours = ig_h_input.innerHTML;
				ig_curr_mins = ig_m_input.innerHTML;

 				ig_finalTime= 
 						(3600000*ig_curr_hours) + (60000*ig_curr_mins);

 			IG_timer.style.display = "none";

 			var countDownTrgt = new Date().getTime() +ig_finalTime/* + user input time in milliseconds*/;
			var x = setInterval(function()
			{
				var now = new Date().getTime();
				ig_timeLeft = countDownTrgt - now;
				console.log("ig_timeLeft", ig_timeLeft);
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
  
}


// TWITTER tree code
var TW_tree = document.getElementById('tw_tree');
var TW_timer = document.getElementById('tw_tree_timer');
var tw_m_input = document.getElementById('tw_m');
var tw_h_input = document.getElementById('tw_h');
var tw_finalTime, tw_curr_hours, tw_curr_mins;
var tw_timeLeft = 0;
var tw_display_time = document.getElementById('tw_time_left');
TW_tree.onclick = 
	function () {
		TW_timer.style.display = "block";
	};

function TWhourValue(newValue)
{	tw_h_input.innerHTML=newValue;
}

function TWminuteValue(newValue)
{	tw_m_input.innerHTML=newValue;
}


function TWsubmitTime(){

		if (tw_timeLeft == 0){
			tw_curr_hours = tw_h_input.innerHTML;
			tw_curr_mins = tw_m_input.innerHTML;

 			tw_finalTime= 
 					(3600000*tw_curr_hours) + (60000*tw_curr_mins);

 			TW_timer.style.display = "none";

 			var countDownTrgt = new Date().getTime() + tw_finalTime/* + user input time in milliseconds*/;
			var x = setInterval(function()
			{
				var now = new Date().getTime();
				tw_timeLeft = countDownTrgt - now;
				var hours = Math.floor((tw_timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				var minutes = Math.floor((tw_timeLeft % (1000 * 60 * 60)) / (1000 * 60));

				if ((hours != 0 && minutes != 0) || (hours != 0 && minutes == 0)) 
				{
					tw_display_time.innerHTML = hours + "h " + minutes + "m";
				}
				else if (hours == 0 && minutes != 0)
				{
					tw_display_time.innerHTML = minutes + "m";
				}
				if (tw_timeLeft < 0)
				{
					clearInterval(x);
					tw_display_time.innerHTML = "";
				}
			}, 1000);
		}
  
}

// YOUTUBE plant code
var YT_plant = document.getElementById('yt_plant');
var YT_timer = document.getElementById('yt_plant_timer');
var yt_m_input = document.getElementById('yt_m');
var yt_h_input = document.getElementById('yt_h');
var yt_finalTime, yt_curr_hours, yt_curr_mins;
var yt_timeLeft = 0;
var yt_display_time = document.getElementById('yt_time_left');
YT_plant.onclick = 
	function () {
		YT_timer.style.display = "block";
	};

function YThourValue(newValue)
{	yt_h_input.innerHTML=newValue;
}

function YTminuteValue(newValue)
{	yt_m_input.innerHTML=newValue;
}


function YTsubmitTime(){

	if (yt_timeLeft == 0){
		yt_curr_hours = yt_h_input.innerHTML;
		yt_curr_mins = yt_m_input.innerHTML;

 		yt_finalTime= (3600000*yt_curr_hours) + (60000*yt_curr_mins);

 		YT_timer.style.display = "none";

 		var countDownTrgt = new Date().getTime() + yt_finalTime/* + user input time in milliseconds*/;
		var x = setInterval(function()
		{
			var now = new Date().getTime();
			yt_timeLeft = countDownTrgt - now;
			var hours = Math.floor((yt_timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((yt_timeLeft % (1000 * 60 * 60)) / (1000 * 60));

			if ((hours != 0 && minutes != 0) || (hours != 0 && minutes == 0)) 
			{
				yt_display_time.innerHTML = hours + "h " + minutes + "m";
			}
			else if (hours == 0 && minutes != 0)
			{
				yt_display_time.innerHTML = minutes + "m";
			}
			if (yt_timeLeft < 0)
			{
				clearInterval(x);
				yt_display_time.innerHTML = "";
			}
		}, 1000);
		}

 	}; 


// LINKEDIN tree code
var LI_plant = document.getElementById('li_plant');
var LI_timer = document.getElementById('li_plant_timer');
var li_m_input = document.getElementById('li_m');
var li_h_input = document.getElementById('li_h');
var li_finalTime, li_curr_hours, li_curr_mins;
var li_timeLeft = 0;
var li_display_time = document.getElementById('li_time_left');
LI_plant.onclick = 
	function () {
		LI_timer.style.display = "block";
	};

function LIhourValue(newValue)
{	li_h_input.innerHTML=newValue;
}

function LIminuteValue(newValue)
{	li_m_input.innerHTML=newValue;
}


function LIsubmitTime(){
	li_finalTime= (3600000*li_curr_hours) + (60000*li_curr_minutes); 
  
}

document.getElementById("li_submit").onclick =
		function(){

			if (li_timeLeft == 0){
				li_curr_hours = li_h_input.innerHTML;
				li_curr_mins = li_m_input.innerHTML;

 				li_finalTime= 
 						(3600000*li_curr_hours) + (60000*li_curr_mins);

 			LI_timer.style.display = "none";

 			var countDownTrgt = new Date().getTime() + li_finalTime/* + user input time in milliseconds*/;
			var x = setInterval(function()
			{
				var now = new Date().getTime();
				li_timeLeft = countDownTrgt - now;
				var hours = Math.floor((li_timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				var minutes = Math.floor((li_timeLeft % (1000 * 60 * 60)) / (1000 * 60));

				if ((hours != 0 && minutes != 0) || (hours != 0 && minutes == 0)) 
				{
					li_display_time.innerHTML = hours + "h " + minutes + "m";
				}
				else if (hours == 0 && minutes != 0)
				{
					li_display_time.innerHTML = minutes + "m";
				}
				if (li_timeLeft < 0)
				{
					clearInterval(x);
					li_display_time.innerHTML = "";
				}
			}, 1000);
		}

 	};



//plus sign modal box
var modal = document.getElementById('settings_content')
var btn = document.getElementById("settings_btn");
var span = document.getElementsByClassName("close")[0];
var instruction_prompt = document.getElementById("instruction_prompt");


btn.onclick = function() {
    modal.style.display = "block";
    instruction_prompt.style.display = "none";
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
  	window.alert("Your Facebook plant has been added!");
  	FB_tree.style.display = "block";
  	instruction_prompt.style.display = "block";
  	instruction_prompt.innerHTML = "Click on a plant to set a time limit!";
}

function addIG(){
	window.alert("Your Instagram plant has been added!");
	IG_bush.style.display = "block";
  	document.getElementById("instruction_prompt").innerHTML = "Click on a plant to set a time limit!";
}

function addLI(){
  	window.alert("Your LinkedIn plant has been added!");
  	LI_plant.style.display = "block";
  	document.getElementById("instruction_prompt").innerHTML = "Click on a plant to set a time limit!";
}

function addTW(){
  	window.alert("Your Youtube plant has been added!");
  	TW_tree.style.display = "block";
  	instruction_prompt.style.display = "block";
  	instruction_prompt.innerHTML = "Click on a plant to set a time limit!";
}

function addYT(){
  	window.alert("Your Youtube plant has been added!");
  	YT_plant.style.display = "block";
  	instruction_prompt.style.display = "block";
  	instruction_prompt.innerHTML = "Click on a plant to set a time limit!";
}

function removeFB(){
  	window.alert("Your Facebook plant has been removed!");
 	FB_tree.style.display = "none";
 	fb_display_time.style.display = "none";
}

function removeIG(){
	window.alert("Your Instagram plant has been removed!");
	IG_bush.style.display = "none";
 	ig_display_time.style.display = "none";
}

function removeTW(){
  	window.alert("Your Twitter plant has been removed!");
  	TW_tree.style.display = "none";
 	tw_display_time.style.display = "none";
}

function removeYT(){
  	window.alert("Your Youtube plant has been removed!");
  	YT_plant.style.display = "none";
 	yt_display_time.style.display = "none";
}

function removeLI(){
  	window.alert("Your Linkedin plant has been removed!");
  	LI_plant.style.display = "none";
 	li_display_time.style.display = "none";
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