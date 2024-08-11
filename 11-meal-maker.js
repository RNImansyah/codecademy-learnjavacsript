// Step 1: Create an empty menu object
const menu = {
    // Step 2: Add a _meal property
    _meal: '',
    
    // Step 3: Add a _price property
    _price: 0,
  
    // Step 5: Create a meal setter with type checking
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        this._meal = mealToCheck;
      }
    },
  
    // Step 7: Create a price setter with type checking
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        this._price = priceToCheck;
      }
    },
  
    // Step 9: Create a getter for today's special
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today's Special is ${this._meal} for $${this._price}!`;
      } else {
        return 'Meal or price was not set correctly!';
      }
    }
  };
  
  // Step 4: Directly manipulating the properties (just to see what happens)
  menu._meal = 42; // Incorrectly assigning a number
  menu._price = 'cheap'; // Incorrectly assigning a string
  
  console.log(menu); // Check the incorrect assignments
  
  // Step 8: Set the values using the setter methods
  menu.meal = 'Pasta'; // Correctly assigning a string
  menu.price = 10; // Correctly assigning a number
  
  console.log(menu); // Check the correct assignments
  
  // Step 11: Use the getter method to log Today's Special
  console.log(menu.todaysSpecial); // Log Today's Special to the console
  