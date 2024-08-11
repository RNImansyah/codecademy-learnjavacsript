// The user's name
let userName = 'Jane';

// Ternary expression to greet the user
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// The user's question
let userQuestion = 'Will I become a JavaScript developer?';

// Logging the user's question
console.log(`${userName} asked: ${userQuestion}`);

// Generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

// Variable to store the eight ball's response
let eightBall = '';

// Control flow to assign the eightBall variable a value based on randomNumber
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

// Log the Magic Eight Ball's answer
console.log(`The Magic Eight Ball says: ${eightBall}`);
