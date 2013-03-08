/*
 * cricketscorer.js
 * ----------------------------------------
 * Initializes web application.
 * 
 */

$(document).ready(function(){

 	$(".next-btn").click(function(){
 		// Increment currStep, then launch the next step.
 		currStep++;
 		launchStep(currStep);
 	});

});

/*
 * Function: launchStep
 * ----------------------------------------
 * Launches next function, given current step.
 * Triggered by ".next-btn" button.
 * 
 */
function launchStep(step){

	if (step === 1) {

		// Remove subhead window from DOM
 		$(".subhead-window").remove();

 		// Update app window contents
		$("#step-zero").remove();
		$("#step-one").css("display", "block");

	}

	else if (step === 2) {

		// Update app window contents
		$("#step-one").remove();
		$("#step-two").css("display", "block");	

	}

	else if (step === 3) {

		// Update app window contents
		$("#step-two").remove();
		$("#step-three").css("display", "block");		

	}

}