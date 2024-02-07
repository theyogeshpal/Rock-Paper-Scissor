let choices = document.querySelectorAll(".choice");
let userResult = document.querySelector(".user-Choice");
let compResult = document.querySelector(".comp-Choice"); 
let gameButton = document.querySelector(".btn");

let userScore = 0;
let compScore = 0;


const genCompChoice = () => {
      const options = ["rock", "paper", "scissor"]
      const randomIdx = Math.floor(Math.random() * 3);
      
      return options[randomIdx];
};


const drawGame = () => {
      gameButton.style.backgroundColor = 'black';
      gameButton.innerText = "Game was draw";
}

choices.forEach((choice) => {
      choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            genCompChoice();
            playGame(userChoice);
      })
});


const showWinner = (userwin) => {
      if (userwin) {
            userScore++;
            userResult.innerText = userScore;
            gameButton.style.backgroundColor = "Green";
            gameButton.innerText = "Your Choice Beats the Computer's Choice";
      }else{
            compScore++;
            compResult.innerText = compScore;
            gameButton.style.backgroundColor = "Red";
            gameButton.innerText = "Computer beats your Choice";
      }
}

const playGame = (userChoice) => {
      const compChoice = genCompChoice();
      if (userChoice === compChoice) {
            drawGame();
      }else {
            let userwin = true;
            if (userChoice === "rock") {
                  //paper , scissor
                 userwin = compChoice === "paper" ? false : true ;
            }
            if (userChoice === "paper") {
                  //rock, scissor
                  userwin = compChoice === "rock" ? true : false ;
            }else {
                  //rock and paper
                  userwin = compChoice === "rock" ? false : true ;
            }
            showWinner(userwin);
      }
}
