

function getComputerChoice() {
    let choice = ["rock", "paper", "scissor"]
    let computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice
}

function getHumanChoice() {
    let humanChoice = document.getElementById("answer").value.toLowerCase();
    return humanChoice
}

function noInput() {
    document.getElementById("result").innerText = "Please provide a choice"
}

function invalidInput() {
    document.getElementById("result").innerText = "This choice is not valid"
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return "tie"
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        return "win"
    } else {
        return "lose"
    }

}


function playGame() {
    let humanChoice = getHumanChoice()
    let human = 0
    let comp = 0
    console.log(humanChoice);


    if (["rock", "paper", "scissor"].includes(humanChoice)) {
        for (let i = 0; i < 5; i++) {
            let result = playRound(humanChoice, getComputerChoice())
            console.log(result);

            if (result === "win") {
                human++
            } else if (result === "lose") {
                comp++
            }
        }

        if (human > comp) {
            document.getElementById("result").innerText = "You are the Winner! congrats!"
            document.getElementById("scoreboard").innerText = human + ":" + comp
        } else if (comp > human) {
            document.getElementById("result").innerText = "You are the Loser! :p"
            document.getElementById("scoreboard").innerText = human + ":" + comp
        } else {
            document.getElementById("result").innerText = "It's a tie!"
            document.getElementById("scoreboard").innerText = human + ":" + comp
        }
    } else if (!humanChoice) {
        noInput()
    } else {
        invalidInput()
    }


}

