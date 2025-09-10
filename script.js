
function getComputerChoice() {
    // Generate a random number between 0-2
    let randNum = Math.floor(Math.random() * 3)

    // Return either "rock", "paper", or "scissors" depending on random num
    if (randNum === 0) {
        return "rock"
    } else if (randNum === 1) {
        return "paper"
    } else {
        return "scissors"
    }

}

function getHumanChoice() {
    // Ask user for input
    let humanChoice = prompt("What’s your move? (rock, paper, or scissors): ");
    return humanChoice;

}

// Initialize score count 
let humanScore = 0
let computerScore = 0

let humanScoreText = document.querySelector('#human-score');
let computerScoreText = document.querySelector('#computer-score');
let messageDiv = document.querySelector('#message');

// Declare function to play one round
const playRound = (humanChoice, computerChoice) => {
    let newHumanChoice = humanChoice.toLowerCase();
    let message = "";

    if (newHumanChoice === computerChoice) {
        message = "You tied!"
    }

    else if (
        (newHumanChoice === 'rock' && computerChoice === 'scissors') ||
        (newHumanChoice === 'paper' && computerChoice === 'rock') ||
        (newHumanChoice === 'scissors' && computerChoice === 'paper')
    ) {

        message = `You win! ${newHumanChoice} beats ${computerChoice}`;
        humanScore++;
        humanScoreText.textContent = humanScore.toString();
    }
    else {
        message = `You lose! ${computerChoice} beats ${newHumanChoice}`;
        computerScore++;
        computerScoreText.textContent = computerScore.toString();
    }

    if (humanScore === 5) {
        announceWinner('user');
    } else if (computerScore === 5) {
        announceWinner('computer');
    }

    messageDiv.textContent = message;
    console.log(message);
}

let choices = document.querySelector("#choices")

choices.addEventListener('click', (event) => {
    let computerChoice = getComputerChoice();
    playRound(event.target.id, computerChoice);
});

function announceWinner(winner) {
    alert("Winner is: " + winner);

    humanScoreText.textContent = '0';
    humanScore = 0;

    computerScoreText.textContent = '0';
    computerScore = 0;
}
