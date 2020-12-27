const input = document.querySelector('input');
const button = document.querySelector('button');
let question = document.querySelector('.question');
const questions = [
    "Who painted the Mona Lisa?",
    "What nut is in the center of a Ferrero Rocher?",
    "Which country is Brie cheese originally from?",
    "What is the largest country in the world?",
    "What is the capital of Iceland?"
];


/* function checkAnswer() {
    if (question.textContent === questions[0]) {
        questionOne();
    } else if (question.textContent === questions[1]) {
        questionTwo();
    } else if (question.textContent === questions[2]) {
        questionsThree();
    } else if (question.textContent === questions[3]) {
        questionsFour();
    } else if (question.textContent === questions[4]) {
        questionFive();
    }
}

    function questionOne() {
        let userInput = input.value;
        if (userInput === "") return;
        let davinciRegex = /(leonardo)?(\s)?da(\s)?vinci/i;
        if (userInput.match(davinciRegex)) {
            alert("Correct! Four more to go.");
            question.textContent = questions[1];
        } else {
            alert("Whoops, try again.");
        }
        input.value = "";
    }

    function questionTwo() {
        let userInput = input.value;
        let hazelnutRegex = /(a)?(\s)?hazelnut/i;
        if (userInput.match(hazelnutRegex)) {
            alert("Correct! Three more to victory.")
        } else {
            alert("Have you really never had a Ferrero Rocher? Try again.");
        }
        input.value = "";  
    }
*/

button.addEventListener('click', checkAnswer);
