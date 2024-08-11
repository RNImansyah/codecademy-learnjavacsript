// Your age in human years
const myAge = 25; // Replace 25 with your actual age

// Early years account for the first 2 years of a dog's life
let earlyYears = 2;

// The first two years of a dog's life count as 10.5 dog years each
earlyYears *= 10.5;

// Later years account for the years after the first two
let laterYears = myAge - 2; // Subtract 2 years from your age to account for the early years

// Each year following equates to 4 dog years
laterYears *= 4;

// Add early years and later years to get your age in dog years
const myAgeInDogYears = earlyYears + laterYears;

// Convert your name to lowercase
const myName = 'Dog'.toLowerCase(); // Replace 'Your Name' with your actual name

// Log your name and age in dog years using string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
