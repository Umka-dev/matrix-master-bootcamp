// Given an array X, for example [1,-2,4,1], remove the negative numbers, so that 
// the output becomes: [1,4,1].
// Solve this recursively. For this algorithm, write the pseudocode, 
// before your JS code.

// Define a function that takes arr as a parameter
// Define a variable that holds a new empty array
// Condition to stop if the arr length is equal 0
// True - retent an empty array
// For loop from 0 to array length
// Condition if the element is greater than 0 (positive)
// Define a variable that holds the result calling this function inside it
// True - add this element to the new array
// Set array length -1
// Return result

let initialArr = [1, -2, 4, 1, -3, 0, 9];

// Recursion solution
// const removeNegatives = (arr, filteredArr = [], i = 0) => {
//   if (i === arr.length) {
//     return filteredArr;
//   }

//   if (arr[i] >= 0) {
//     filteredArr.push(arr[i]);
//   }

//   i++;

//   return removeNegatives(arr, filteredArr, i);
// };
// console.log(removeNegatives(initialArr));

// Simplified Recursion solution with getting function parameters without the initial states
// const removeNegatives = (arr, nextArr, nextIdx) => {
//   let filteredArr = nextArr || [];
//   let i = nextIdx || 0;

//   if (i === arr.length) {
//     return filteredArr;
//   }

//   if (arr[i] >= 0) {
//     filteredArr.push(arr[i]);
//   }

//   i++;

//   return removeNegatives(arr, filteredArr, i);
// };
// console.log(removeNegatives(initialArr));

// Normal solution
// Define a function that takes an array as a parameter
// Define a variable with empty array
// Define a variable with index is equal 0
// While loop untill i less than array length
// Condition to check if array element is positive number
// True - push it to the new array
// Increase index by 1
// Return the sorted array
// Call the function

// const removeNegatives = (arr) => {
//   let newArr = [];
//   let i = 0;
//   while (i < arr.length) {
//     if (arr[i] >= 0) {
//       newArr.push(arr[i]);
//     }
//     i++;
//   }
//   return newArr;
// };
// console.log(removeNegatives(initialArr));

// The same solution with a for loop
const removeNegatives = (arr) => {
  let resArr = [];
  for (let i=0;i<arr.length;i++){
    if (arr[i] >= 0) {
      resArr.push(arr[i]);
    }
  }
  return resArr;
};

console.log(removeNegatives(initialArr)); // [1, 4, 1, 0, 9]
