// Get computer's choice randomly
function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return "rock";
    } else if (randomNumber < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Variables to keep track of the score
let humanScore = 0;
let computerScore = 0;

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    let result = "";
    if (humanChoice === computerChoice) {
        result = `It's a tie! You both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}.`;
        humanScore++;
    } else {
        result = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`;
        computerScore++;
    }

    // Update the result and scores in the DOM
    document.getElementById("result").textContent = result;
    document.getElementById("humanScore").textContent = humanScore;
    document.getElementById("computerScore").textContent = computerScore;
}

// Function to handle the user's choice
function handleUserChoice(choice) {
    const computerChoice = getComputerChoice();
    playRound(choice, computerChoice);
}

// Function to restart the game
function restartGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("humanScore").textContent = humanScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("result").textContent = "";
}

// Adding event listeners to buttons
document.getElementById("rock").addEventListener("click", () => handleUserChoice("rock"));
document.getElementById("paper").addEventListener("click", () => handleUserChoice("paper"));
document.getElementById("scissors").addEventListener("click", () => handleUserChoice("scissors"));
document.getElementById("restartBtn").addEventListener("click", restartGame); // Restart game button
