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
 		var nextStep = checkIfValid(currStep);
 		if(nextStep > 0)
 		{
 			launchStep(nextStep);
 			currStep = nextStep;
 		}
 	});

 	// Add Bowler
 	$(".addBowler").click(function(){
 		checkIfValid(4);
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
	}

	else if (step === 3) {
		// Update app window contents
		$("#step-two").remove();
		$("#step-three").css("display", "block");	

		$(".teamName").html(currBowling.Name);
		$(".teamScore").html(currBatting.score);
		$(".teamWickets").html(currBatting.wickets);
		$(".numOvers").html(currBatting.numBalls/6);
		$(".numBalls").html(currBatting.numBalls%6);
		$(".bowlerName").val("");	
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
			currBowling = teamTwo;
		}
		else {
			currBatting = teamTwo;
			currBowling = teamOne;
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
			if (currBatting.batsmen.length > 0 && currBatting.nonStrikeBatsman < 0)
			{
				alert("At least one batsman must be on non-strike.");
				return 2;
			}			
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
		else if (currBatting.numBalls % 6 === 0)
		{
			return 3;
		}
		else
		{
			return 4;
		}
		//alert(batsman.name);
	}

	// Add bowler	
	else if(step === 100) {

		var bowlerName = $(".bowlerName").val();

		if(bowlerName === "") {
			alert("Please enter new bowler name");
			return 3;
		}

		// Create a new bowler
		var bowler = {
			name:bowlerName,
			runs:"0",
			overs:"0",
			wickets:"0",
		};
		currBowling.bowlers.push(bowler);

		return 4;
	}
	
	// Select bowler at the end of over	
	else if(step === 3) {

	}

	// Display score while ball is being played	
	else if(step === 4) {

	}

	// End ball and register score
	else if(step == 5) {

	}

	// Register how wicket fell
	else if(step == 6) {

	}

	// End Innings
	else if(step == 7) {
		
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
