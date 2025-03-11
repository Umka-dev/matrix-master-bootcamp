// Tuesday: Magic Squares
// A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column, and major diagonal adds up to 15. Here's an example:

// <code>
// 8 1 6
// 3 5 7
// 4 9 2
// </code>
// The major diagonals in this example are 8 + 5 + 2 and 6 + 5 + 4.

// Write a function that, given a grid containing the numbers 1-9, determines whether it's a magic square. Use whatever format you want for the grid, such as a 2-dimensional array, or a 1-dimensional array of length 9, or a function that takes 9 arguments. You do not need to parse the grid from the program's input, but you can if you want to. You don't need to check that each of the 9 numbers appears in the grid: assume this to be true.

// Example inputs/outputs

// <code>[8, 1, 6, 3, 5, 7, 4, 9, 2] => true
// [2, 7, 6, 9, 5, 1, 4, 3, 8] => true
// [3, 5, 7, 8, 1, 6, 4, 9, 2] => false
// [8, 1, 6, 7, 5, 3, 4, 9, 2] => false
// </code><div>
// </div>

// Solution
// Define a function that takes an array as a parameter
// Define a variable with an initial value equal to 15
// Define two variables to hold the diagonal elements sum
// Condition to check if the variables are equal to 15
// False return false (to stop the process)
// For loop to iterate through the array
// Condition to check if the sum is equal to 15
// False return false (to stop the process)
// True another For loop that starts from 0 until 2
// Condition to check if the sum is equal to 15
// True return true
// False return false
// Call the function

const isMagicSquare = (arr) => {
  const SUM = 15;
  let sumDiagonal1 = arr[0] + arr[4] + arr[8];
  let sumDiagonal2 = arr[2] + arr[4] + arr[6];
  //Check the SUM of the diagonals
  if (sumDiagonal1 !== SUM || sumDiagonal2 !== SUM) {
    return false;
  }
  //Check the SUM of the rows
  for (let i = 0; i < arr.length; i += 3) {
    if (arr[i] + arr[i + 1] + arr[i + 2] !== SUM) {
      return false;
    }
  }
  // Check the SUM of the columns
  for (let i = 0; i <= 2; i++) {
    if (arr[i] + arr[i + 3] + arr[i + 6] !== SUM) {
      return false;
    }
  }
  return true;
};

console.log(isMagicSquare([8, 1, 6, 3, 5, 7, 4, 9, 2])); // true
console.log(isMagicSquare([2, 7, 6, 9, 5, 1, 4, 3, 8])); // true
console.log(isMagicSquare([3, 5, 7, 8, 1, 6, 4, 9, 2])); // false
console.log(isMagicSquare([8, 1, 6, 7, 5, 3, 4, 9, 2])); // false
