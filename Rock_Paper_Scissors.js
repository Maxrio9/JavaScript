const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' | userInput === 'paper' | userInput === 'scissors') {
    return userInput;
  }
  else {
    console.log('Not valid entry');
  }
}
getUserChoice('Scissors');

const getComputerChoice = () => {
  var choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    console.log('Computer: Rock')
    return 'rock';
  } else if(choice === 1) {
    console.log('Computer: Paper')
    return 'paper';
  } else {
    console.log('Computer: Scissors')
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'tie';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'You won!';
    } else {
      return 'The computer won!1';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'You won!';
    } else {
      return 'The computer won!2';
    }
  } else {
    if (computerChoice === 'paper') {
      return 'You won!';
    } else {
      return 'The computer won!3';
    }
  }
}
console.log(determineWinner(getUserChoice('Rock'), getComputerChoice()));