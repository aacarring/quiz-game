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

//presently, the problem is that each click runs checkAnswer, which only deals with the first question and will fail to allow the user to move on to further questions, must resolve
/* function checkAnswer() {
    question.textContent = questions[0];
    let userInput = input.value;
    let davinciRegex = /(leonardo)?(\s)?da(\s)?vinci/i;
    if (userInput.match(davinciRegex)) {
        alert("Correct!");
        checkTwo();
    } else {
        alert("Whoops, try again...");
    }
    input.value = "";

    function checkTwo() {
        question = questions[1];
        let hazelnutRegex = /(a)?(\s)?hazelnut/i;
        if (userInput.match(hazelnutRegex)) {
            alert("Correct!");
        } else {
            alert("Nope.");
        }
    }
}
*/


button.addEventListener('click', checkAnswer);
