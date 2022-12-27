
let playGame = confirm("Do you want to play rock, paper, scissors with me?");

if (playGame) {
    // play
    while (playGame) {
        const playerChoice = prompt("Ok! Please enter rock, paper or scissors.");

        if (playerChoice || playerChoice === "") {
            // .trim gets rid of spaces
            const playerOne = playerChoice.trim().toLowerCase(); 
            
            // check if the player entered one of the requested strings
            if ( 
            playerOne === "rock" ||
            playerOne === "paper" ||
            playerOne === "scissors"
            ) {

                // generate a random number betwen 0 and 2 and assign it to rpsArray
                const computerChoice = Math.floor(Math.random() * 3);
                const rpsArray = ["rock", "paper", "scissors"];
                const computer = rpsArray[computerChoice];

                // determine who wins
                const result = 
                playerOne === computer
                ? `You: ${playerOne}\nMe: ${computer}\nIt's a tie!`
                : playerOne === "rock" && computer === "paper"
                ? `You: ${playerOne}\nMe: ${computer}\nI win!`
                : playerOne === "paper" && computer === "scissors"
                ? `You: ${playerOne}\nMe: ${computer}\nI win!`
                : playerOne === "scissors" && computer === "rock"
                ? `You: ${playerOne}\nMe: ${computer}\nI win!`
                : `You: ${playerOne}\nMe: ${computer}\nYou won!`;

                alert(result);
                playGame = confirm("That was fun! Do you want to play again?");

                // if player doesn't accept to play again
                if (!playGame) alert("ok, thank you for playing.");
                continue;

            } else {
            alert("You didn't enter rock, paper or scissors.");
            continue;
            }
        } else {
            alert("I guess you changed your mind, maybe next time.");
            break;
        }
    }
} else {
    alert("Ok, maybe next time.");
}