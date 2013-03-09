/*
 * variables.js
 * ----------------------------------------
 * Initializes and tracks variables for web application.
 * 
 */

var currStep = 0;

var currBatting;
var currBowling;

// Team One


var currOver = new Array();

for(int i = 0; i < 6; i++) {
	currOver.push(-1);
}

var teamOne = new Object();
teamOne.Name = "";
teamOne.bowlers = new Array();
teamOne.batsmen = new Array();
teamOne.score = 0;
teamOne.wickets = 0;
teamOne.numBalls = 0;
teamOne.strikeBatsman = -1;
teamOne.nonStrikeBatsman = -1;
teamOne.bowler = -1;

// Team Two

var teamTwo = new Object();
teamTwo.Name = "";
teamTwo.bowlers = new Array();
teamTwo.batsmen = new Array();
teamTwo.score = 0;
teamTwo.wickets = 0;
teamTwo.numBalls = 0;
teamTwo.strikeBatsman = -1;
teamTwo.nonStrikeBatsman = -1;
teamTwo.bowler = -1;