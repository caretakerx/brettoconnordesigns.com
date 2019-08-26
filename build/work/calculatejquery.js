// sets all form field values to defaults
// globabl variables
var photographerCost = 0;
var totalCost = 0;

// adds/subtracts cost of memory book form total cost
function toggleMembook() {
	totalCost += ((document.getElementById("site").checked) ? 250 : -250);
	$("#calculate").html( "$" + totalCost ); 
}

// adds/subtracts cost of reproduction rights from total cost
function toggleRights() {
	totalCost += ($("#reprodsites").is( ":checked" ) ) ? 1250 : -1250;
	$("#calculate").html( "$" + totalCost );
}

// calculates all costs based on staff and adds to total cost
function calcStaff() {
	var num = $("#websitenumber");
	
	totalCost -= photographerCost;
	photographerCost = num.val() * 100 * $("#websitehours").val() + $("#distance").val() * num.val();
	//alert( "inside calcStaff" + photographerCost + ", " + distance.value );
	totalCost += photographerCost;
	
	$("#calculate").html( "$" + totalCost );
}

$(document).ready( function() {
$("#websitenumber, #websitehours, #distance").change( calcStaff);
$("#site").change( toggleMembook );
$("#reprodsites").change( toggleRights );
});