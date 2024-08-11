// Function to get the sleep hours for a specific day
const getSleepHours = day => {
    switch(day.toLowerCase()) {
      case 'monday':
        return 8;
      case 'tuesday':
        return 7;
      case 'wednesday':
        return 6;
      case 'thursday':
        return 8;
      case 'friday':
        return 5;
      case 'saturday':
        return 9;
      case 'sunday':
        return 8;
      default:
        return 'Invalid day';
    }
  };
  
  // Function to get the total sleep hours for the week
  const getActualSleepHours = () =>
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
  
  // Function to get the ideal sleep hours for the week
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  // Function to calculate sleep debt
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
  
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got more sleep than needed. You slept ${actualSleepHours - idealSleepHours} hours more.`);
    } else {
      console.log(`You should get some rest. You slept ${idealSleepHours - actualSleepHours} hours less.`);
    }
  };
  
  // Start the program
  calculateSleepDebt();
  