$(document).ready(function(){
	takeQuiz();
});
//objects 
var question1 = {
	text: "1. What is the cat’s name?",
	answers: ["Midnight", "Zachery", "Shadow", "Thackery"],
	correctAnswer: 3,
	userRightA: false
}
var question2 = {
	text: "2. What Sanderson sister is the first to die at the end of the film?",
	answers: ["Sarah", "Winnie", "Mary", "Alison"],
	correctAnswer: 0,
	userRightA: false
}
var question3 = {
	text: "3. Who has to light the Black Flamed Candle?",
	answers: ["A witch", "A child", "A virgin", "Anyone"],
	correctAnswer: 2,
	userRightA: false
}
var question4 = {
	text: "4. What famous house is shown in the background of the movie?",
	answers: ["The Christmas Vacation house", "The Home Alone house", "The House from Casper", "The House from Beetlejuice"],
	correctAnswer: 0,
	userRightA: false
}
var question5 = {
	text: "5. What month was Hocus Pocus released in?",
	answers: ["September", "July", "October", "August"],
	correctAnswer: 1,
	userRightA: false
}
var allQuestions = [question1, question2, question3, question4, question5];
var currentQuestionIndex = 0;


function displayQuestions(){
	// sets current question = the question the user is on
	var currentQuestion = allQuestions[currentQuestionIndex];
	// matches the question the user is on to the correct text from the object
	$('.text').html(currentQuestion.text);
	var answersText ="";
	// sets current question to list of all possible answers
	var answers = currentQuestion.answers;
	for (var i=0; i <= answers.length -1; i++){
		answersText=answersText + '<input type="radio" name="questions" value="'+ i +'" class="'+ i +'">'+ answers[i] +'<br>';
	}
	$('form').append(answersText);
};
function selectAnswer(){
	$('input[type="radio"]').click(function(e){
		var feedback = $(e.target).hasClass(allQuestions[currentQuestionIndex].correctAnswer);
		$('#next').prop("disabled", false);
		if (feedback === true){
			$('.feedback').html("Correct Answer!");
			allQuestions[currentQuestionIndex].userRightA = true;
		}
		else {
			$('.feedback').html("Incorrect!");
			allQuestions[currentQuestionIndex].userRightA = false;	
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
		//track progress
		$('#progress').html((currentQuestionIndex+1)+"/"+allQuestions.length)
	});
	$('#next').click(function(){
		$(this).prop("disabled", true);
		$('.questions .text').html("");
		$('.questions form').html("");
		if (currentQuestionIndex === allQuestions.length -1){
			var score =0;
			allQuestions.forEach(function(item){
				if (item.userRightA === true){
					score++;
				}
			});
			$('.score').html("You Got " + score+"/"+allQuestions.length+ " Correct!");
			$('#questions_page').hide();
			$('#results').show();
		}
		else {
			changeQuestion();
			$('#progress').html((currentQuestionIndex+1)+"/"+allQuestions.length)
			selectAnswer();
		};
	});
	retakeQuiz();
};
//restart quiz set all back to 0
function retakeQuiz(){
	$('#retake').click(function(){
		$('#start_page').show();
		currentQuestionIndex=0;
		selections=[];
		feedback="";
	});
};




