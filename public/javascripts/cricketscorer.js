/*
 * cricketscorer.js
 * ----------------------------------------
 * Initializes web application.
 * 
 */

/* -------------------- App Control -------------------- */

$(document).ready(function(){

 	$(".next-btn").click(function(){
 		// Increment currStep, then launch the next step.
 		checkifValid(currStep);
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

function checkifValid(step) {
	if(step === 1)
	{
		teamOne.Name = $("#team1-name").val();
		teamTwo.Name = $("#team2-name").val();
		if($("#team1-radio").attr("checked") != "undefined") {
		currBatting = teamOne;
		}
		else {
		currBatting = teamTwo;
		}
		if(teamOne.Name === "") {
			alert ("Team name one is not filled yet");
		}
		else if(teamTwo.Name === "") {
			alert ("Team name two is not filled yet");
		}
		else if($("#team1-radio").attr("checked") == "undefined" && $("#team2-radio").attr("checked") == "undefined") {
			alert ("Select atleast one of the radio buttons");
		}
	}
	else if(step === 2) {
		$(".teamName").val(currBatting.Name);
		$(".teamScore").val(currBatting.score);
		$(".teamWickets").val(currBatting.wickets);
	}
}


/*----------------------- Step Functions ----------------------------------*/

function stepOne() {

		// Remove subhead window from DOM
 		$(".subhead-window").remove();
 		// Update app window contents
		$("#step-zero").remove();
		$("#step-one").css("display", "block");
}
