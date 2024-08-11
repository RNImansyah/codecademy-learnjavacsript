// Race numbers are assigned randomly
let raceNumber = Math.floor(Math.random() * 1000);

// Variable to indicate if the runner registered early or not
let registeredEarly = true;  // Set this to true or false to test different conditions

// Variable for the runner's age
let runnerAge = 25;  // Change this value to test different conditions

// Add 1000 to the race number if the runner is an adult and registered early
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

// Control flow statement to determine race time based on age and registration
if (runnerAge > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
  console.log('Please see the registration desk.');
}
