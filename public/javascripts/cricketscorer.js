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
 		var flag = checkIfValid(currStep);
 		if(flag > 0)
 		{
 			currStep++;
 			launchStep(currStep);
 		}
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

/*
 * Function: checkIfValid
 * ----------------------------------------
 * Checks that all form fields are filled before proceeding to the next step.
 * 
 */
function checkIfValid(step) {
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
			return 0;
		}
		else if(teamTwo.Name === "") {
			alert ("Team name two is not filled yet");
			return 0;
		}
		else if($('#batting-team > button.active').val() !== '1' && $('#batting-team > button.active').val() !== '2') {
			alert ("Select at least one of the radio buttons");
			return 0;
		}
	}
	else if(step === 2) {
		// this is step 2
		$(".teamName").val(currBatting.Name);
		$(".teamScore").val(currBatting.score);
		$(".teamWickets").val(currBatting.wickets);

		// Create a new batsman
		var batsman = {
			name:$(".batsmanName").val(),
			runs:"0",
			out:"not out",
			fours:"0",
			sixes:"0"
		};
		currBatting.batsmen.push(batsman);
	}
	
	// All checks successful
	return 1;
}


/*----------------------- Step Functions ----------------------------------*/

function stepOne() {

		// Remove subhead window from DOM
 		$(".subhead-window").remove();
 		// Update app window contents
		$("#step-zero").remove();
		$("#step-one").css("display", "block");
}
