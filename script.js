
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

function playGame() {
    // Initialize score count 
    let humanScore = 0
    let computerScore = 0

    // Declare function to play one round
    function playRound(humanChoice, computerChoice) {
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
            message = `You win!, ${newHumanChoice} beats ${computerChoice}.`
            humanScore++;
        }
        else {
            message = `You lose!, ${computerChoice} beats ${newHumanChoice}.`
            computerScore++;
        }
        return message;
    }

    // Run 5 rounds of the game
    let i = 0
    while (i < 5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        i++;
    }

    // Declare the winner
    if (humanScore > computerScore) {
        console.log("You win!");
    }
    else if (humanScore < computerScore) {
        console.log("Computer wins!");
    }
    else {
        console.log("Game ends in a tie!");
    }
}

playGame();
