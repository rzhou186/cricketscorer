/*
 * mailto.js
 * ----------------------------------------
 * Initializes mailto URLs in application.
 * 
 */

function initContacts(email){
	$('#contact-mailto').attr('href', 'mailto:' + email);
}

function emailScorecard(scorecard) {
	var email = scorecard.replace(/XXXX/g, "%0A");
	var emailTwo = email.replace(/ /g, "%20");
	$('#emailScorecard').attr('href', 'mailto:?Body=' + emailTwo);

}