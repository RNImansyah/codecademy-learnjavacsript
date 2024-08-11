// Function to get the user's choice
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase(); // Convert the input to lowercase
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput; // Return the input if it's valid
    } else {
      console.log('Error: Invalid input. Please choose rock, paper, or scissors.');
    }
  };
  
  // Function to get the computer's choice
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  // Function to determine the winner
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return 'You win by using the secret cheat code!';
    }
  
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
  };
  
  // Function to start the game
  const playGame = () => {
    const userChoice = getUserChoice('rock'); // Replace 'rock' with 'paper' or 'scissors' to test different options
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${userChoice}`);
    console.log(`The computer chose: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  // Start the game
  playGame();
  