/*    JavaScript 6th Edition
*    Chapter 3
*    Chapter case
*    Tipton Turbines
*    Variables and functions
*    Author: Brett O'Connor
*    Date: 2/7/2018
*    Filename: tt.js
*/

// global variables
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var opponents = ["Bears", "Eagles", "Eagles", "Eagles", "Bears", "off", "Bears", "Bears", "Hawks", "Hawks", "Hawks", "Patriots", "Patriots", "Patriots", "Patriots", "off", "Giants", "Giants", "Giants", "Broncos", "Broncos", "Broncos", "off", "Patriots", "Patriots", "Patriots", "Eagles", "Eagles", "Eagles", "off", "off"];
var gameLocation = ["home", "home", "home", "away", "away", "away", "home", "home", "home", "home", "away", "away", "away", "away", "away", "", "away", "away", "home", "home", "home", "away", "", "home", "home", "home", "home", "home", "home", "", ""];

// function to place daysOfWeek value in header row cells
function addColumnHeaders() {
	var i = 0;
	while (i < 7) {
		document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];
		i++;
	}
}

// function to place day of month value in first p element
// within each table data cell that has an id
function addCalendarDates() {
	var i = 1;
	var paragraphs = "";
	do {
		var tableCell = document.getElementById("08-" + i);
		paragraphs = tableCell.getElementsByTagName("p");
		paragraphs[0].innerHTML = i;
		i++
	} while (i <= 31);
}

// function to place opponents and gameLocation values in
// second p element within each table data cell that has an id
function addGameInfo() {
	var paragraphs = "";
	for (var i = 0; i < 31; i++) {
		var date = i + 1;
		var tableCell = document.getElementById("08-" + date);
		paragraphs = tableCell.getElementsByTagName("p");
		/* if (gameLocation[i] === "away") {
			paragraphs[1].innerHTML = "@ ";
		}
		if (gameLocation[i] === "home") {
			paragraphs[1].innerHTML = "vs ";
		} */
		/* if (gameLocation[i] === "away") {
			paragraphs[1].innerHTML = "@ ";
		}
		else {
			if (gameLocation[i] === "home") {
			paragraphs[1].innerHTML = "vs ";
			}
		} */
		switch (gameLocation[i]) {
		case "away":
		paragraphs[1].innerHTML = "@ ";
		break;
		case "home":
		paragraphs[1].innerHTML = "vs ";
		break;
		}
		paragraphs[1].innerHTML += opponents[i];
	}
}

// function to populate calendar
function setUpPage() {
	addColumnHeaders();
	addCalendarDates();
	addGameInfo();
}

setUpPage();