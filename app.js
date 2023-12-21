//pick out all the elements you have in the index file..
const computerChoiceDisplay= document.getElementById('computer-choice');
const userChoiceDisplay= document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button'); // eventlistener for all buttons
let userChoice;
let computerChoice;
let result;
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
userChoice = e.target.id;
userChoiceDisplay.innerHTML = userChoice;
computerChoice = generateComputerChoice();
computerChoiceDisplay.innerHTML = computerChoice;
result = getResults(computerChoice,userChoice);
resultDisplay.innerHTML = result;
}));


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possible Choices.length..
    
    
    console.log(randomNumber);

    if(randomNumber === 1) {
        computerChoice = 'Rock';
    }else if(randomNumber === 2) {
        computerChoice = 'Paper';
    }else if(randomNumber === 3) {
        computerChoice = 'Scissors';
    }

    return computerChoice;
}

function getResults(a,b) {
if (a == b) return "draw"; 
if ( a == 'Rock' && b == "Scissors") return "computer wins";                                                                  
if ( a == 'Rock' && b == "Paper")  return "user wins";                                                                 
if ( a == 'Paper' && b == "Scissors") return "user wins";                                                                  
if ( a == 'Paper' && b == "Rock") return "computer wins"                                                                  
if ( a == 'Scissors' && b == "Rock") return "user wins";
return "computer wins";                                                                  

}