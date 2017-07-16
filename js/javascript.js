var display = document.getElementById("display"); 
var buttons = document.getElementsByTagName('button'); 


function addButtons() {
	for (var i = 0; i < buttons.length; i++){
	
	buttons[i].addEventListener("click", function() {
		
		if (display.innerHTML.length === 9) {
			display.innerHTML += "";
			}else {
				var val = this.value;
				display.innerHTML += val;
			}
			
	});	
}
}

addButtons();

function displayOn(){
	display.innerHTML = "";
	display.style.backgroundColor = "#42f4c5";
	
}

function evaluate() {
	var x = display.innerHTML;
	var y = eval(x);
	display.innerHTML = y;
}

function sqroot() {
	var x = display.innerHTML;
	var y = eval(x);
	y = Math.sqrt(y);
	display.innerHTML = Math.round(y*100000000)/100000000;

}

var on = document.getElementById("on");

on.addEventListener("click", displayOn);
	
var del = document.getElementById("del"); //clear display

del.addEventListener("click", function() {
		display.innerHTML = "";
}); 

var off = document.getElementById("off");

off.addEventListener("click", function() {
	display.innerHTML = "";
	display.style.backgroundColor = "black";
}); 

var answer = document.getElementById("=");

answer.addEventListener("click", evaluate);
	
var sqrt = document.getElementById("sqrt");

sqrt.addEventListener("click", sqroot);