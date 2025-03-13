// Given an array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one 
// to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].,
// write the pseudocode, before your JS code.

// Define a variable to hold new array
// For loop through the array from 0 to arr.length
// Take the first array element and add it to the front of the new array
// Print the new array

let arr = [2, 1, 6, 4, -7];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr.unshift(arr[i]);
}

console.log('Sorted array: ', newArr); // [-7, 4, 6, 1, 2]
