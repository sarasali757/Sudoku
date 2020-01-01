//name
var player = location.search.split('dummyText=')[1];
if(player==null){
	document.getElementById('playerName').innerHTML = "Hello, player";	
}else{
	document.getElementById('playerName').innerHTML = "Hello, "+player;
}
//StartBtn

//rand images
var a = [];
function rand()
{
	
	var temp =0;

	for(i=0;i<4;i++)
	{
		temp = Math.floor(Math.random()*10)+4;
		if(a.indexOf(temp) == -1 ){

			a.push(temp);
		}
		else
		{
			i--;
		}
	}
	console.log(a);	
}
rand();
//images
function addImages(){
	for(i in a){
		document.getElementById(a[i]);
		document.images[a[i]+3].src="images/"+(i)+".jpg";
	}
}
addImages();

/////////////


//arrows handling 


/*document.onkeydown = checkKey;

function checkKey(e) {

	i = press.getAttribute('id');
	e = e || window.event;
	if(e.keyCode=='38'||e.keyCode == '40'||e.keyCode == '37'||e.keyCode == '39'){

		press.removeAttribute("style");
		if (e.keyCode == '38') {
			i = parseInt(i)-4;
        // up arrow
    }
    else if (e.keyCode == '40') {
    	i = parseInt(i)+4;
        // down arrow
    }
    else if (e.keyCode == '37') {
    	i = parseInt(i)-1;
       // left arrow
   }
   else if (e.keyCode == '39') {
   	i = parseInt(i)+1;
       // right arrow
   }
   i= i==0?4:i;
   i=i>16?i-16:i;
   i=i<0?i+16:i;

   press= document.getElementById(i);
   redraw();
}
else if(e.keyCode == '97'||e.keyCode == '49'||e.keyCode == '98'||e.keyCode == '50'||e.keyCode == '99'||e.keyCode == '51'||e.keyCode == '100'||e.keyCode == '52'){
	if(a.indexOf(parseInt(i)) != -1){
		alert("Reserved ");
	}else{
		if(e.keyCode == '97'||e.keyCode == '49'){
			press.innerHTML= '<img src="images/0.jpg" class="img-fluid">';
		}else if(e.keyCode == '98'||e.keyCode == '50'){
			press.innerHTML= '<img src="images/1.jpg" class="img-fluid">';
		}else if(e.keyCode == '99'||e.keyCode == '51'){
			press.innerHTML= '<img src="images/2.jpg" class="img-fluid">';
		}else if(e.keyCode == '100'||e.keyCode == '52'){
			press.innerHTML= '<img src="images/3.jpg" class="img-fluid">';
		}

	}
}
}
*/
function redraw(){
	press.setAttribute("style","background-color:#7FF0E7;");
}

//movement
var i = 1;
var press = document.getElementById(i);
////


var gameOn =false;
////timer
function startGame(){
	gameOn = true;
	press.setAttribute("style","background-color:#7FF0E7;");
document.onkeydown = checkKey;


function checkKey(e) {

	i = press.getAttribute('id');
	e = e || window.event;
	if(e.keyCode=='38'||e.keyCode == '40'||e.keyCode == '37'||e.keyCode == '39'){

		press.removeAttribute("style");
		if (e.keyCode == '38') {
			i = parseInt(i)-4;
        // up arrow
    }
    else if (e.keyCode == '40') {
    	i = parseInt(i)+4;
        // down arrow
    }
    else if (e.keyCode == '37') {
    	i = parseInt(i)-1;
       // left arrow
   }
   else if (e.keyCode == '39') {
   	i = parseInt(i)+1;
       // right arrow
   }
   i= i==0?4:i;
   i=i>16?i-16:i;
   i=i<0?i+16:i;

   press= document.getElementById(i);
   redraw();
}
else if(e.keyCode == '97'||e.keyCode == '49'||e.keyCode == '98'||e.keyCode == '50'||e.keyCode == '99'||e.keyCode == '51'||e.keyCode == '100'||e.keyCode == '52'){
	if(gameOn == true){
	if(a.indexOf(parseInt(i)) != -1){
		alert("Reserved ");
	}else{
		if(e.keyCode == '97'||e.keyCode == '49'){
			press.innerHTML= '<img src="images/0.jpg" class="img-fluid bb">';
		}else if(e.keyCode == '98'||e.keyCode == '50'){
			press.innerHTML= '<img src="images/1.jpg" class="img-fluid bb">';
		}else if(e.keyCode == '99'||e.keyCode == '51'){
			press.innerHTML= '<img src="images/2.jpg" class="img-fluid bb">';
		}else if(e.keyCode == '100'||e.keyCode == '52'){
			press.innerHTML= '<img src="images/3.jpg" class="img-fluid bb">';
		}

	}
}
}

}
	startTimer();
}

var timer = 120;
var pauseTimer = false;
var intervalId;


function startTimer() {
	timer = 120;
	var timerDiv = document.getElementById("timer");


	// update stopwatch value every one second
	pauseTimer = false;
	intervalId = setInterval(function () {
		if (!pauseTimer) {
			timer--;
			var min = Math.floor(timer / 60);
			var sec = timer % 60;
			timerDiv.innerText = (("" + min).length < 2 ? ("0" + min) : min) + ":" + (("" + sec).length < 2 ? ("0" + sec) : sec);

			if(timer==0){

				clearInterval(intervalId);
				stopGame();
			}
		}
	}, 1000);
}

/*function stopGame(){
	alert("Game Over!");
}*/

function stopGame() {

gameOn = false;
gameCondition();

	var x = document.getElementById("myDIV");

	x.style.display = "block";
}

//Game condition

var gfg = new Array(4); 
h=1;
for (var i = 0; i < gfg.length; i++) { 
    gfg[i] = new Array(4); 
} 
//inisialize
for (var i = 0; i < 4; i++) { 
    for (var j = 0; j < 4; j++) { 
        gfg[i][j] = document.getElementById(h); 
        h++;
    } 
} 

function gameCondition(){
	var cant=0;
	var lose = false;
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			for (var k = 0; k < 4; k++) {
				for (var l = 0; l < 4 ; l++) {
					if (gfg[i][j].innerHTML == gfg[k][l].innerHTML || gfg[i][j].innerHTML =='<img src="" class="img-fluidrand">') {
						cant++;
					}
				}
			}
			if(cant > 1){
				lose = true;
			}
			cant=0;
		}
	}

	if(lose == true)
	{
		document.getElementById('ended').innerText = "Sorry, you lost";
	}else
	{
		document.getElementById('ended').innerText = "We have a winner";
	}
}	

function tryAgain(){
  location.replace("index2.html")
}

