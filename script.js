console.log("Hello and welcome to the game");

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * (Math.floor(3) - Math.ceil(1) + 1) + Math.ceil(1));
    
    if (computerChoice === 1) {
        let computerChoice = 'rock';
        return computerChoice;
    }
    else if (computerChoice === 2) {
        let computerChoice = 'paper';
        return computerChoice;
    }
    else if (computerChoice === 3) {
        let computerChoice = 'scissors';
        return computerChoice;
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Input rock, paper, or scissors?");
    
    if (humanChoice === "rock" || humanChoice === "Rock" || humanChoice === "ROCK") {
        let humanChoice = 'rock';
        return humanChoice;
    }
    else if (humanChoice === "paper" || humanChoice === "Paper" || humanChoice === "PAPER") {
        let humanChoice = 'paper';
        return humanChoice;
    }
    else if (humanChoice === "scissors" || humanChoice === "scissor" || humanChoice === "Scissors" || humanChoice === "Scissor" || humanChoice === "SCISSORS" || humanChoice === "SCISSOR") {
        let humanChoice = 'scissors';
        return humanChoice;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `You tied, you chose ${humanChoice} and computer chose ${computerChoice}`;
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore = humanScore + 1;
        return `You win, you chose ${humanChoice} and computer chose ${computerChoice}`;
    }
    else {
        computerScore = computerScore + 1;
        return `You lose, you chose ${humanChoice} and computer chose ${computerChoice}`;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`Round ${i + 1}`);
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
        console.log("-------------------------------------")
    }
    if (humanScore > computerScore) {
        console.log("Congratz you win!");
    }
    else if (humanScore === computerScore) {
        console.log("Almost, this game is a draw!")
    }
    else {
        console.log("Nice try, play again!")
    }
}