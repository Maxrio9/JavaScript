const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' | userInput === 'paper' | userInput === 'scissors') {
    return userInput;
  }
  else {
    console.log('Not valid entry');
  }
}

const getComputerChoice = () => {
  var choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    //console.log('Computer: Rock')
    return 'rock';
  } else if(choice === 1) {
    //console.log('Computer: Paper')
    return 'paper';
  } else {
    //console.log('Computer: Scissors')
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'You won!';
    } else {
      return 'The computer won!';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'You won!';
    } else {
      return 'The computer won!';
    }
  } else {
    if (computerChoice === 'paper') {
      return 'You won!';
    } else {
      return 'The computer won!';
    }
  }
}
// console.log(determineWinner(getUserChoice('Rock'), getComputerChoice()));

function playGame() {
  userChoice = getUserChoice('paper');
  computerChoice = getComputerChoice();
  console.log(`User: ${userChoice}; Computer: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();