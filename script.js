const questions = [
    {
        question: "Most points scored by a player in a NBA game?",
        answers: ["81", "100", "65", "92"],
        correctAnswer: "100",
    },
    {
        question: "Which NBA player is the NBA logo modeled after?",
        answers: ["Lebron James", "Michael Jordan", "Jerry West", "Kobe Bryant"],
        correctAnswer: "Jerry West",
    },
    {
        question: "Which team won the first Super Bowl?",
        answers: ["Green Bay Packers", "Kansas City Chiefs", "San Francisco 49ers", "Pittsburgh Steelers"],
        correctAnswer: "Green Bay Packers",
    },
];

let startButton = document.querySelector(".start")
let questionContainer = document.querySelector("#questionsdiv")
let questionElement = document.querySelector(".questions")
let answersElement = document.querySelector(".answers")
console.log(answersElement)
let currentQuestionIndex = 0 



startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add("containerhide");
    questionContainer.classList.remove("containerhide");
    currentQuestionIndex = 0;
    nextQuestion(currentQuestionIndex)
}

function nextQuestion(questionIndex) {
    let question = questions[questionIndex]
    questionElement.textContent = question.question;


    question.answers.forEach((answer, index) => {
        let answerChoice = document.createElement("li")
        answerChoice.textContent = answer;
        answersElement.appendChild(answerChoice)
        console.log(answerChoice)
    })

}

function chooseAnswer() {

}

