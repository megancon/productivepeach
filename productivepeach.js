var countDownTrgt = new Date().getTime() + 100000000/* + user input time in milliseconds*/;
var x = setInterval(function()
{
	var now = new Date().getTime();
	var timeLeft = countDownTrgt - now;
	var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

	if ((hours != 0 && minutes != 0) || (hours != 0 && minutes == 0)) 
	{
		document.getElementById("test_countdown").innerHTML = hours + "h " + minutes + "m";
	}
	else if (hours == 0 && minutes != 0)
	{
		document.getElementById("test_countdown").innerHTML = minutes + "m";
	}
  	if (timeLeft < 0)
  	{
	    clearInterval(x);
	    document.getElementById("test_countdown").innerHTML = "";
	}
}, 1000);


var hours, minutes, finalTime;

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