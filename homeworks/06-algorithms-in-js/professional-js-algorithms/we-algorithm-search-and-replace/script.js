// Wednesday : Search and Replace
// Perform a search and replace the sentence using the arguments provided and return the new sentence.

// The first argument is the sentence to perform the search and replace on.
// The second argument is the word that you will be replacing (before).
// The third argument is what you will be replacing the second argument with (after).
// NOTE: Preserve the case of the original word when you are replacing it.

// For example, if you mean to replace the word "Book" with the word "dog", it should be replaced with "Dog"

// function myReplace(str, before, after) {
//   return str;
// }
// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// Solution
// Define a function that takes a sentence, before-word, and after-word as the parameters
// Transform the string to the array of the strings
// For loop to iterate through the array from 0 to the length
// Condition to check if the current element (word) is equal to before-word
// True - then set the current element equal to after-word
// False - check next
// After the for loop transform the arr to string again
// Return the mutated sentence
// Call the function

const replaceWord = (str, before, after) => {
  let strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === before) {
      strArr[i] = after;
    }
    str = strArr.join(' ');
  }
  return str;
};

console.log(
  replaceWord('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped')
); // A quick brown fox leaped over the lazy dog

console.log(
  replaceWord('A quick brown fox jumped over the lazy dog', 'brown', 'red')
); // A quick red fox jumped over the lazy dog
