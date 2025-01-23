let userscore = document.querySelector(".user-score");
let compscore = document.querySelector(".Comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score")
const compscorepara = document.querySelector("#Comp-score")


let userScore=0;
let Compscore=0;
// here we genrate the computer choice 
const gencompchoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randindex = Math.floor(Math.random()*3);
    return options[randindex];

};
// here we show user is won or not 
const showwinner =(userwin)=>{
    if (userwin) {
        userScore++;
        userscorepara.innerText = userScore;
         console.log(" you won ")
         msg.innerText = "user won ..!"
         msg.style.backgroundColor = "green";

    } else {
        Compscore++;
        compscorepara.innerText=Compscore;
        console.log("you lose")
        msg.innerText = "user lose ..!"
        msg.style.backgroundColor = "red";
    }

}
 // here if game was draw then call this funcation 
const drawgame=()=> {
 console.log("game was draw because user and computer select the same choice ") 
 msg.style.backgroundColor = "#081b31";
 msg.innerText =" Match is Draw"
}
// here is the we play actual game 
const playgame = (userchoice)=>{
    console.log("user choice is", userchoice);
    /// genrate the computer choice
    const compchoice = gencompchoice();
    console.log("computer choice is ", compchoice);

    if (compchoice === userchoice) {
 //  if game is draw 
        drawgame();  
    }else{
        let userwin = true;
        if( userchoice === "rock"){
            userwin =  compchoice ==="paper" ? false:true;
        }else if  (userchoice ==="paper") {
            userwin= compchoice ==="rock" ? false:true;            
        } else {
           userwin = compchoice ==="scissor" ? false:true;            
        }
        showwinner(userwin);
    }


};



choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userchoice= choice.getAttribute("id");
        playgame(userchoice);
    });
});