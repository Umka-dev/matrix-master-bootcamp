// Thursday: Palindrome Checker
// Declare a function isPalindrome(str) that takes a string as an input.
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// My solution:
// Create a function with a given argument str
// Clear this string from spaces and make it lowercase
// Reverse cleaned string
// Compare clened string with reversed
// Print the result

const isPalindrome = (str) => {
  let cleanedStr = str.split(' ').join('').toLowerCase(); // remove spaces and convert to lower case
  let reverseStr = cleanedStr.split('').reverse().join(''); // split() converts the string to a character array, the reverse() method arranges the elements of the array in reverse order, convert the array back to a string
  // console.log('Given string: ', str);
  // console.log('Cleaned string: ', cleanedStr);
  // console.log('Reversed string: ', reverseStr);
  cleanedStr === reverseStr
    ? console.log('Is Palindrome: ', true)
    : console.log('Is Palindrome: ', false);
};

isPalindrome('maoam'); // true
isPalindrome('Maoam'); // true
isPalindrome('Maoams'); // false
isPalindrome('Racecar'); // true
