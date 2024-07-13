const questions = [
    { question: "The sky is blue.", answer: true },
    { question: "Cats are mammals.", answer: true },
    { question: "The Earth is flat.", answer: false },
    { question: "Water freezes at 0 degrees Celsius.", answer: true },
    { question: "Humans have three legs.", answer: false },
    { question: "The capital of France is Paris.", answer: true },
    { question: "Fish can fly.", answer: false },
    { question: "A triangle has four sides.", answer: false },
    { question: "The sun rises in the west.", answer: false },
    { question: "Honey is made by bees.", answer: true }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    document.getElementById('result').textContent = '';
}

function checkAnswer(isTrue) {
    const currentQuestion = questions[currentQuestionIndex];
    const resultDiv = document.getElementById('result');

    if (isTrue === currentQuestion.answer) {
        resultDiv.textContent = 'Correct!';
        resultDiv.style.color = 'green';
        score++;
    } else {
        resultDiv.textContent = 'Wrong!';
        resultDiv.style.color = 'red';
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(loadQuestion, 1000); // Load the next question after a delay
    } else {
        setTimeout(() => {
            alert(`Quiz Completed! Your score is ${score} out of ${questions.length}`);
            document.getElementById('question').textContent = 'Quiz Completed!';
            document.getElementById('result').textContent = '';
        }, 1000);
    }
}

window.onload = loadQuestion;
