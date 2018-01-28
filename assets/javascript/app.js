

// Determines that the web page is ready for manipulation.
$(document).ready(function() {

// Shows only the start page at game start.
$("#questions").hide();
$("#results").hide();

// Shows only the questions page when user clicks Start button.
$("#start-button").on("click", function () {
 	$("#game-start").hide();
 	$("#questions").show();
});

// Shows only the results page when user clicks Done button.
$("#done-button").on("click", function () {
    $("#questions").hide();
    $("#results").show();
});

// Initiates start and stop functionality for stopwatch when window loads.
window.onload = function() {
$("#start-button").on("click", stopwatch.start);
$("#done-button").on("click", stopwatch.stop);
};

// Creates a variable for the setInterval, which runs the stopwatch.
var intervalId;

// Creates the stopwatch object.
var stopwatch = {
    time: 20,
    start: function() {
        // Uses setInterval to start the count and set the clock to running.
        intervalId = setInterval(stopwatch.count, 1000);   
    },

    stop: function() {
        // Uses clearInterval to stop the count and set the clock to not running.
        clearInterval(intervalId);
    },

    count: function() {
        // Decrements the time by 1 second.
        stopwatch.time--
        // Stops the stopwatch and shows only the results page when the 
        // stopwatch time is 0.
        var timedisplay = (stopwatch.time);
        if (timedisplay == 0) {
            $("#questions").hide();
            $("#results").show();
            stopwatch.stop();    
        }
        // Shows the stopwatch time in the UI.
        $("#stopwatchdisplay").text(timedisplay);
    },
};








$(function(){
$(".radio-inline").on("click", function() {
	// var correct = document.getElementById("#correct").checked;
	// var incorrect = document.getElementById("#incorrect").checked;
	if ($("#correct").is(':checked')) {
	// if (correct == true) {
		var totalCorrect = totalCorrect + 1;
		console.log(totalCorrect);
	}


});

 
// function check() {
//     if(document.getElementById("#correct").checked == true) {
//     	alert("my alert");
//     }
// };

// check(); 
   		
        $('input[type="radio"]').click(function(){
       		if($(this).prop("checked") == true) {
                // alert("Radio is checked.");
            }
            else if($(this).prop("checked") == false){
                alert("Radio is unchecked.");
            }
        });

        $('input[type="radio"]').click(function(){
        	if($('input[name=correct]:checked').val() == true) {
        		alert ("Yes");
        	} 
        });	
        
        

    	








});		
});





