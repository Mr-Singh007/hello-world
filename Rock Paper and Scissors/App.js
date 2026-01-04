let userScore = 0;
let computerScore =0;
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let computerScorePara = document.querySelector("#computer-score");

const choices = document.querySelectorAll(".choice");

const genComputerChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = "rgb(17, 107, 121)";
}

 const showWinner = (userWin,userChoice,computerChoice) =>{
    if(userWin){
        console.log("you win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "Green";
            }
            else{
                console.log("you lose");
                computerScore++;
                computerScorePara.innerText = computerScore;
                msg.innerText = `You lost. ${computerChoice} beats your ${userChoice}`;
                msg.style.backgroundColor = "Red";
                }
 };

const platGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    const computerChoice = genComputerChoice();
    console.log("Coputer Choice = ", computerChoice);
    if(userChoice === computerChoice)
    {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "Rock")
        {
            userWin = computerChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper")
        {
            userWin = computerChoice === "Scissors" ? false : true;
        }
        else{
            userWin = computerChoice === "Rock" ? false : true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute("id");
        // console.log(userChoice);
        platGame(userChoice);
    })
})