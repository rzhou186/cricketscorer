/*
 * mailto.js
 * ----------------------------------------
 * Initializes mailto URLs in application.
 * 
 */

function initContacts(email){
	$('#contact-mailto').attr('href', 'mailto:?Body=Please%20provide%20a%20link%20and%20description%20of%20your%20suggestion.');
}

function emailScorecard(scorecard) {

	scorecard.replace(/ /g, "%20");
	scorecard.replace(/\n/g, "%0A");
	$('#emailScorecard').attr('href', 'mailto:?Body=' + scorecard);

}