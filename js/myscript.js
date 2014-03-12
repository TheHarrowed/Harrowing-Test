var userName;
var curExp = 0;
var expNeeded=100;
var gold = 0;
var str = 5;
var curHP, maxHP = 10;
var mobCurHP = 20;
var mobMaxHP = 20;
var curLevel = 1;




function onPageLoad(){
	userName = prompt("Enter your name");
	document.getElementById("userName").innerHTML=userName;
	document.getElementById("userName").style.fontWeight="bold";
}

function submitPress(){
	
	var whichAction = (document.getElementById("actionSelect").selectedIndex);
	if(whichAction === 0){
		alert("Fight!!");
	
		document.getElementById('battleWindow').style.visibility = 'visible';
	
		 x = document.getElementById("mobSelect").selectedIndex;
		 y = document.getElementById("mobSelect").options;
	
		document.getElementById("playerName").innerHTML= userName;
		document.getElementById("mobName").innerHTML= y[x].text;
		document.getElementById("mobHP").style.width= getPercent(mobCurHP, mobMaxHP) + "%";
	}else if(whichAction === 5){
		document.getElementById('mapWindow').style.visibility = 'visible';
	}
}

function playerAttack(){
	mobCurHP=mobCurHP-5;
	document.getElementById("mobHP").style.width= getPercent(mobCurHP, mobMaxHP) + "%";
	if (mobCurHP <= 0){
		alert("You win!")
		gold=gold+5;	
		document.getElementById("goldCount").innerHTML= "Gold: " + gold;
		curExp=curExp+10;
		document.getElementById("exp").innerHTML="Experience: " + curExp;
		document.getElementById("progress-bar").style.width = getPercent(curExp, expNeeded) + "%";
		mobCurHP=20;
		document.getElementById('battleWindow').style.visibility = 'hidden';
		var para=document.createElement("p");
		var node=document.createTextNode("You have BLASTED the: " + y[x].text + " and earned 5 gold.");
		para.appendChild(node);
		var element=document.getElementById("chatWindow");
		element.appendChild(para);
	}
	if (curExp>=expNeeded){
		var expRemain = expNeeded - curExp;
		curLevel++;
		document.getElementById("playerLevel").innerHTML = "Level: " + curLevel;
		curExp=expRemain;
		document.getElementById("exp").innerHTML="Experience: " + curExp;
		expNeeded=expNeeded*1.5;	
		document.getElementById("progress-bar").style.width = getPercent(curExp, expNeeded) + "%";
		str+=2;
		document.getElementById("playerStr").innerHTML = "Strength: " + str;
	}
}

function getPercent(cur, max){
	var mid = cur*100;
	var ans = mid/max;
	return ans;		
}