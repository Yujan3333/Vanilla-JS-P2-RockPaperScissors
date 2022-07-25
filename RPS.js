let userScore=0;
let computerScore=0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div=document.querySelector(".main-div");
const result_div_p=document.querySelector(".comment > p");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissor_div=document.getElementById("scissors");
//Cashing the DOM ... Storing something for future use

//Getting computer choice
function getComputerChoice(){
    const choice=['r','p','s'];
    const randomNumber=Math.floor(Math.random()*3);
    return choice[randomNumber];
}
function convertToReadable(rps){
    if (rps==='r') return "rock";
    if (rps==='p') return "paper";
    if (rps==='s') return "scissors";
}

//win function
function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord="User".fontsize(2).sub();
    const smallCompWord="Computer".fontsize(2).sub();
    const bigConfirmation="YOU WIN ###".fontsize(6);
    //ES6 uses back ticks
    result_div_p.innerHTML= `${convertToReadable(userChoice)}${smallUserWord} wins against ${convertToReadable(computerChoice)} ${smallCompWord} ${bigConfirmation}`;
    //changing the userChoice value="r,p,s" to rock paper or scissors to match the id in the html
    const userArg=convertToReadable(userChoice);
    //targetting the image in html to glow to  according to result
    const glow= document.getElementById(userArg);
    glow.classList.add("win-green-glow");
    setTimeout(() => glow.classList.remove("win-green-glow"), 300);
}

// lose function
function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord="User".fontsize(2).sub();
    const smallCompWord="Computer".fontsize(2).sub();
    const bigConfirmation="YOU LOSE!!!".fontsize(6);
    //ES6 uses back ticks
    result_div_p.innerHTML= `${convertToReadable(userChoice)}${smallUserWord} lose against ${convertToReadable(computerChoice)} ${smallCompWord} ${bigConfirmation}`;
    //changing the userChoice value="r,p,s" to rock paper or scissors to match the id in the html
    const userArg=convertToReadable(userChoice);
    //targetting the image in html to glow to  according to result
    const glow= document.getElementById(userArg);
    glow.classList.add("lose-red-glow");
    setTimeout(() => glow.classList.remove("lose-red-glow"), 300);

}

//draw function
function draw(userChoice,computerChoice){
    const smallUserWord="User".fontsize(2).sub();
    const smallCompWord="Computer".fontsize(2).sub();
    const bigConfirmation="DRAW".fontsize(6);
    //changing the userChoice value="r,p,s" to rock paper or scissors to match the id in the html
    const userArg=convertToReadable(userChoice);
    //ES6 uses back ticks
    result_div_p.innerHTML= `${convertToReadable(userChoice)}${smallUserWord} draws with ${convertToReadable(computerChoice)} ${smallCompWord} ${bigConfirmation}`;
    //targetting the image in html to glow to  according to result
    const glow= document.getElementById(userArg);
    glow.classList.add("draw-grey-glow");
    setTimeout(() => glow.classList.remove("draw-grey-glow"), 300);
}

//getting user choice
function getUserChoice(userChoice){
    const computerChoice=getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}

//from the picture getting the user input
function main(){
    //Using Arrow function for ES6
    rock_div.addEventListener('click',()=>getUserChoice('r'));
    
    paper_div.addEventListener('click',()=>getUserChoice('p'));
    
    scissor_div.addEventListener('click',()=>getUserChoice('s'))
}

main();
