// The original story text
let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

// Split the story into individual words
let storyWords = story.split(' ');

// Define the words to be corrected or removed
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// Step 3: Create a variable to count the number of words in the story
let count = 0;

// Iterate over the storyWords array to count the words
storyWords.forEach((word) => {
  count++;
});

// Log the word count to the console
console.log(`Word count: ${count}`);

// Step 5: Remove unnecessary words using .filter() method
storyWords = storyWords.filter((word) => {
  return word !== unnecessaryWord;
});

// Step 7: Correct misspelled words using .map() method
storyWords = storyWords.map((word) => {
  return word === misspelledWord ? 'beautiful' : word;
});

// Step 8: Find the index of the bad word using .findIndex() method
let badWordIndex = storyWords.findIndex((word) => {
  return word === badWord;
});

// Log the index of the bad word
console.log(`Index of the bad word: ${badWordIndex}`);

// Step 9: Replace the bad word with a more appropriate word
storyWords[badWordIndex] = 'really';

// Step 10: Check if every word is 10 characters or less using .every() method
let lengthCheck = storyWords.every((word) => {
  return word.length <= 10;
});

// Log the result of the length check
console.log(`Are all words 10 characters or less? ${lengthCheck}`);

// Step 11: Replace the word that is longer than 10 characters (if any)
storyWords = storyWords.map((word) => {
  return word.length > 10 ? 'stunning' : word;
});

// Step 2: Join the words back into a single string and log the final story
console.log(storyWords.join(' '));
