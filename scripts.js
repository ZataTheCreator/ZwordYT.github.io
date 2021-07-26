var frågetyptext
var kategoritext
var frågetyp
var kategori

//Array listor med alla frågor
const vadÄrIntimt = [
"Vad är regel nummer ett i ert förhållande?",
"Vart vill ni helst ha sex?",
"Var är det konstigaste stället ni haft sex?",
"Vad är RÖDS favorit sexposition?",
"Vad är BLÅS favorit sexposition?",
"Vad är RÖDS favoritsätt att kyssas?",
"Vad är BLÅS favoritsätt att kyssas?",
"Vad är RÖDS favoritställe att bli kysst på?",
"Vad är BLÅS favoritställe att bli kysst på?"
];

const vadÄrNöjen = [
"Vart skulle ni vilja resa?",
"Var skulle ni vilja äta middag?",
"Vad skulle ni vilja äta till middag?",
"Vilken film har ni sett flest gånger?",
"Vad är RÖDS drömresemål?",
"Vad är BLÅS drömresemål?",
"Vad är ett instrument RÖDS vill lära sig spela?",
"Vad är ett instrument BLÅS vill lära sig spela?",
"Vad gör RÖD lycklig?",
"Vad gör BLÅ lycklig?",
"Vad är RÖDS favorit objekt hemma?",
"Vad är BLÅS favorit objekt hemma?",
"Vad är RÖDS favoritbok?",
"Vad är BLÅS favoritbok?",
"Vad är RÖDS favoritfilm?",
"Vad är BLÅS favoritfilm?",
"Vad är RÖDS favoritmat?",
"Vad är BLÅS favoritmat?",
"Vad är RÖDS favoritfärg?",
"Vad är BLÅS favoritfärg?",
"Vad är RÖDS favorit musikgenre?",
"Vad är BLÅS favorit musikgenre?",
"Vem är RÖDS favorit artist/band?",
"Vem är BLÅS favorit artist/band?",
"Vad är RÖDS favoritlåt?",
"Vad är BLÅS favoritlåt?"
];

const vadÄrJobbHem = [
"Var ligger ert drömhus?",
"Vad är RÖDS drömjobb?",
"Vad är BLÅS drömjobb?",
"Vilken vardagssyssla hatar RÖD mest?",
"Vilken vardagssyssla hatar BLÅ mest?",
"Vad är RÖDS bästa köp till hemmet?",
"Vad är BLÅS bästa köp till hemmet?",
"Vilket jobb hade RÖD varit sämst på?",
"Vilket jobb hade BLÅ varit sämst på?",
"Var i hemmet spenderar RÖD mest tid?",
"Var i hemmet spenderar BLÅ mest tid?"
];

const vadÄrDåtidFramtid = [
"Vad är det bästa ni har gjort tillsammans?",
"Vad är något RÖD skulle vilja återuppleva från sin barndom?",
"Vad är något BLÅ skulle vilja återuppleva från sin barndom?",
"Hur gammal skulle RÖDS vilja bli?",
"Hur gammal skulle BLÅS vilja bli?",
"Vem var RÖDS bästa barndomsvän?",
"Vem var BLÅS bästa barndomsvän?"
];

const vadÄrPersonlighet = [
"Vad gör att RÖD ogillar en person?",
"Vad gör att BLÅ ogillar en person?",
"Vad är RÖD mest stolt över gällande sig själv?",
"Vad är BLÅ mest stolt över gällande sig själv?",
"Vad är ett personlighetsdrag som beskriver RÖD bäst?",
"Vad är ett personlighetsdrag som beskriver BLÅ bäst?",
"Vad är RÖDS livsmotto?",
"Vad är BLÅS livsmotto?",
"Vad ger RÖDS liv mening?",
"Vad ger BLÅS liv mening?",
"Vilken är RÖDS favorit egenskap hos andra?",
"Vilken är BLÅS favorit egenskap hos andra?",
"Vilken är RÖDS favorit egenskap hos sig själv?",
"Vilken är BLÅS favorit egenskap hos sig själv?",
"Vad är RÖDS största atletiska svaghet?",
"Vad är BLÅS största atletiska svaghet?"

];

const vadÄrBlandat = [
"I vilken påhittad värld skulle RÖD vilja leva i?",
"I vilken påhittad värld skulle BLÅ vilja leva i?",
"Vad lugnar ner RÖD?",
"Vad lugnar ner BLÅ?",
"Vad är RÖDS favorit bilmärke?",
"Vad är BLÅS favorit bilmärke?"
];

//Kombinerar alla katigorier i Vad Är? till en Array
const allaVadÄr = [...vadÄrIntimt, ...vadÄrNöjen, ...vadÄrJobbHem, ...vadÄrDåtidFramtid, ...vadÄrPersonlighet, ...vadÄrBlandat]


const vemÄrIntimt = [
"Vem vill ha sex mest?",
"Vem är snyggast?",
"Vem är bäst i sängen?",
"Vem ger bäst oralt?",
"Vem är mest kinky?",
"Vem vill kyssas mest?",
"Vem kysser bäst?",
"Vem vill kramas mest?",
"Vem kramas bäst?",
"Vem sa ''Jag älskar dig'' först ?",
"Vem tänker mest på sex?",
"Vem är snyggast naken?",
"Vem är mest troligt att kolla på porr när de vaknar?",
"Vem är mest troligt att vilja ha en trekant?",
"Vem blir tröttast under sex?",
"Vem har den konstigaste kinken?"
];

const vemÄrNöjen = [
"Vem är mest musikalisk?",
"Vem kollar på mest film?",
"Vem har bäst musiksmak?",
"Vem läser mest böcker?",
"Vem spelar mest datorspel?",
"Vem kollar mest på serier"?,
"Vem är mest sportig?",
"Vem har störst chans att lyssna på klassisk musik?",
"Vem går till museum oftast?",
"Vem är mest troligt att gråta till en ledsen film?",
"Vem är mest troligt att inte äga en dator?",
"Vem använder internet mest?",
"Vem skulle inte överleva utan internet?",
"Vem kan rita bäst?",
"Vem gillar att resa mest?",
"Vem är mest troligt att resa runt världen?"
];

const vemÄrJobbHem = [
"Vem föredrar att resa?",
"Vem stökar ner mest?",
"Vem gör mest hemmasysslor?",
"Vem slösar mest pengar?",
"Vem är mest troligt att att blir rik?",
"Vem är mest troligt att att bli pank?",
"Vem vill mest bli/vara storstadsbo?",
"Vem är mest troligt att ha två jobb samtidigt?",
"Vem skulle kunna bli en komiker?",
"Vem är mest troligt att bli en super model?",
"Vem är bäst på att laga mat?",
"Vem lagar mest mat?"
];

const vemÄrDåtidFramtid = [
"Vem hade bäst uppväxt?",
"Vem var jobbigast som barn?",
"Vem har störst planer?",
"Vem har störst chans att bli rik?",
"Vem är mest troligt att gå med i militären?",
"Vem kommer åka på flest resor i framtiden?",
"Vem är mest troligt att vilja adoptera ett barn?"
];

const vemÄrPersonlighet = [
"Vad är erat livsmotto?",
"Vem är mest självsäker?",
"Vem är mest materialistisk?",
"Vem är mest känslosam?",
"Vem är dummast?",
"Vem är klantigast?",
"Vem stressar mest?",
"Vem är nördigast?",
"Vem blir lättare irriterad?",
"Vem är mest drama queen?",
"Vem är lyckligast?",
"Vem gör mest konstiga grejer offentligt?",
"Vem har mest konstiga fobier?",
"Vem är mest troligt att skämma ut sig själv bland folk?",
"Vem är mest troligt att prata med djur?",
"Vem oroar sig mest över smågrejer?",
"Vem kollar på mest romantiska filmer?",
"Vem är mest troligt att vara i en kör?",
"Vem är bäst på att lära ut?",
"Vem är mest troligt att gå på en Justin Bieber concert?"
];

const vemÄrBlandat = [
"Vem fiser mest?",
"Vem rapar mest?",
"Vem är villig att mörda för minst pengar?",
"Vem har flest hemligheter?",
"Vem dansar mest?",
"Vems föräldrar hade vunnit i ett slagsmål mot varandra?",
"Vem litar minst på andra människor?",
"Vem kör snabbast?",
"Vem är bäst på matte?",
"Vem är mest troligt att ge alla sina pengar till välgörenhet?",
"Vem är mest troligt att bli känd?",
"Vem kan hålla andan längst?",
"Vem kommer skaffa mest piercings under sitt liv?",
"Vem är mest troligt att vinna ett nobelpris?",
"Vem är mest troligt att råka döda någon?",
"Vem är mest troligt att dö på ett dumt sätt?",
"Vem skulle vinna i ett slagsmål?",
"Vem är mest troligt att hamna i ett slagsmål?",
"Vem är mest troligt att misslyckas med lätta uppgifter?",
"Vem är mest troligt att slå hål i en vägg?",
"Vem är mest troligt att se ett spöke?",
"Vem är mest troligt att bli arresterad för att gå runt naken?",
"Vem är mest troligt att somna på en lektion?",
"Vem är mest troligt att äta med öppen mun?",
"Vem är mest troligt att vara i två relationer samtidigt?",
"Vem skulle dö först i en zombieapokalyps?",
"Vem är mest troligt att hoppa fallskärm?",
"Vem är mest troligt att hoppa bungyjump?",
"Vem är mest troligt att ta droger?",
"Vem har roligast pappa?",
"Vem har roligast mamma?",
"Vem är mest troligt att vinna på lotto?",
"Vem är mest troligt att ta över världen?",
"Vem är mest troligt att vinna en olympisk medalj?",
"Vem är mest troligt att vinna en Oscar?",
"Vem är mest troligt att bryta ett världsrekord?",
"Vem är mest troligt att uppfinna något användbart?",
"Vem är mest troligt att uppfinna något oanvändbart?",
"Vem är mest troligt att vara med i en reklamfilm?",
"Vem är mest troligt att bli statsminister?",
"Vem skulle skriva den bästa skräckboken?",
"Vem skulle skriva den bästa kokboken?",
"Vem är mest troligt att orsaka ett världskrig?",
"Vem är mest troligt att inte duscha på en vecka?"
];

//Kombinerar alla katigorier i Vem Är? till en Array
const allaVemÄr = [...vemÄrIntimt, ...vemÄrNöjen, ...vemÄrJobbHem, ...vemÄrDåtidFramtid, ...vemÄrPersonlighet, ...vemÄrBlandat]


function FrågaRelationerFunc() {
	
	//Slumpar en typ av fråga
	frågetyp=Math.floor(Math.random() * 3);
	
	if (frågetyp === 0) {
		frågetyptext = "Vad Är?";}
	
	else if (frågetyp === 1) {
		frågetyptext = "Vem Är?";}
	
	else if (frågetyp === 2) {
		frågetyptext = "Alla Svarar!";}

	//Ändra texten på skärmen så den visar rätt frågetyp
	document.getElementById("frågetyptext").innerHTML = frågetyptext;
	
	//Slumpar en kategori
	kategori=Math.floor(Math.random() * 6);
	
	if (kategori === 0) {
		kategoritext = "Intimt";}
		
	else if (kategori === 1) {
		kategoritext = "Nöjen";}
	
	else if (kategori === 2) {
		kategoritext = "Jobb & Hem";}
	
	else if (kategori === 3) {
		kategoritext = "Dåtid & Framtid";}
	
	else if (kategori === 4) {
		kategoritext = "Personlighet";}
	
	else if (kategori === 5) {
		kategoritext = "Blandat";}

	//Ändra texten på skärmen så den visar rätt kategori
	document.getElementById("kategoritext").innerHTML = kategoritext;

	NyFrågaRelationerFunc();
}

function NyFrågaRelationerFunc() {
	//Slumpar fram frågan till Vad Är? och Alla Svarar!
	if (frågetyp === 0 || frågetyp === 2) {
		
		//Intimt
		if (kategori === 0) {
			var frågaNr=Math.floor(Math.random() * vadÄrIntimt.length);
			document.getElementById("frågetext").innerHTML = vadÄrIntimt[frågaNr];}	
		
		//Nöjen
		else if (kategori === 1) {
			var frågaNr=Math.floor(Math.random() * vadÄrNöjen.length);
			document.getElementById("frågetext").innerHTML = vadÄrNöjen[frågaNr];}
		
		//Jobb & Hem
		else if (kategori === 2) {
			var frågaNr=Math.floor(Math.random() * vadÄrJobbHem.length);
			document.getElementById("frågetext").innerHTML = vadÄrJobbHem[frågaNr];}
	
		//Dåtid & Framtid
		else if (kategori === 3) {
			var frågaNr=Math.floor(Math.random() * vadÄrDåtidFramtid.length);
			document.getElementById("frågetext").innerHTML = vadÄrDåtidFramtid[frågaNr];}
	
		//Personlighet
		else if (kategori === 4) {
			var frågaNr=Math.floor(Math.random() * vadÄrPersonlighet.length);
			document.getElementById("frågetext").innerHTML = vadÄrPersonlighet[frågaNr];}
	
		//Blandat
		else if (kategori === 5) {
			var frågaNr=Math.floor(Math.random() * vadÄrBlandat.length);
			document.getElementById("frågetext").innerHTML = vadÄrBlandat[frågaNr];}
	}
	
	//Slumpar fram frågan till Vem Är?
	else if (frågetyp === 1) {
			
		//Intimt
		if (kategori === 0) {
			var frågaNr=Math.floor(Math.random() * vemÄrIntimt.length);
			document.getElementById("frågetext").innerHTML = vemÄrIntimt[frågaNr];}	
		
		//Nöjen
		else if (kategori === 1) {
			var frågaNr=Math.floor(Math.random() * vemÄrNöjen.length);
			document.getElementById("frågetext").innerHTML = vemÄrNöjen[frågaNr];}
		
		//Jobb & Hem
		else if (kategori === 2) {
			var frågaNr=Math.floor(Math.random() * vemÄrJobbHem.length);
			document.getElementById("frågetext").innerHTML = vemÄrJobbHem[frågaNr];}
	
		//Dåtid & Framtid
		else if (kategori === 3) {
			var frågaNr=Math.floor(Math.random() * vemÄrDåtidFramtid.length);
			document.getElementById("frågetext").innerHTML = vemÄrDåtidFramtid[frågaNr];}
	
		//Personlighet
		else if (kategori === 4) {
			var frågaNr=Math.floor(Math.random() * vemÄrPersonlighet.length);
			document.getElementById("frågetext").innerHTML = vemÄrPersonlighet[frågaNr];}
	
		//Blandat
		else if (kategori === 5) {
			var frågaNr=Math.floor(Math.random() * vemÄrBlandat.length);
			document.getElementById("frågetext").innerHTML = vemÄrBlandat[frågaNr];}	
	}
	
	
}


function FrågaVännerFunc() {
	
	//Slumpar en typ av fråga
	frågetyp=Math.floor(Math.random() * 3);
	
	if (frågetyp === 0) {
		frågetyptext = "Vad Är?";}
	
	else if (frågetyp === 1) {
		frågetyptext = "Vem Är?";}
	
	else if (frågetyp === 2) {
		frågetyptext = "Alla Svarar!";}

	//Ändra texten på skärmen så den visar rätt frågetyp
	document.getElementById("frågetyptext").innerHTML = frågetyptext;
	
	//Slumpar en kategori
	kategori=Math.floor(Math.random() * 5);
		
	if (kategori === 0) {
		kategoritext = "Nöjen";}
	
	else if (kategori === 1) {
		kategoritext = "Jobb & Hem";}
	
	else if (kategori === 2) {
		kategoritext = "Dåtid & Framtid";}
	
	else if (kategori === 3) {
		kategoritext = "Personlighet";}
	
	else if (kategori === 4) {
		kategoritext = "Blandat";}

	//Ändra texten på skärmen så den visar rätt kategori
	document.getElementById("kategoritext").innerHTML = kategoritext;

	NyFrågaVännerFunc();
}

function NyFrågaVännerFunc() {
	//Slumpar fram frågan till Vad Är? och Alla Svarar!
	if (frågetyp === 0 || frågetyp === 2) {
		
		//Nöjen
		if (kategori === 0) {
			var frågaNr=Math.floor(Math.random() * vadÄrNöjen.length);
			document.getElementById("frågetext").innerHTML = vadÄrNöjen[frågaNr];}
		
		//Jobb & Hem
		else if (kategori === 1) {
			var frågaNr=Math.floor(Math.random() * vadÄrJobbHem.length);
			document.getElementById("frågetext").innerHTML = vadÄrJobbHem[frågaNr];}
	
		//Dåtid & Framtid
		else if (kategori === 2) {
			var frågaNr=Math.floor(Math.random() * vadÄrDåtidFramtid.length);
			document.getElementById("frågetext").innerHTML = vadÄrDåtidFramtid[frågaNr];}
	
		//Personlighet
		else if (kategori === 3) {
			var frågaNr=Math.floor(Math.random() * vadÄrPersonlighet.length);
			document.getElementById("frågetext").innerHTML = vadÄrPersonlighet[frågaNr];}
	
		//Blandat
		else if (kategori === 4) {
			var frågaNr=Math.floor(Math.random() * vadÄrBlandat.length);
			document.getElementById("frågetext").innerHTML = vadÄrBlandat[frågaNr];}
	}
	
	//Slumpar fram frågan till Vem Är?
	else if (frågetyp === 1) {
			
		//Nöjen
		if (kategori === 0) {
			var frågaNr=Math.floor(Math.random() * vemÄrNöjen.length);
			document.getElementById("frågetext").innerHTML = vemÄrNöjen[frågaNr];}
		
		//Jobb & Hem
		else if (kategori === 1) {
			var frågaNr=Math.floor(Math.random() * vemÄrJobbHem.length);
			document.getElementById("frågetext").innerHTML = vemÄrJobbHem[frågaNr];}
	
		//Dåtid & Framtid
		else if (kategori === 2) {
			var frågaNr=Math.floor(Math.random() * vemÄrDåtidFramtid.length);
			document.getElementById("frågetext").innerHTML = vemÄrDåtidFramtid[frågaNr];}
	
		//Personlighet
		else if (kategori === 3) {
			var frågaNr=Math.floor(Math.random() * vemÄrPersonlighet.length);
			document.getElementById("frågetext").innerHTML = vemÄrPersonlighet[frågaNr];}
	
		//Blandat
		else if (kategori === 4) {
			var frågaNr=Math.floor(Math.random() * vemÄrBlandat.length);
			document.getElementById("frågetext").innerHTML = vemÄrBlandat[frågaNr];}	
	}
}


function FrågaAllaFunc() {
	
	//Slumpar fårgetyp
	frågetyp=Math.floor(Math.random() * 3);
	
	if (frågetyp === 0) {
		frågetyptext = "Vad Är?";}
	
	else if (frågetyp === 1) {
		frågetyptext = "Vem Är?";}
	
	else if (frågetyp === 2) {
		frågetyptext = "Alla Svarar!";}

	//Ändra texten på skärmen så den visar rätt frågetyp
	document.getElementById("frågetyptext").innerHTML = frågetyptext;
	
	NyFrågaAllaFunc();
}

function NyFrågaAllaFunc() {

	//Slumpar fram kategori
	kategori=Math.floor(Math.random() * 6);
	
	//Slumpar fram frågan till Vad Är? och Alla Svarar!
	if (frågetyp === 0 || frågetyp === 2) {
		
			var frågaNr=Math.floor(Math.random() * allaVadÄr.length);
			document.getElementById("frågetext").innerHTML = allaVadÄr[frågaNr];		
	}
	
	//Slumpar fram frågan till Vem Är?
	else if (frågetyp === 1) {
			
			var frågaNr=Math.floor(Math.random() * allaVemÄr.length);
			document.getElementById("frågetext").innerHTML = allaVemÄr[frågaNr];
		
	}
	
	
}