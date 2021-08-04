var css = document.querySelector("h3");

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

var body = document.getElementById("gradient");

var randomColorBtn = document.querySelector("button");

color1.addEventListener("input", updateBackground);

color2.addEventListener("input", updateBackground);

randomColorBtn.addEventListener("click", updateRandomBackground);

function changeGradient() {
	body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
}

function updateBackground() {
	changeGradient();
	css.textContent = body.style.background + ";";
}

function randomNumberHex() {
	return Math.floor(Math.random() * 255).toString(16); //Converting from decimal to hex
}

function updateRandomBackground() {
	color1.value = "#"+randomNumberHex()+randomNumberHex()+randomNumberHex();
	color2.value = "#"+randomNumberHex()+randomNumberHex()+randomNumberHex();
	updateBackground();
}