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
    {
        question: "Which quarterback has the most rings in NFL history?",
        answers: ["Peyton Manning", "Jon Elway", "Tom Brady", "Aaron Rodgers"],
        correctAnswer: "Tom Brady",
    },
    {
        question: "Which player in the NBA was nicknamed the Black Mamba?",
        answers: ["Kobe Bryant", "Magic Johnson", "Lebron James", "Paul Pierce"],
        correctAnswer: "Kobe Bryant",
    },
    {
        question: "How long is a regulation NBA game?",
        answers: ["60 minutes", "48 minutes", "120 minutes", "90 minutes"],
        correctAnswer: "48 minutes",
    },
    {
        question: "Who is the current commissioner of the NFL?",
        answers: ["Adam Silver", "Robert Kraft", "Mark Cuban", "Roger Goodell"],
        correctAnswer: "Roger Goodell",
    },
    {
        question: "Which team won the first Super Bowl?",
        answers: ["Green Bay Packers", "Kansas City Chiefs", "San Francisco 49ers", "Pittsburgh Steelers"],
        correctAnswer: "Green Bay Packers",
    },
    {
        question: "Which team won the first Super Bowl?",
        answers: ["Green Bay Packers", "Kansas City Chiefs", "San Francisco 49ers", "Pittsburgh Steelers"],
        correctAnswer: "Green Bay Packers",
    },
    {
        question: "Which team won the first Super Bowl?",
        answers: ["Green Bay Packers", "Kansas City Chiefs", "San Francisco 49ers", "Pittsburgh Steelers"],
        correctAnswer: "Green Bay Packers",
    },

];

let startButton = document.querySelector(".start");
let questionContainer = document.querySelector("#questionsdiv");
let questionElement = document.querySelector(".questions");
let answersElement = document.querySelector(".answers");
let scoreElement = document.querySelector(".score");
let nextButton = document.querySelector(".nextquestion");
let currentQuestionIndex = 0 ;
let score = 0;



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
    answersElement.innerHTML=""


    question.answers.forEach((answer, index) => {
        let answerChoice = document.createElement("li")
        answerChoice.textContent = answer;
        answerChoice.addEventListener("click", () => chooseAnswer(answer, question.correctAnswer));
        answersElement.appendChild(answerChoice)
        
    })

}

function chooseAnswer(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
        score++;
        alert("Correct!")
    } else {
        alert(`Incorrect, the correct answer is ${correctAnswer}`)
    }
   
    updateScore();
}



function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}

function endGame() {
    questionElement.textContent = "Quiz Over!";
    answersElement.innerHTML = "";
    nextButton.style.display = "none";
    updateScore();
}

nextButton.addEventListener("click", () => {

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        nextQuestion(currentQuestionIndex);
       
    } else {
        endGame();
    }
});