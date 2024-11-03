let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let resultMessage;

    if (humanChoice === computerChoice) {
        resultMessage = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
        humanScore++;
    } else {
        resultMessage = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
        computerScore++;
    }

    displayResults(resultMessage);
    displayScore();
    checkWinner();
}

function displayResults(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
}

function displayScore() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
}

function checkWinner() {
    if (humanScore === 5) {
        alert("Congratulations! You are the overall winner!");
        resetGame();
    } else if (computerScore === 5) {
        alert("Sorry, the computer wins overall!");
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    displayScore();
    displayResults("");
}

// Event listeners for buttons
document.getElementById('rock').addEventListener('click', () => playRound("rock"));
document.getElementById('paper').addEventListener('click', () => playRound("paper"));
document.getElementById('scissors').addEventListener('click', () => playRound("scissors"));
