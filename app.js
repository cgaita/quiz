$(document).ready(function(){
	$('#question_page').hide();
	$('#').click(function(){
		$('#question_page').hide();
		$('#start_page').show();
	});
	$('#new_game').click(function(){
		$('#start_page').hide();
		$('#question_page').show();
	});
});