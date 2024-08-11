// The temperature in Kelvin is a constant value that we won't change
const kelvin = 293;

// Celsius is always 273 degrees less than Kelvin
const celsius = kelvin - 273;

// Convert Celsius to Fahrenheit using the formula: Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9 / 5) + 32;

// Use Math.floor to round down the Fahrenheit temperature to the nearest whole number
fahrenheit = Math.floor(fahrenheit);

// Log the temperature in Fahrenheit using string interpolation
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert Celsius to the Newton scale
let newton = celsius * (33 / 100);

// Round down the Newton temperature
newton = Math.floor(newton);

// Log the temperature in Newton using string interpolation
console.log(`The temperature is ${newton} degrees Newton.`);
