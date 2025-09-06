
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
humanScore = 0
computerScore = 0

function playRound(humanChoice, computerChoice) {
    // your code here!
    newHumanChoice = humanChoice.toLowerCase();
    message = "";

    if (newHumanChoice === computerChoice) {
        message = "You tied!"
    }

    else if (
        (newHumanChoice === 'rock' && computerChoice === 'scissors') ||
        (newHumanChoice === 'paper' && computerChoice === 'rock') ||
        (newHumanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        message = `You win!, ${newHumanChoice} beats ${computerChoice}.`
        humanScore++;
    }
    else {
        message = `You lose!, ${computerChoice} beats ${newHumanChoice}.`
        computerScore++;
    }

    console.log(computerChoice);
    console.log(message);
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
