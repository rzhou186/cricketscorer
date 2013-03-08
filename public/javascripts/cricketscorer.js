/*
 * cricketscorer.js
 * ----------------------------------------
 * Initializes web application.
 * 
 */

$(document).ready(function(){

 	$("#start-btn").click(function(){
 		
 		// Remove subhead window from DOM
 		$(".subhead-window").remove();

 		// Increment currStep, then launch the next step.
 		currStep++;
 		launchStep(currStep);

 	});

 });

function launchStep(step){
	if (step === 1) {
		$("#step-zero").remove();
		$("#step-one").css("display", "block");
	}
	else if (step === 2) {
		$("#step-one").remove();
		$("#step-two").css("display", "block");	
	}
	else if (step === 3) {
		$("#step-two").remove();
		$("#step-three").css("display", "block");		
	}
}