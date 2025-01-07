// Elements
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissors");
const result = document.getElementById("result");
const playBtn = document.getElementById("play-button");
let userMove = null;

// Functions
function getComputerMove() {
    const move = ["Rock", "Paper", "Scissor"];
    return move[Math.floor(Math.random() * 3)];
}

function compareMoves(userMove, computerMove) {
    if (userMove === computerMove) {
        result.textContent = "It's a tie!";
    } else if (userMove === "Rock" && computerMove === "Scissor") {
        result.textContent = "You win!";
        userScore.textContent++;
    } else if (userMove === "Paper" && computerMove === "Rock") {
        result.textContent = "You win!";
        userScore.textContent++;
    } else if (userMove === "Scissor" && computerMove === "Paper") {
        result.textContent = "You win!";
        userScore.textContent++;
    } else {
        result.textContent = "Computer wins!";
        computerScore.textContent++;
    }
}

rockBtn.addEventListener("click", () => {
    rockBtn.classList.add("border-2", "border-black");
    paperBtn.classList.remove("border-2", "border-black");
    scissorBtn.classList.remove("border-2", "border-black");
    userMove = "Rock";
});

paperBtn.addEventListener("click", () => {
    rockBtn.classList.remove("border-2", "border-black");
    paperBtn.classList.add("border-2", "border-black");
    scissorBtn.classList.remove("border-2", "border-black");
    userMove = "Paper";
});

scissorBtn.addEventListener("click", () => {
    rockBtn.classList.remove("border-2", "border-black");
    paperBtn.classList.remove("border-2", "border-black");
    scissorBtn.classList.add("border-2", "border-black");
    userMove = "Scissor";
});

playBtn.addEventListener("click", () => {
    const computerMove = getComputerMove();
    compareMoves(userMove, computerMove);
    // console.log();
});
