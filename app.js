/*
1. list question one at a time
2. pick answer
3. track question number
4. no skipping
5. give score at end
6. retake
*/
$(document).ready(function(){
	$('#Start').click(function(){
	$('#start_page').hide();
	$('#questions').show();
	displayQuestions();
	$('#results').hide();
	});

});
/*function takeQuiz(){
	$('#Start').click
}*/
var allQuestions = ["question1", "question2", "question3", "question4", "question5"];

//objects 
var question1 = {
	text: "What is the cat’s name?",
	answers: ["Midnight", "Zachery", "Shadow", "Thackery"],
	correctAnswer: 3
}
var question2 = {
	text: "What Sanderson sister is the last to die?",
	answers: ["Mary", "Winnie", "Sarah", "Alison"],
	correctAnswer: 0
}
var question3 = {
	text: "Who has to light the Black Flamed Candle?",
	answers: ["A witch", "A child", "A virgin", "Anyone"],
	correctAnswer: 2
}
var question4 = {
	text: "What famous house is shown in the background of the movie?",
	answers: ["The Christmas Vacation house", "The Home Alone house", "The House from Casper", "The House from Beetlejuice"],
	correctAnswer: 0
}
var question5 = {
	text: "What month was Hocus Pocus released in?",
	answers: ["September", "July", "October", "August"],
	correctAnswer: 1
}
function displayQuestions(){

 };

function changeQuestion(){
	$('#Next').click(function(){

	});
};










