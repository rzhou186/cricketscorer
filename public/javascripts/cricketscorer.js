/*
 * cricketscorer.js
 * ----------------------------------------
 * Initializes web application.
 * 
 */

/* -------------------- App Control -------------------- */

$(document).ready(function(){

	/*for(var i = 0; i < 6; i++) {
		currOver.push(-1);
	}*/
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
		$("#step-one").css("display", "none");

		$("#step-two").css("display", "block");	
		$(".batsmanNum").html(currBatting.batsmen.length+1);
		$(".teamName").html(currBatting.Name);
		$(".teamScore").html(currBatting.score);
		$(".teamWickets").html(currBatting.wickets);
		$(".numOvers").html(Math.floor(currBatting.numBalls/6));
		$(".numBalls").html(currBatting.numBalls%6);
		$(".batsmanName").val("");
	}

	else if (step === 3) {
		// Update app window contents
		$("#step-two").css("display", "none");
		$("#step-three").css("display", "block");	

		$(".teamName").html(currBowling.Name);
		$(".teamScore").html(currBatting.score);
		$(".teamWickets").html(currBatting.wickets);
		$(".numOvers").html(Math.floor(currBatting.numBalls/6));
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
		$("#step-three").css("display", "none");
		$("#step-five").css("display", "none");
		$("#step-four").css("display", "block");
		$(".teamName").html(currBowling.name);
		$(".teamScore").html(currBatting.score);
		$(".teamWickets").html(currBatting.wickets);
		$(".numOvers").html(Math.floor(currBatting.numBalls/6));
		$(".numBalls").html(currBatting.numBalls%6);
		$(".strikeBatsman").html(currBatting.batsmen[currBatting.strikeBatsman].name);
		$(".nonStrikeBatsman").html(currBatting.batsmen[currBatting.nonStrikeBatsman].name);
		$(".strikeBatsmanRB").html(currBatting.batsmen[currBatting.strikeBatsman].runs + " (" + currBatting.batsmen[currBatting.strikeBatsman].balls + ")");
	    $(".nonStrikeBatsmanRB").html(currBatting.batsmen[currBatting.nonStrikeBatsman].runs + " ("  + currBatting.batsmen[currBatting.nonStrikeBatsman].balls + ")");
		$(".bowler").html(currBowling.bowlers[currBowling.bowler].name);
		var overRecord = "&nbsp;";
		for(var i = 0; i < currOver.length; i++) 
		{
			if(currOver[i].ballType === "W")
				overRecord += "  " + "W";
			if(currOver[i].ballType === "E")
				overRecord += "  " + currOver[i].runs + currOver[i].typeOfExtra;
			if(currOver[i].ballType === "N")
				overRecord += "  " + currOver[i].runs;
		}
		$(".overRecord").html(overRecord);
	}

	// Register score
	else if (step === 5) {
		$("#step-four").css("display", "none");
		$("#step-five").css("display", "block");
		$(".teamName").html(currBowling.name);
		$(".teamScore").html(currBatting.score);
		$(".teamWickets").html(currBatting.wickets);
		$(".numOvers").html(Math.floor(currBatting.numBalls/6));
		$(".numBalls").html(currBatting.numBalls%6);
	}

	// Wicket Fall
	else if (step === 6) {
		$("#step-five").remove();
		$("#step-six").css("display", "block");

		$("step-five").remove();
		$("step-six").css("display", "block");
		$('#batsmanOne').html(currBatting.batsmen[currBatting.strikeBatsman].name);
		$('#batsmanTwo').html(currBatting.batsmen[currBatting.nonStrikeBatsman].name);

    	/*$('.batsmenList').empty(); 
		
		var batsman = currBatting.batsmen[currBatting.strikeBatsman];
    	$('.batsmenList').append($('<option>', { 
        	value: currBatting.strikeBatsman,
        	text : batsman.name, 
    	}));

    	batsman = currBatting.batsmen[currBatting.nonStrikeBatsman];
    	$('.batsmenList').append($('<option>', { 
        	value: currBatting.nonStrikeBatsman,
        	text : batsman.name, 
    	}));*/
	}

	// Register extras
	else if (step === 7) {
		$("#step-five").remove();
		$("#step-seven").css("display", "block");
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
			if(currentBatting.strikeBatsman > 0)
			{
				currBatting.nonStrikeBatsman = current.strikeBatsman;
			}
			currBatting.strikeBatsman = currBatting.batsmen.length;			
		}
		else if($("#onStrike > button.active").val() === 'no') {
			if(currentBatting.nonStrikeBatsman > 0)
			{
				currBatting.strikeBatsman = current.nonStrikeBatsman;
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
		var ballOutcome = $("#ballOutcome > button.active").val();
		if(ballOutcome === null) {
			alert("Please select a ball outcome.");
			return 5;
		}
		else if(ballOutcome === 'wicket') {
			return 6;		
		}
		else if(ballOutcome === 'extra') {
			return 7;
		}
		else if(parseInt(ballOutcome) <= 6) {
			var runs = parseInt($("#ballOutcome > button.active").val());
			currBatting.batsmen[currBatting.strikeBatsman].runs += runs;
			currBatting.batsmen[currBatting.strikeBatsman].balls += 1;
			if(runs === 4) currBatting.batsmen[currBatting.strikeBatsman].fours += 1;
			if(runs === 6) currBatting.batsmen[currBatting.strikeBatsman].sixes += 1;
			if (runs % 2 === 1)
			{
				var temp = currBatting.nonStrikeBatsman;
				currBatting.strikeBatsman = currBatting.nonStrikeBatsman;
				currBatting.nonStrikeBatsman = temp;
			}
			currBowling.bowlers[currBowling.bowler].runs += runs;
			currBowling.bowlers[currBowling.bowler].balls += 1;

			currBatting.score += runs;
			currBatting.numBalls += 1;
			var newBall = {
				runs : runs,
				ballType : "N",
			};

			currOver.push(newBall);
			if(currBatting.numBalls % 6 === 0) {
				return 3;
			}
			return 4;
		}		

	}


	// Register how wicket fell
	else if(step == 6) {
		if($("#batsmanSelect > button.active").val() === null) {
			alert("Please select a batsman!");
			return 6;
		}
		if($("#outMethod > button.active").val() === null) {
			alert("Please select the way the wicket was taken!");
		}
		var batsmanOut = $("#batsmanSelect > button.active").val();
		var outMethod = $("#outMethod > button.active").val();
		if(batsmanOut === currBatting.batsmen[currBatting.strikeBatsman].name) {
			currBatting.batsmen[currBatting.strikeBatsman].out = outMethod;
			currBatting.strikeBatsman = -1;
		}
		else {
			currBatting.batsmen[currBatting.nonStrikeBatsman].out = outMethod;
			currBatting.nonStrikeBatsman = -1;
		}
		currBatting.wickets+=1;
		currBatting.batsmen[currBatting.strikeBatsman].balls += 1;
		currBowling.bowlers[currBowling.bowler].balls += 1;
		currBatting.numBalls += 1;
		return 2;
	}

	// Register extra run
	else if(step == 7) {
		
		if($("#extraType > button.active").val() === null) {
			alert("Please select an extra type.");
			return 7;
		}

		if($("#numRuns > button.active").val() === null) {
			alert("Please select additional runs scored on the extra.");
			return 7;
		}

		var extraType = $("#extraType > button.active").val();
		var runs = parseInt($("#numRuns > button.active").val());
		var extraRun = 1;
		if (extraType === "Byes") {
			extraRun = 0;
			currBatting.batsmen[currBatting.strikeBatsman].balls += 1;
			currBowling.bowlers[currBowling.bowler].balls += 1;
			currBatting.numBalls += 1;
		}

		currBatting.batsmen[currBatting.strikeBatsman].runs += (runs + extraRun);
		if(runs === 4) currBatting.batsmen[currBatting.strikeBatsman].fours += 1;
		if(runs === 6) currBatting.batsmen[currBatting.strikeBatsman].sixes += 1;
		if (runs % 2 === 1)
		{
			var temp = currBatting.nonStrikeBatsman;
			currBatting.strikeBatsman = currBatting.nonStrikeBatsman;
			currBatting.nonStrikeBatsman = temp;
		}
		currBowling.bowlers[currBowling.bowler].runs += (runs + extraRun);

		currBatting.score += (runs + extraRun);
		var newBall = {
			runs : runs,
			ballType : "E"
			typeOfExtra : extraType
		};
		currOver.push(newBall);		
		if(currBatting.numBalls % 6 === 0) {
			return 3;
		}

		return 4;
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
