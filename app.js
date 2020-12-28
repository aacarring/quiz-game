const input = document.querySelector('input');
const button = document.querySelector('button');
let quizContainer = document.querySelector('.questions');
const questions = [
    {
        question: "Who painted the Mona Lisa?",
        answers: {
            a: "da Vinci",
            b: "Michelangelo"
        },
        correctAnswer: "a"
    },
    {
        question: "What nut is in the center of a Ferrero Rocher?",
        answers: {
            a: "Macadamia",
            b: "Hazelnut"
        }, 
        correctAnswer: "b"
    },
    {
        question: "Which country is Brie cheese originally from?",
        answers: {
            a: "France",
            b: "Belgium"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the largest country in the world?",
        answers: {
            a: "India",
            b: "Russia"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Iceland?",
        answers: {
            a: "Amsterdam",
            b: "Reykjavík"
        },
        correctAnswer: "b"   
    }];


    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        let output = [];
        let answers;
    
        // for each question...
        for(let i=0; i < questions.length; i++){
            
            // first reset the list of answers
            answers = [];
    
            // for each available answer to this question...
            for(letter in questions[i].answers){
    
                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
    
            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }

showQuestions(questions, quizContainer);

function showResults(questions, quizContainer){
	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
            numCorrect++;
            answerContainers[i].style.color = 'green';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	if (numCorrect === 5) {
        alert("Congrats, you passed the quiz!");
    } else {
        alert("Try again...");
    }
}

// on submit, show results
button.onclick = function(){
	showResults(questions, quizContainer);
}