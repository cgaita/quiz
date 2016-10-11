/*
~1. list question one at a time
~2. pick answer
~3. only select with button
~4. give feedback
~5. track question number
6. no skipping
~7. only picking one answer
8.
8. give score at end
9. retake
*/
$(document).ready(function(){
	takeQuiz();
	
});
//objects 
var question1 = {
	text: "1. What is the cat’s name?",
	answers: ["Midnight", "Zachery", "Shadow", "Thackery"],
	correctAnswer: 3
}
var question2 = {
	text: "2. What Sanderson sister is the first to die at the end of the film?",
	answers: ["Sarah", "Winnie", "Mary", "Alison"],
	correctAnswer: 0
}
var question3 = {
	text: "3. Who has to light the Black Flamed Candle?",
	answers: ["A witch", "A child", "A virgin", "Anyone"],
	correctAnswer: 2
}
var question4 = {
	text: "4. What famous house is shown in the background of the movie?",
	answers: ["The Christmas Vacation house", "The Home Alone house", "The House from Casper", "The House from Beetlejuice"],
	correctAnswer: 0
}
var question5 = {
	text: "5. What month was Hocus Pocus released in?",
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
		answersText=answersText + '<input type="radio" name="questions" value="'+ i +'" class="'+ i +'">'+ answers[i] +'<br>';
	}
	$('form').append(answersText);
}
	
function selectAnswer(){
	$('input[type="radio"]').click(function(e){
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

	
};
function takeQuiz(){
	$('#start').click(function(){
		$('#start_page').hide();
		$('#questions_page').show();
		$('#results').hide();
		displayQuestions();
		selectAnswer();
		//track progress not working
		$('#progress').html((currentQuestionIndex+1)+"/"+allQuestions.length)
	});
	$('#next').click(function(){
		$('.questions .text').html("");
		$('.questions form').html("");
			console.log(currentQuestionIndex, allQuestions.length);
		if (currentQuestionIndex === allQuestions.length -1){

			$('#questions_page').hide();
			$('#results').show();
		}
		else {
			changeQuestion();
			$('#progress').html((currentQuestionIndex+1)+"/"+allQuestions.length)
			selectAnswer();
		};
	
	});
};
/*restart quiz set all back to 0
function retakeQuiz(){
	$('#retake').click(function(){
		
	});
};*/






