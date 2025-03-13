// Wednesday: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase.
// For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".
// For this algorithm, you can use the split() method.

// titleCase("I'm a little tea pot")  // should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt")  // should return "Short And Stout".

// My solution
// Create a function that takes a string as an argument
// Define a variable that keeps a string array
// Assign the string changed to lowercase to the array (toLowerCase)
// For loop through the array
// Capitalize each first letter of array elements (toUpperCase, slice)
// Return array transformed to string

const titleCase = (str) => {
  let arr = str.toLowerCase().split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join(' ');
};

console.log(titleCase("I'm a little tea pot")); // I'm A Little Tea Pot
console.log(titleCase('sHoRt AnD sToUt')); // Short And Stout
