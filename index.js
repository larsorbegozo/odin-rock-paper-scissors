const playableButtons = document.querySelectorAll('.button-container button')
const playerText = document.querySelector('.player')
const computerText = document.querySelector('.computer')
const scorePlayer = document.querySelector('.scores .player .score')
const scoreComputer = document.querySelector('.scores .computer .score')
const result = document.querySelector('#result')
const resetButton = document.querySelector('#reset')

let resultPlayerNumber = 0
let resultComputerNumber = 0

function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 10) + 1
    if(randomValue <= 3) { // 1 2 3 
        return "ROCK"
    } else if(randomValue <= 6 && randomValue >= 4) { // 4 5 6
        return "PAPER"
    } else { /// 7 8 9
        return "SCISSORS"
    }
}

function playSingleRound(playerSelection, computerSelection) {
    console.log(`Player: ${playerSelection}`)
    console.log(`Computer: ${computerSelection}`)
    console.log(`Player score: ${resultPlayerNumber}`)
    console.log(`Computer score: ${resultComputerNumber}`)
    if (playerSelection == null) {
        return 1
    } else if(playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "PAPER") {
        return "computer"
    } else if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "ROCK") {
        return "tie"
    } else if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS") {
        return "player"
    }

    if (playerSelection == null) {
        return 1
    } else if(playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "PAPER") {
        return "tie"
    } else if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK") {
        return "player"
    } else if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "SCISSORS") {
        return "computer"
    }

    if (playerSelection == null) {
        return 1
    } else if(playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER") {
        return "player"
    } else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "ROCK") {
        return "computer"
    } else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "SCISSORS") {
        return "tie"
    }
}

function resetGame() {
    playerText.style.color = 'white'
    computerText.style.color = 'white'
    resultComputerNumber = 0
    resultPlayerNumber = 0
    scoreComputer.textContent = parseInt(resultComputerNumber)
    scorePlayer.textContent = parseInt(resultPlayerNumber)
    result.textContent = "Press any button"
}

function verification() {
    if(resultComputerNumber === 5) {
        computerText.style.color = 'green'
        scoreComputer.textContent = parseInt(resultComputerNumber)
        result.textContent = "Press RESET to play again"
        console.log("Computer wins")
    } else if(resultPlayerNumber === 5) {
        playerText.style.color = 'green'
        scorePlayer.textContent = parseInt(resultPlayerNumber)
        result.textContent = "Press RESET to play again"
        console.log("Player wins")
    } else if(resultComputerNumber >= 5 || resultPlayerNumber >= 5) {
        resetGame()
    }
}

function playGame(playerSelection, computerSelection) {
    if(playSingleRound(playerSelection.toUpperCase(), computerSelection) === "player") {
        resultPlayerNumber++
        scorePlayer.textContent = parseInt(resultPlayerNumber)
        result.textContent = "Player Wins"
    } else if(playSingleRound(playerSelection.toUpperCase(), computerSelection) === "computer") {
        resultComputerNumber++
        scoreComputer.textContent = parseInt(resultComputerNumber)
        result.textContent = "Computer Wins"
    } else {
        result.textContent = "Tie"
    }

    verification()
}

resetButton.addEventListener('click', () => {
    resetGame()
})

playableButtons.forEach((button) => {
    if(resultComputerNumber < 5 && resultPlayerNumber < 5) {
        button.addEventListener('click', () => {
            playGame(button.id, getComputerChoice())
        })
    }
})