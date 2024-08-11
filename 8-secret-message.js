// Initial array of strings
let secretMessage = [
    'Learning', 'to', 'code', 'is', 'fun', 'and', 'exciting', 'but', 'it', 'can', 'be', 'difficult', 'at', 'times', 'so', 'keep', 'practicing', 'and', 'you', 'will', 'get', 'it', 'right', 'the', 'first', 'time', 'easily'
  ];
  
  // 1. Use an array method to remove the last string of the array secretMessage.
  secretMessage.pop();
  
  // 2. Log the length of the array to check if it's 1 less than the original length.
  console.log(secretMessage.length); // Should be 1 less than the original length
  
  // 3. Use an array method to add the words 'to' and 'Program' as separate strings to the end of the secretMessage array.
  secretMessage.push('to', 'Program');
  
  // 4. Change the word 'easily' to the word 'right' by accessing the index and replacing it.
  // Find the index of 'easily'
  const easilyIndex = secretMessage.indexOf('easily');
  if (easilyIndex !== -1) {
    secretMessage[easilyIndex] = 'right';
  }
  
  // 5. Use an array method to remove the first string of the array.
  secretMessage.shift();
  
  // 6. Use an array method to add the string 'Programming' to the beginning of the array.
  secretMessage.unshift('Programming');
  
  // 7. Use an array method to remove the strings 'get', 'right', 'the', 'first', 'time', and replace them with the single string 'know,'.
  const startIndex = secretMessage.indexOf('get');
  const endIndex = secretMessage.indexOf('time') + 1;
  if (startIndex !== -1 && endIndex !== -1) {
    secretMessage.splice(startIndex, endIndex - startIndex, 'know,');
  }
  
  // 8. Use console.log() and .join() to print the secret message as a sentence.
  console.log(secretMessage.join(' '));
  