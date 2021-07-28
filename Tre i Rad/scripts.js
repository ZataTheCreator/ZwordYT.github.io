//Variabel för vems tur det är
//1=blå, 2=röd
var turn = "b";

//Variabel för hur många drag som gjorts
var turnnumber = 0;

//Variabler för knapparnas stadier
var btn1state
var btn2state
var btn3state
var btn4state
var btn5state
var btn6state
var btn7state
var btn8state
var btn9state

//Funktion som körs varje gång nån gör ett drag
function clickFunc(x) {
	
	//När blå gör ett drag ändras knappen till blå och knappens stadie sparas
	if (turn === "b") {
		document.getElementById("btn" + x).style.backgroundColor = "blue";
		document.getElementById("btn" + x).innerHTML = "B";
		if (x === 1) { btn1state = "b" }
		else if (x === 2) { btn2state = "b" }
		else if (x === 3) { btn3state = "b" }
		else if (x === 4) { btn4state = "b" }
		else if (x === 5) { btn5state = "b" }
		else if (x === 6) { btn6state = "b" }
		else if (x === 7) { btn7state = "b" }
		else if (x === 8) { btn8state = "b" }
		else if (x === 9) { btn9state = "b" }
	}

	//När röd gör ett drag ändras knappen till röd och knappens stadie sparas
	else if (turn === "r") {
		document.getElementById("btn" + x).style.backgroundColor = "red";
		document.getElementById("btn" + x).innerHTML = "R";
		if (x === 1) { btn1state = "r" }
		else if (x === 2) { btn2state = "r" }
		else if (x === 3) { btn3state = "r" }
		else if (x === 4) { btn4state = "r" }
		else if (x === 5) { btn5state = "r" }
		else if (x === 6) { btn6state = "r" }
		else if (x === 7) { btn7state = "r" }
		else if (x === 8) { btn8state = "r" }
		else if (x === 9) { btn9state = "r" }
	}

	//Stänger av knappen så den inte kan tryckas igen
	document.getElementById("btn" + x).disabled = true;	
	
	//Håller koll på antalet drag
	turnnumber = turnnumber + 1;
	
	//Kollar om någon har vunnit
	//Eftersom ingen kan vinna innan det femte draget så körs inte koden för än turnnumber > 4
	//Om ingen har vunnis efter det nionde draget så blir matchen oavgjord
	if (turnnumber > 4) {
		
		if (btn1state === turn && btn2state === turn &&  btn3state === turn) {
			disableFunc()
			if (turn === "b") { alert("Blå vinner!"); }
			else if (turn === "r") { alert("Röd vinner!"); }
			}
		else if (btn4state === turn && btn5state === turn &&  btn6state === turn) {
			disableFunc()
			if (turn === "b") { alert("Blå vinner!"); }
			else if (turn === "r") { alert("Röd vinner!"); }
			}
		else if (btn7state === turn && btn8state === turn &&  btn9state === turn) {
			disableFunc()
			if (turn === "b") { alert("Blå vinner!"); }
			else if (turn === "r") { alert("Röd vinner!"); }
			}
		else if (btn1state === turn && btn4state === turn &&  btn7state === turn) {
			disableFunc()
			if (turn === "b") { alert("Blå vinner!"); }
			else if (turn === "r") { alert("Röd vinner!"); }
			}
		else if (btn2state === turn && btn5state === turn &&  btn8state === turn) {
			disableFunc()
			if (turn === "b") { alert("Blå vinner!"); }
			else if (turn === "r") { alert("Röd vinner!"); }
			}
		else if (btn3state === turn && btn6state === turn &&  btn9state === turn) {
			disableFunc()
			if (turn === "b") { alert("Blå vinner!"); }
			else if (turn === "r") { alert("Röd vinner!"); }
			}
		else if (btn1state === turn && btn5state === turn &&  btn9state === turn) {
			disableFunc()
			if (turn === "b") { alert("Blå vinner!"); }
			else if (turn === "r") { alert("Röd vinner!"); }
			}
		else if (btn3state === turn && btn5state === turn &&  btn7state === turn) {
			disableFunc()
			if (turn === "b") { alert("Blå vinner!"); }
			else if (turn === "r") { alert("Röd vinner!"); }
			}
		else if (turnnumber === 9) {
			alert("Oavgjort!");
			document.getElementById("restartbtn").style.borderColor = "yellowgreen";
		}
	}
	
	//Ändrar så det blir röds tur
	if (turn === "b") {
		turn = "r";
		document.getElementById("turn").innerHTML = "Det är Röds tur";
	}

	//Ändrar så det blir blås tur
	else {
		turn = "b";
		document.getElementById("turn").innerHTML = "Det är Blås tur";
	}
}

//Funktion som stänger av alla knappar när matchen är klar
function disableFunc() {
	document.getElementById("btn1").disabled = true;
	document.getElementById("btn2").disabled = true;
	document.getElementById("btn3").disabled = true;
	document.getElementById("btn4").disabled = true;
	document.getElementById("btn5").disabled = true;
	document.getElementById("btn6").disabled = true;
	document.getElementById("btn7").disabled = true;
	document.getElementById("btn8").disabled = true;
	document.getElementById("btn9").disabled = true;
	document.getElementById("restartbtn").style.borderColor = "yellowgreen";
}

//Funktion som återställer spelet
function resetFunc() {
	
	//Sätter på alla knappar
	document.getElementById("btn1").disabled = false;
	document.getElementById("btn2").disabled = false;
	document.getElementById("btn3").disabled = false;
	document.getElementById("btn4").disabled = false;
	document.getElementById("btn5").disabled = false;
	document.getElementById("btn6").disabled = false;
	document.getElementById("btn7").disabled = false;
	document.getElementById("btn8").disabled = false;
	document.getElementById("btn9").disabled = false;
	
	//Ändrar tillbaka färgen och texten i knapparna
	document.getElementById("btn1").style.backgroundColor = "white";
	document.getElementById("btn1").innerHTML = "_";
	document.getElementById("btn2").style.backgroundColor = "white";
	document.getElementById("btn2").innerHTML = "_";
	document.getElementById("btn3").style.backgroundColor = "white";
	document.getElementById("btn3").innerHTML = "_";
	document.getElementById("btn4").style.backgroundColor = "white";
	document.getElementById("btn4").innerHTML = "_";
	document.getElementById("btn5").style.backgroundColor = "white";
	document.getElementById("btn5").innerHTML = "_";
	document.getElementById("btn6").style.backgroundColor = "white";
	document.getElementById("btn6").innerHTML = "_";
	document.getElementById("btn7").style.backgroundColor = "white";
	document.getElementById("btn7").innerHTML = "_";
	document.getElementById("btn8").style.backgroundColor = "white";
	document.getElementById("btn8").innerHTML = "_";
	document.getElementById("btn9").style.backgroundColor = "white";
	document.getElementById("btn9").innerHTML = "_";
	document.getElementById("restartbtn").style.borderColor = "lightgray";
	
	
	//Säger till javascriptets minne att knapparna inte har något stadie och att noll drag har gjorts
	btn1state = "o";
	btn2state = "o";
	btn3state = "o";
	btn4state = "o";
	btn5state = "o";
	btn6state = "o";
	btn7state = "o";
	btn8state = "o";
	btn9state = "o";
	turnnumber = 0;
	
	//Återställer spelet till blås tur
	document.getElementById("turn").innerHTML = "Blå börjar";
	turn = "b";
}