const input = document.querySelector('input');
const button = document.querySelector('button');
let question = document.querySelector('.question');
const allQuestions = [
    {
        question: "Who painted the Mona Lisa?",
        answers: {
            a: "da Vinci",
            b: "Michelangelo"
        },
        question: "What nut is in the center of a Ferrero Rocher?",
        answers: {
            a: "Macadamia",
            b: "Hazelnut"
        },
        question: "Which country is Brie cheese originally from?",
        answers: {
            a: "France",
            b: "Belgium"
        },
        question: "What is the largest country in the world?",
        answers: {
            a: "India",
            b: "Russia"
        },
        question: "What is the capital of Iceland?",
        answers: {
            a: "Amsterdam",
            b: "Reykjavík"
        },
        
    }];



button.addEventListener('click', checkAnswer);
