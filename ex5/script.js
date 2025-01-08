// DOM Elements
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const result = document.getElementById("result");
const playBtn = document.getElementById("play-button");
let userMove = null;

// Functions
function pickMove(self, targetOne, targetTwo, move) {
    self.classList.add("border-2", "border-black");
    targetOne.classList.remove("border-2", "border-black");
    targetTwo.classList.remove("border-2", "border-black");
    userMove = move;
}

function getComputerMove() {
    const move = ["Rock", "Paper", "Scissors"];
    return move[Math.floor(Math.random() * 3)];
}

function compareMoves(userMove, computerMove) {
    if ((userMove === "Rock" && computerMove === "Scissors") || (userMove === "Paper" && computerMove === "Rock") || (userMove === "Scissors" && computerMove === "Paper")) {
        result.textContent = `Player: ${userMove} vs. Comp: ${computerMove} >>> You win!`;
        userScore.textContent++;
    } else if (userMove === computerMove) {
        result.textContent = `Player: ${userMove} vs. Comp: ${computerMove} >>> Its a tie!`;
    } else {
        result.textContent = `Player: ${userMove} vs. Comp: ${computerMove} >>> Computer wins!`;
        computerScore.textContent++;
    }
}

function play(userMove) {
    if (userMove !== null) {
        const computerMove = getComputerMove();
        compareMoves(userMove, computerMove);
    } else {
        alert("Please pick a move!");
    }
}

// Pick Move
rockBtn.addEventListener("click", () => pickMove(rockBtn, paperBtn, scissorsBtn, "Rock"));
paperBtn.addEventListener("click", () => pickMove(paperBtn, rockBtn, scissorsBtn, "Paper"));
scissorsBtn.addEventListener("click", () => pickMove(scissorsBtn, rockBtn, paperBtn, "Scissors"));

// Play
playBtn.addEventListener("click", () => play(userMove));
