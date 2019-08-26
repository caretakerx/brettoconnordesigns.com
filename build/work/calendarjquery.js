/*    JavaScript 6th Edition
*    Chapter 3
*    Chapter case
*    Tipton Turbines
*    Variables and functions
*    Author: Brett O'Connor
*    Date: 2/7/2018
*    Filename: ttjquery.js
*/

// global variables
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var opponents = ["Bears", "Eagles", "Eagles", "Eagles", "Bears", "off", "Bears", "Bears", "Hawks", "Hawks", "Hawks", "Patriots", "Patriots", "Patriots", "Patriots", "off", "Giants", "Giants", "Giants", "Broncos", "Broncos", "Broncos", "off", "Patriots", "Patriots", "Patriots", "Eagles", "Eagles", "Eagles", "off", "off"];
var gameLocation = ["home", "home", "home", "away", "away", "away", "home", "home", "home", "home", "away", "away", "away", "away", "away", "", "away", "away", "home", "home", "home", "away", "", "home", "home", "home", "home", "home", "home", "", ""];


// function to place opponents and gameLocation values in
// second p element within each table data cell that has an id
function addGameInfo() {
	var paragraphs = "";
	for (var i = 0; i < 31; i++) {
		var date = i + 1;
		paragraphs = $("#08-" + date + " p:nth-child(2)");
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
		if( opponents[i] !== "(off)" )
		paragraphs.text( (gameLocation[i]==="away"?"@":"vs")+" " );
		paragraphs.text( paragraphs.text() + opponents[i] );
	}
}

// function to place daysOfWeek value in header row cells
function addColumnHeaders() {
	
	$("th").each( function( index ) {
		$(this).text( daysOfWeek[index] );
		
		} );
}

// function to place day of month value in first p element
// within each table data cell that has an id
function addCalendarDates() {
	var i = 1;
	
	do {
		var tableCell = $("#08-" + i + " p:nth-child( 1 )").text( i++ );
	} while (i <= 31);
}

$( document).ready( function() {
	addColumnHeaders();
	addCalendarDates();
	addGameInfo();
});