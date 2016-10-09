/*
1. list question one at a time
2. pick answer
3. track question number
4. no skipping
5. give score at end
6. retake
*/
$(document).ready(function(){
	$('#start').click(function(){
		$('#start_page').hide();
		$('#questions_page').show();
		displayQuestions();
		$('#results').hide();
		selectAnswer();
	});
	$('#next').click(function(){
		$('.questions .text').html("");
		$('.questions ul').html("");
		changeQuestion();
		selectAnswer();
		});
	
});
/*function takeQuiz(){
	$('#start').click
}*/

//objects 
var question1 = {
	text: "What is the cat’s name?",
	answers: ["Midnight", "Zachery", "Shadow", "Thackery"],
	correctAnswer: 3
}
var question2 = {
	text: "What Sanderson sister is the first to die at the end of the film?",
	answers: ["Sarah", "Winnie", "Mary", "Alison"],
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
var allQuestions = [question1, question2, question3, question4, question5];
var currentQuestionIndex = 0;

function displayQuestions(){
	var currentQuestion = allQuestions[currentQuestionIndex];
	$('.text').html(currentQuestion.text);
	var answersText ="";
	var answers = currentQuestion.answers;
	for(var i=0; i <= answers.length -1; i++){
		answersText=answersText + '<li class="answers '+ i +'"> ' + answers[i] + '</li>'
	}
$('ul').append(answersText);
 };

function selectAnswer(){
	$('.answers').click(function(e){
		//console.log(e);
		console.log($(e.target).hasClass(allQuestions[currentQuestionIndex].correctAnswer));
	});
};
function changeQuestion(){
	currentQuestionIndex++;
	displayQuestions();
};









