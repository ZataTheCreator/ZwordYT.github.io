// JavaScript Document

//Om det är blås tur
if (turn = "Blue") {
    document.getElementById("btn1").style.backgroundColor = "blue";
	document.getElementById("btn1").innerHTML = "B";
	
}

//Om det är röds tur
if (turn = "Red") {
    document.getElementById("btn1").style.backgroundColor = "red";
	document.getElementById("btn1").innerHTML = "R";
}

//Stänger av knappen så den inte kan tryckas igen
document.getElementById("btn1").disabled = true;