var userName = "HarroweD";
var curHP = 10;
var maxHP = 10;
var gold = 0;
var str = 5;
var exp = 0.0;
var expNeeded;
var playerLevel;

function pageLoad(){
	document.getElementById("userName").innerHTML=<b>"HarroweD"</b>;
	prompt("Fuck!");
	alert("Fuck!");
}

function submitAction(){
	prompt("You killed the Naked Negro!");
	exp+=.05;
	if(exp>=1.0){
		playerLevel++;
		exp=0;
	}
}

function getExp(){
	document.write(5);
	return exp;	
}