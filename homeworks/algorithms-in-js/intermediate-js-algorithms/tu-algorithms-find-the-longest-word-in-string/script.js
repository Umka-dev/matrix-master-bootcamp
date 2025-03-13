// Tuesday: Find the longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number. For these algorithms, you are allowed to use the split() method.

// findLongestWord("The quick brown fox jumped over the lazy dog")  // should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog"). // should return 6.
// findLongestWord("May the force be with you")  // should return 5.

// My solution
// Create a function that takes a string as a parameter
// Define an array variable holding the original string as a string array
// Difine an array variable holding every word length
// For loop through the string array
// If condition to check every word length is the longest
// Then assign this word length to the variable 'the longest'
// Return the largest word length as a number

const findLongestWordLength = (str) => {
  let arr = str.split(' ');
  console.log(arr);
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i].length) {
      max = arr[i].length;
    }
  }
  console.log('Length of the longest word = ', max);
  return max;
};

findLongestWordLength('Hello my friend !'); // 6
findLongestWordLength('How are you doing today ?'); // 5
