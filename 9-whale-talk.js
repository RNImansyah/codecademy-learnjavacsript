// 1. Create a variable named input that contains the phrase to translate into "whale talk".
let input = 'turpentine and turtles';

// 2. Create an array named vowels containing the vowels to be used in "whale talk".
const vowels = ['a', 'e', 'i', 'o', 'u'];

// 3. Create an empty array named resultArray to store the vowels from the input string.
let resultArray = [];

// 4. Loop through each letter of the input variable text.
for (let i = 0; i < input.length; i++) {
  
  // 5. If the letter is 'e', push it twice to resultArray.
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }

  // 6. If the letter is 'u', push it twice to resultArray.
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }

  // 7. Loop through the vowels array and compare each letter with the current input letter.
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}

// 8. Join the resultArray into a single string and capitalize all of its letters.
let resultString = resultArray.join('').toUpperCase();

// 9. Log the resultString to the console.
console.log(resultString); // Expected output: "UUEEIEEAUUEE"
