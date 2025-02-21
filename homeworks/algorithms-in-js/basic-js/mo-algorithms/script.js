//1. Print 1 - 135
// Write a program using JavaScript that will print all the numbers from 1 to 135.

//My Solution:
// For loop for numbers from 1 to 135 -> print numbers
// for (let i = 1; i < 136; i++) {
//   console.log(i);
// }

//2. Print Odd Numbers 1 - 135
// Write a program using JavaScript that will print all the odd numbers from 1 to 135.

//My Solution:
// Cycle for numbers from 1 to 135, the remainder of which when divided by 2 is not equal to 0
// for (let i = 1; i < 136; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

//3. Sum of Printed Numbers
// Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:
// Number is: 0 Sum: 0
// Number is: 1 Sum: 1
// Number is: 2 Sum: 3
// Number is: 3 Sum: 6
// ...
// Note: You are NOT allowed to use an array to solve this exercise.

//My Solution:
//Create a variable to accumulate the sum of two numbers that is equal to 0
//Create a For loop for numbers from 1 to 135 which do next:
//1) calculates: current sum + current number and save result in variable sum
//2) print: current number and current sum
// let sum = 0;
// for (let i = 1; i < 136; i++) {
//   sum = sum + i;
//   console.log('Number is: ' + i + '; Sum:' + sum);
// }

//4. Print the elements of an array
// Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. Your program should work with arrays of all sizes.

//My Solution:
// Create a variable with the given array X
// Create a For loop for numbers from the existed array from index 0 to last
// Print an every array element
// Test the code with other arrays

// let arrX = [1, 4, 2, 12];
// for (let i = 0; i < arrX.length; i++) {
//   console.log(arrX[i]);
// }

// Test the code
// arrX = [1, 4, 2, 12, 5, 48];
// for (let i = 0; i < arrX.length; i++) {
//   console.log(arrX[i]);
// }

// 5. Find Max
// Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.

//My Solution:
// Create a variable with the given array X
// Create a function for checking different arrays
// Check if the array is empty first
// If it is empty then stop execution by returning early
// Create a variable for max element equal first array element value with index=0
// Start looping through the existed array elements from index 1 to the last one
// Compare every element value with max
// If current element value is bigger then max then max = current element
// Increase the index to 1
// Repeat For loop with If condion and max assigning untill the end of array
// Print max element and retur the result of the function
//Test the code using the different arrays: run function with different props

// const X = [2, -3, -1];
// function findMax(arr) {
//   if (arr.length === 0) {
//     console.log('Array is empty');
//     return;
//   }

//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   console.log('Max element: ', max);
//   return max;
// }

// findMax(X);

// Test the code
// findMax([43, -6, 65, 2, 8, 99, 16]);
// findMax([3, 0, 6, 2, -8]);
// findMax([]);

//6. Get Average
// Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2.

//My Solution:
// Create a variable with the given array X
// Create a function to reuse with the different arrays
// Check if the array is empty first
// If it is empty then stop execution by returning early
// Create the variables average=0 and sum=0;
// Create a function for searching average value of all array elements
// Start looping through the existed array elements from index 0 to the last one
// Calculate the sum of all arr elements
// Calculate the average value deviding sum to array length
// Print average value
// Test the code

// const X = [2, 3, 1];
// function findAverage(arr) {
//   if (arr.length === 0) {
//     console.log('Array is empty');
//     return;
//   }

//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   let average = sum / arr.length;

//   console.log('Sum: ', sum);
//   console.log('Average of all elements: ', average);
// }

// findAverage(X);

// Test the code
// findAverage([]);
// findAverage([3, 0, 6, 2, 8]);
// findAverage([43, -6, 66, 2, 8, 99, -16]);

//7. Eliminate the Negatives
// Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be
// [2,0,4,0]

//My Solution:
// Create a variable with the given array X
// Create a function to reuse with the different arrays
// Check if the array is empty first
// If it is empty then stop execution by returning early
// Start looping through the existed array elements from index 0 to the last one
// Create a variable with a new empty array
// Check If the current element has negative value
// If 'yes' replace it with 0
// If 'not' take next element
// Push current element to a new array
// Print new array with no negative elements
// Test the code

// const X = [2, -3, 1];
// function eliminateNegatives(arr) {
//   if (arr.length === 0) {
//     console.log('Array is empty');
//     return;
//   }

//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       arr[i] = 0;
//     }
//     newArr.push(arr[i]);
//   }

//   console.log('New array: ', newArr);
// }

// eliminateNegatives(X);

// Test the code
// eliminateNegatives([]);
// eliminateNegatives([3, 0, -6, 2, -8]);
// eliminateNegatives([43, -6, 66, 2, 8, 99, -16]);

//8. Number to String
// Write a program that takes an array of numbers and turns the negative values into strings.
// For example,
// For array
// const x= [1,-4,0,-1]
// The output should be [1,'Turing,0,'Turing'].

//My Solution:
// Create a variable with the given array X
// Create a function to reuse with the different arrays
// Check if the array is empty first
// If it is empty then stop execution by returning early
// Start looping through the existed array elements from index 0 to the last one
// Create a variable with a new empty array
// Check If the current element has negative value
// If 'yes' replace it with 'text'
// If 'not' take next element
// Push current element to a new array
// Print new array with no negative elements
// Test the code

const X = [2, -3, 1];
function replaceNegatives(arr) {
  if (arr.length === 0) {
    console.log('Array is empty');
    return;
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 'text';
    }
    newArr.push(arr[i]);
  }

  console.log('New array: ', newArr);
}

replaceNegatives(X);

// Test the code
replaceNegatives([]);
replaceNegatives([3, 0, -6, 2, -8]);
replaceNegatives([43, -6, 66, 2, 8, 99, -16]);
