/*
~1. list question one at a time
~2. pick answer
~3. give feedback
4. track question number
5. no skipping
6. only picking one answer
7. give score at end
8. retake
*/
$(document).ready(function(){
	takeQuiz();
	/*$('#start').click(function(){
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
		});*/
	
});
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
	for (var i=0; i <= answers.length -1; i++){
		answersText=answersText + '<li class="answers '+ i +'"><button class="button '+ i +'"></button>' + answers[i] + '</li>'
	}
	$('ul').append(answersText);
}

// shows results page after questions
	$('#next').click(function(){
		if (currentQuestionIndex === allQuestions.length -1){
		$('#questions_page').hide();
		$('#results').show();
		};
	});
	
function selectAnswer(){
	$('.answers').click(function(e){
		var feedback = $(e.target).hasClass(allQuestions[currentQuestionIndex].correctAnswer);
		if (feedback === true){
			$('.feedback').html("Correct Answer!");
		}
		else {
			$('.feedback').html("Incorrect!");
		}
	});

};
function changeQuestion(){
	currentQuestionIndex++;
	displayQuestions();
	$('.feedback').html("");
	//track progress not working
	/*
		$('#progress').html(function(){
		
		});
	
	*/
};
function takeQuiz(){
	$('#start').click(function(){
		$('#start_page').hide();
		$('#questions_page').show();
		$('#results').hide();
		displayQuestions();
		selectAnswer();
	});
	$('#next').click(function(){
		$('.questions .text').html("");
		$('.questions ul').html("");
		changeQuestion();
		selectAnswer();
		});
};
/* restart quiz set all back to 0
function retakeQuiz(){
	$('#retake').click(function(){
	
	});
};*/






