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
    playerSelection = prompt("Choose: ROCK|PAPER|SCISSORS")
    computerSelection = getComputerChoice()

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

function game() {
    let i = 0
    let computerWins = 0
    let playerWins = 0
    let ties = 0
    let winner = ""
    while(i < 5) {
        winner = playSingleRound()
        if(winner == 1) {
            return "Canceled."
        } else if(winner == "player") {
            console.log("You Win!")
            playerWins++
        } else if(winner == "computer"){
            console.log("You Lose.")
            computerWins++
        } else {
            console.log("Tie.")
            ties++
        }
        i++
    }
    return `Player: ${playerWins} - Computer: ${computerWins} \nTies: ${ties}`
}

console.log(game())