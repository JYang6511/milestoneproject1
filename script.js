const questions = [
    // Array containing quiz questions, each question object has a question, answers, and correctAnswer property
    {
        question: "Most points scored by a player in a NBA game?", // Question
        answers: ["81", "100", "65", "92"], // Array of answer choices
        correctAnswer: "100", // Correct answer
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
        question: "Which player in the NBA was nicknamed The Black Mamba?",
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
        question: "How many total games in a NFL Season?",
        answers: ["157 games", "190 games", "272 games", "300 games"],
        correctAnswer: "272 games",
    },
    {
        question: "What does the acronym NBA stand for?",
        answers: ["National Basketball Association", "No Beef Allowed", "National Basketball Academy", "No Body Asked"],
        correctAnswer: "National Basketball Association",
    },
    {
        question: "How many times has a NFL team gone undefeated during a regular season? (not including playoffs)",
        answers: ["One", "Five", "Three", "Four"],
        correctAnswer: "Four",
    },
    {  question: "",
       answers: [],
       correctAnswer: "",
    }
];

let startButton = document.querySelector(".start"); // Selecting the start button
let questionContainer = document.querySelector("#questionsdiv"); // Selecting the question container
let questionElement = document.querySelector(".questions"); // Selecting the question element
let answersElement = document.querySelector(".answers"); // Selecting the answers element
let scoreElement = document.querySelector(".score"); // Selecting the score element
let restartButton = document.querySelector(".restart"); // Selecting the restart button
let scoreCardElement = document.querySelector(".scorecard") // Selecting the score card element
let currentQuestionIndex = 0; // Variable to keep track of current question index
let score = 0; // Variable to keep track of score

// Event listener for the start button
startButton.addEventListener('click', startGame)

// Function to start the game
function startGame() {
    startButton.classList.add("containerhide"); // Hide the start button
    questionContainer.classList.remove("containerhide"); // Show the question container
    currentQuestionIndex = 0; // Reset current question index
    nextQuestion(currentQuestionIndex) // Call nextQuestion function to display the first question
}

// Function to display the next question
function nextQuestion(questionIndex) {
    let question = questions[questionIndex]; // Get the current question object
    questionElement.textContent = question.question; // Display the question
    answersElement.innerHTML="" // Clear previous answer choices

    // Loop through answer choices and create list items for each
    question.answers.forEach((answer, index) => {
        let answerChoice = document.createElement("li"); // Create list item element
        answerChoice.textContent = answer; // Set the text content of the list item to the answer choice
        answerChoice.addEventListener("click", () => chooseAnswer(answer, question.correctAnswer)); // Add event listener to handle answer selection
        answersElement.appendChild(answerChoice); // Append the answer choice to the answers element
    })
}

// Function to handle user's answer choice
function chooseAnswer(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) { // If the user's answer is correct
        score++; // Increment the score
        currentQuestionIndex++; // Move to the next question
        nextQuestion(currentQuestionIndex); // Display the next question
    } else {
        currentQuestionIndex++; // Move to the next question regardless of correctness
        nextQuestion(currentQuestionIndex); // Display the next question
    }
    
    updateScore(); // Update the displayed score
    endGame(); // Check if the game has ended
}

// Function to update the displayed score
function updateScore() {
    scoreElement.textContent = `Score: ${score}`; // Display the score
}

// Function to check if the game has ended
function endGame() {
    if (currentQuestionIndex === 10 ) { // If all questions have been answered
        questionElement.textContent = "Game Over!"; // Display "Game Over!"
        answersElement.innerHTML = ""; // Clear answer choices
        updateScore(); // Update the displayed score
    }
}

// Event listener for the restart button
restartButton.addEventListener("click", () => {
    location.reload(); // Reload the page to restart the game
});