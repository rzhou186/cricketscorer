/*
 * cricketscorer.js
 * ----------------------------------------
 * Initializes web application.
 * 
 */

/* -------------------- App Control -------------------- */

$(document).ready(function(){

	$('#fdsa').button('toggle');

 	$(".next-btn").click(function(){
 		// Increment currStep, then launch the next step.
 		var nextStep = checkIfValid(currStep);
 		if(nextStep > 0)
 		{
 			launchStep(nextStep);
 			currStep = nextStep;
 		}
 	});

 	// End Innings
 	$(".endInnings").click(function(){

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
		$(".batsmanNum").html(currBatting.batsmen.length+1);
		$(".teamName").html(currBatting.Name);
		$(".teamScore").html(currBatting.score);
		$(".teamWickets").html(currBatting.wickets);
		$(".numOvers").html(currBatting.numBalls/6);
		$(".numBalls").html(currBatting.numBalls%6);
		$(".batsmanName").val("");
		$("#onStrike > button.active").val('yes');
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
	// Add teams
	if(step === 1)
	{
		teamOne.Name = $("#team1-name").val();
		teamTwo.Name = $("#team2-name").val();
		if($("#battingTeam > button.active").val() === '1') {
		currBatting = teamOne;
		}
		else {
		currBatting = teamTwo;
		}
		if(teamOne.Name === "") {
			alert ("Team name one is not filled yet");
			return 1;
		}
		else if(teamTwo.Name === "") {
			alert ("Team name two is not filled yet");
			return 1;
		}
		else if($('#battingTeam > button.active').val() !== '1' && $('#battingTeam > button.active').val() !== '2') {
			alert ("Select at least one of the radio buttons");
			return 1;
		}

		return 2;
	}
	// Add batsman
	else if(step === 2) {

		var batsmanName = $(".batsmanName").val();

		if(batsmanName === "") {
			alert("Please enter batsman name");
			return 2;
		}

		if($("#onStrike > button.active").val() === 'yes') {
			currBatting.strikeBatsman = currBatting.batsmen.length;
		}
		else if($("#onStrike > button.active").val() === 'no') {
			if (currBatting.batsmen.length > 0 && currBatting.strikeBatsman < 0)
			{
				alert("At least one batsman must be on strike.");
				return 2;
			}
			currBatting.nonStrikeBatsman = currBatting.batsmen.length;
		}
		else {
			alert("Must select if new batsman will be on strike or not");
			return 2;
		}

		// Create a new batsman
		var batsman = {
			name:batsmanName,
			runs:"0",
			out:"not out",
			fours:"0",
			sixes:"0"
		};
		currBatting.batsmen.push(batsman);

		if (currBatting.batsmen.length < 2)
		{
			return 2;
		}
		else
		{
			return 3;
		}
		//alert(batsman.name);
	}

	// End ball and register score	
	else if(step === 3) {

	}
	
	// Display score while ball is being played	
	else if(step === 4) {

	}
	
	// Add or select bowler at the end of over
	else if(step === 5) {

	}

	// Register how wicket fell
	else if(step == 6) {

	}

	// Register the type of extra run scored
	else if(step == 7) {

	}

	// End Innings
	else if(step == 8) {
		
	}

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
