let startButton = document.querySelector(".start")
let questionContainer = document.querySelector("#questions")

const questions = [
    {
        question: 'Most points scored by one player in a NBA game?',
        choices: 
    }
]

startButton.addEventListener('click', startGame)

function startGame() {
startButton.classList.add("containerhide")
questionContainer.classList.remove("containerhide")
nextQuestion()
}

function nextQuestion() {


}

function chooseAnswer() {

}