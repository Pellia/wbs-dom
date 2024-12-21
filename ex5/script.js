function getComputerMove() {
    const move = ["rock", "paper", "scissor"];
    return move[Math.floor(Math.random() * 3)];
}

function compareMoves(userMove, computerMove) {
    if (userMove === computerMove) {
        return "It's a tie!";
    } else if (userMove === "rock" && computerMove === "scissors") {
        return "You win!";
    } else if (userMove === "paper" && computerMove === "rock") {
        return "You win!";
    } else if (userMove === "scissors" && computerMove === "paper") {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}
