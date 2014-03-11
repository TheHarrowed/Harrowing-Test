var userName = "HarroweD";
var pooName = "PoooooPe";
var curExp = 0;
var expNeeded;
var gold = 0;
var str = 5;
var curHP, maxHP = 10;




function onPageLoad(){
}

function submitPress(){
	alert("Fight!!");
	curExp+=5;
	
	var x = document.getElementById("mobSelect").selectedIndex;
	var y = document.getElementById("mobSelect").options;
	
	document.getElementById("playerName").innerHTML= userName;
	document.getElementById("mobName").innerHTML= y[x].text;

}