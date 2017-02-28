
var hours, minutes, curr_hours, curr_minutes, finalTime;
var timeLeft = 0;

function hourValue(newValue)
{	document.getElementById("h").innerHTML=newValue;
	hours=newValue;
}

function minuteValue(newValue)
{	document.getElementById("m").innerHTML=newValue;
	minutes=newValue;
}


function submitTime(){
  finalTime= (3600000*hours) + (60000*minutes); 
  
}


document.getElementById("mins").style.visibility = "hidden";
document.getElementById("hours").style.visibility = "hidden";
document.getElementById("submit").style.visibility = "hidden";

document.getElementById("plants").onclick =
		function(){
 			document.getElementById("mins").style.visibility = "visible";
 			document.getElementById("hours").style.visibility = "visible";
 			document.getElementById("submit").style.visibility = "visible";
 		};




var hour_set, min_set;

document.getElementById("submit").onclick =
		function(){

			if (timeLeft == 0){


			curr_hours = document.getElementById("h").innerHTML;
			curr_minutes = document.getElementById("m").innerHTML;

 			finalTime= (3600000*curr_hours) + (60000*curr_minutes);

 			document.getElementById("mins").style.visibility = "hidden";
 			document.getElementById("hours").style.visibility = "hidden";
 			document.getElementById("submit").style.visibility = "hidden";


 			var countDownTrgt = new Date().getTime() + finalTime/* + user input time in milliseconds*/;
			var x = setInterval(function()
			{
				var now = new Date().getTime();
				timeLeft = countDownTrgt - now;
				var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

				if ((hours != 0 && minutes != 0) || (hours != 0 && minutes == 0)) 
				{
					document.getElementById("time").innerHTML = hours + "h " + minutes + "m";
				}
				else if (hours == 0 && minutes != 0)
				{
					document.getElementById("time").innerHTML = minutes + "m";
				}
				if (timeLeft < 0)
				{
					clearInterval(x);
					document.getElementById("time").innerHTML = "";
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
}

function addIG(){
  window.alert("Your Instagram tree has been added!");
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

