$(document).ready(function(){
	$("button#theme").click(function() {
		$("body").css("background-color", "green")
		$(this).remove();
		$("button#reply").after("<p>You have to refresh the page to get the last background color </P>");
	});
	$("button#image").click(function() {
		$("button#image").after("<img src='https://i.ytimg.com/vi/fLJBzhcSWTk/maxresdefault.jpg' style='float: bottom;'>");
	});
	$("button#cat").click(function() {
		alert("meow! meow!");
	});
	$("button#dog").click(function() {
		alert("woof! woof!");
	});
});