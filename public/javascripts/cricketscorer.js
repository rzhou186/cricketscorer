/*
 * cricketscorer.js
 * ----------------------------------------
 * Initializes web application.
 * 
 */

/* -------------------- App Control -------------------- */

$(document).ready(function(){

	for(var i = 0; i < 6; i++) {
		currOver.push(-1);
	}
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
 		nextStep = checkIfValid(100);
 		launchStep(nextStep);
 		currStep = nextStep;
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

    	$('.bowlerList').empty(); 
		for(var i = 0; i < currBowling.bowlers.length; i++)
		{
			var bowler = currBowling.bowlers[i];
    		$('.bowlerList').append($('<option>', { 
        		value: i,
        		text : bowler.name 
    		}));
		}
	}

	else if (step === 4) {
		// Update app window contents
		$("#step-three").remove();
		$("#step-four").css("display", "block");
		$(".teamName").html(currBowling.Name);
		$(".teamScore").html(currBatting.score);
		$(".teamWickets").html(currBatting.wickets);
		$(".numOvers").html(currBatting.numBalls/6);
		$(".numBalls").html(currBatting.numBalls%6);
		$(".strikeBatsman").html(currBatting.batsmen[currBatting.strikeBatsman].Name);
		$(".nonStrikeBatsman").html(currBatting.batsmen[currBatting.nonStrikeBatsman].Name);
		$(".strikeBatsmanRB").html(currBatting.batsmen[currBatting.strikeBatsman].runs + " (" + currBatting.batsmen[currBatting.strikeBatsman].balls + ")");
	    $(".nonStrikeBatsmanRB").html(currBatting.batsmen[currBatting.nonStrikeBatsman].runs + " ("  + currBatting.batsmen[currBatting.nonStrikeBatsman].balls + ")");
		$(".bowler").html(currBowling.bowlers[currBatting.bowler].Name);
		for(var i = 0; i < 6; i++) {
			if(currOver[i] !== -1) {
				$(".ball" + i).html(currOver[i]);
			}
			else {
				$(".ball" + i).html("");
			}
		}
		if(currOver[0] !== -1) {
			$(".ball1").html(currOver[0]);
		}
		else {
			$(".ball1").html("");
		}
		if(currOver[1] !== -1) {
			$(".ball2").html(currOver[1]);
		}
		else {
			$(".ball2").html("");
		}
		if(currOver[2] !== -1) {
			$(".ball3").html(currOver[2]);
		}
		else {
			$(".ball3").html("");
		}
		if(currOver[3] !== -1) {
			$(".ball4").html(currOver[3]);
		}
		else {
			$(".ball4").html("");
		}
		if(currOver[4] !== -1) {
			$(".ball5").html(currOver[4]);
		}
		else {
			$(".ball5").html("");
		}
		if(currOver[5] !== -1) {
			$(".ball6").html(currOver[5]);
		}
		else {
			$(".ball6").html("");
		}
	}

	// Register score
	else if (step === 5) {
		$("#step-four").remove();
		$("#step-five").css("display", "block");
	}

	// Wicket Fall
	else if (step === 6) {

    	$('.batsmenList').empty(); 
		
		var batsman = currBatting.batsmen[currBatting.strikeBatsman];
    	$('.batsmenList').append($('<option>', { 
        	value: currBatting.strikeBatsman,
        	text : batsman.name 
    	}));

    	batsman = currBatting.batsmen[currBatting.nonStrikeBatsman];
    	$('.batsmenList').append($('<option>', { 
        	value: currBatting.nonStrikeBatsman,
        	text : batsman.name 
    	}));
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
			runs: 0,
			balls: 0,
			out:"not out",
			fours: 0,
			sixes: 0
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
			runs: 0,
			overs: 0,
			wickets: 0,
		};
		currBowling.bowlers.push(bowler);
		return 3;
	}
	
	// Select bowler at the end of over	
	else if(step === 3) {
		var bowlerName = $('.bowlerList').find(":selected").text();
		if(bowlerName === "")
		{
			alert("Please select a bowler from the list.");
			return 3;
		}

		for(var i = 0; i < currBowling.bowlers.length; i++)
		{
			bowler = currBowling.bowlers[i];
			if (bowler.name === bowlerName)
			{
				currBowling.bowler = i;	
				break;		
			}
		}

		return 4;
	}

	// Display score while ball is being played	
	else if(step === 4) {
		return 5;
	}

	// End ball and register score
	else if(step == 5) {
		currBatting.numBalls++;
		currBatting.batsmen[currBatting.strikeBatsman].balls++;
		
		//currBowling.bowlers[currBowling.bowler]

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
