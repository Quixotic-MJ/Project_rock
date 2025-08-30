const choices = ["rock", "paper", "scissor"];
let human = null
let win = 0
let tie = 0
let lose = 0
choices.forEach(choice => {
    document.querySelector(`#${choice}`).onclick = () => {
        human = choice; 
        getHumanChoice(choice);
    }
        
})


const getComputerChoice = () => {
    const result = choices[Math.floor(Math.random() * choices.length)];
    return result
}

const getHumanChoice = (choice) => {
    console.log(choice);
    if (choice === "rock") {
        document.getElementById("humanChoice").innerText = "🪨";
    } else if (choice === "paper") {
        document.getElementById("humanChoice").innerText = "📄";
    } else {
        document.getElementById("humanChoice").innerText = "✂️";
    }
    return choice
}

const playRound = () => {
    let player = human
    let comp = getComputerChoice()

    if (comp === "rock") {
        document.querySelector("#compChoice").innerText = "🪨";
    } else if (comp === "paper") {
        document.querySelector("#compChoice").innerText = "📄";
    } else {
        document.querySelector("#compChoice").innerText = "✂️";
    }

    if (!player) {
        alert("Error");
    } else if (player === comp) {
        document.querySelector("#result").innerText = "It's a tie"
        tie++
        document.querySelector("#tie").innerText = tie
    } else if (
        (player === "rock" && comp === "scissor") ||
        (player === "paper" && comp === "rock") ||
        (player === "scissor" && comp === "paper")
    ) {
        document.querySelector("#result").innerText = "You win!"
        win++
        document.querySelector("#win").innerText = win
        
    } else {
        document.querySelector("#result").innerText = "You lose!"
        lose++
        document.querySelector("#lose").innerText = lose
    }
}







