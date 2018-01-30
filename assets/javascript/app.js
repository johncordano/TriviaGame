
// Creates a array that stores objects with the questions, choices, and correct answers.
var triviaData = [
	{		
		question: "As a protest to Hollywood's portrayal of Native Americans in film, Marlon Brando declined an Academy Award for his performance in what movie?",
        choice:["The Godfather", "A Streetcar Named Desire", "On the Waterfront", "Last Tango in Paris" ],
        answer: 0
	},

	{	
		question: "Many movies have numerous nominations and win many Oscars. However, the 'Big Five' Academy Award categories are Best Picture, Best Director, Best Actor, Best Actress and Best Screenplay. All of the following movies won Best Picture and Best Director. However, which one of these won the Big Five?",
        choice: ["Gone with the Wind (1939)", "Titantic (1997)", "West Side Story (1961)", "One Flew Over the Cuckoos Nest (1975)"],
        answer: 3
	},

	{
		question: "Who was the only British actor to win the Oscar for best actor during the 1980s?",
        choice: ["Peter Finch" , "Ben Kingsley" , "Ian Holm" , "Tom Wilkenson"],
		answer: 1
	},

	{
		question: "In 2007, 'Dreamgirls' was nominated for eight Oscars, more than any other film that year, but did not receive a Best Picture nomination. Which of the following was the last film prior to 'Dreamgirls' to lead all others in nominations without securing a best picture nod?",
        choice: ["Born Yesterday", "Glory", "Fiddler on the Roof" , "Dreamgirls was the first."],
		answer: 3
	}
];

// Creates variables to store the number of correct answers, incorrect answers, and the number of times the array is looped through.
var correct = 0;
var incorrect = 0;
var round = 0;

// Creates the functionality to start and stop the timer to show the time change during the game.
function clock() {
	gameTimer = setInterval(decrement, 1000)
}

var counter = 60;

function decrement(){
	console.log("counter",counter);
	counter--;
	$("#timer").text("Remaining time:" + counter);

	if (counter === 0) {
		clearInterval(gameTimer)
		console.log("out of time")
	// Shows results at the end of the game.
	setTimeout(function() {
		console.log("times up!");
		$("#main-content").empty();
		var answered = round + "/" + triviaData.length;
		var gameStats = $('<p>');
		gameStats.text(answered);
		var message = $('<h1>');
		message.text("Game Over!")
		$("#main-content").append(message, gameStats);
		},1000);
		}

	}
	


// Sets the correct, incorrect, and time information when the document is ready.
$(document).ready(function() {
	$("#correct").text("Correct: " + correct);
	$("#incorrect").text("Incorrect: " + incorrect);
	$("#timer").text("Remaining Time: " + counter);

	$("#start").on("click", function(){
		$("#timer, #correct, #incorrect").removeClass("hide");
		$("#main-content").empty();
		clock();
		// Loops through the TriviaData array to display questions.
		for (var i = 0; i < triviaData.length; i++) {
			var questionElem = $("<h2>");
			questionElem.addClass("question");
			questionElem.text(triviaData[i].question);
			$("#main-content").append(questionElem);
			//Creates a bootstrap button group wrapper.
			var btnGrp = $("<div>");
			btnGrp.addClass("btn-group");
			btnGrp.attr("role", "group");
			btnGrp.attr("id", "bg" + i);
			btnGrp.attr("aria-label","first group");
			$("#main-content").append(btnGrp);
			// Loops through the answers array applicable to each question.
			for (var j = 0; j < triviaData[i].choice.length; j++) {
			// Creates a bootstrap button group.
			var btnAnswer = $("<button>");
			btnAnswer.addClass("answer btn btn-secondary");
			btnAnswer.attr("type", "button");
			btnAnswer.attr("name", i);
			btnAnswer.attr("id","A" + j);
			btnAnswer.attr("value", j);
			btnAnswer.text(triviaData[i].choice[j]);
			$("#bg"+i).append(btnAnswer);	
			};	
		};
	});

	$("#main-content").on("click", ".answer", function() {
		if(round < triviaData.length) {
			round++
			var btnName = $(this).attr("name");
			var btnList = $(".btn[name= "+ "'"+ btnName +"'" +"]");
			console.log(btnList)
			for (var i = 0; i<btnList.length; i++) {
				btnList[i].classList.remove("selected");
				btnList[i].setAttribute("disabled", true);
			}
			$(this).addClass("selected");
			var selectedBtn = parseInt($(this).val());
			var questionIndex = parseInt($(this).attr("name"));
			console.log(selectedBtn);
			if(selectedBtn === triviaData[questionIndex].answer) {
				console.log("correct");
				correct++
				$("#correct").text("Correct: " + correct);
			} else {
				console.log("incorrect")
				incorrect++
				$("#incorrect").text("Incorrect: " + incorrect);
			}
		}
		
		
	});


});