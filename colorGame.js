//Color Games JavaScript

// Variables 

var numSquares = 6;

var colors = [];

var pickedColor;

//Selectors

var squares = document.querySelectorAll(".squares");

var colorDisplay = document.getElementById("colorDisplay");

var message = document.getElementById("message");

var h1 = document.querySelector("h1");

var resetButton = document.getElementById("reset");

var modeButtons = document.querySelectorAll(".mode");


init(); // calling for setting up enviroment




// ------Functions--------

// Setting up Squares

function setupSquares(){
	
	for ( var i = 0; i < squares.length; i++) {

		squares[i].addEventListener("click", function () {

		var clickedColor = this.style.backgroundColor;


			if (clickedColor === pickedColor) {

			message.textContent = "Right Color";
			resetButton.textContent = "Play Again?"

			changeColors(clickedColor);

			h1.style.backgroundColor = clickedColor;


		} else {

			this.style.backgroundColor = "#232323";
			// fadeout & matches Background Color which default set to #232323
			message.textContent = "Try Again";
		}
	});



}
}



//Mode button Event Listner 


function setupModeButtons(){
	
	for (var i = 0; i < modeButtons.length; i++) {

		modeButtons[i].addEventListener("click", function () {

			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

			reset();
		});
	}
}
	



// Reset Function  for all

function reset() {

	colors = generateRandomColors(numSquares);

	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;

	message.textContent = "";

	resetButton.textContent = "New Colors";

	for (var i = 0; i < squares.length; i++) {

		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}

	}

	h1.style.backgroundColor = "steelblue";
}




// All Squares Chnaged to same color clicked

function changeColors(color) {

	for (var i = 0; i < squares.length; i++) {

		squares[i].style.backgroundColor = color;
	}
}




//Pick a color from Random color

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	//colors.length is 6
	return colors[random];
}



//Random Colors

function generateRandomColors(num) { // num is 6

	var arr = [];

	for (var i = 0; i < num; i++) { //i<6

		arr.push(randomColor()); //call another func and fill array

	}
	return arr;
}

//Generate RGB codes

function randomColor() {

	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	//rgb("255,space0,space0")
	return "rgb(" + r + ", " + g + ", " + b + ")";


}



//----- Buttons ------

function init() {

	setupModeButtons();
	
	setupSquares();

	reset();
}


//----------Reset Button ------

resetButton.addEventListener("click", function () {

	reset();

});
