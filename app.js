const input = document.querySelector('input');
const button = document.querySelector('button');
const question = document.querySelector('.question');


function checkAnswer() {
    let userInput = input.value;
    if (userInput === "") return;
    let regexp = /(leonardo)?(\s)da(\s)?vinci/i;
    if (userInput.match(regexp)) {
        alert("Correct!");
        nextQuestion();
    } else {
        alert("Whoops, try again.");
    }
    input.value = "";
}

button.addEventListener('click', checkAnswer);