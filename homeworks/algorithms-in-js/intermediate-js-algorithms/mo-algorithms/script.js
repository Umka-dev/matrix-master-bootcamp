// Monday: Largest Number in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// function largestOfFour(arr) {
//   // You can do this!
//   return arr;
// }
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //Returns [5,27,39,1001]

// Solution:
// Create a function that takes an array
// Create a new empty array
// For loop through the first level of the array
// Add to the new array every first element from the subarrays
// For loop through each subarray elements
// If elements in the result array are smaller than elements in subarrays
// Then replace them with the new largest values
// Print  result array with largest numbers from subarrays

const largestOfFour = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][0]);
    for (let j = 0; j < arr[i].length; j++) {
      if (newArr[i] < arr[i][j]) {
        newArr[i] = arr[i][j];
      }
    }
  }
  console.log(newArr);
  return newArr;
};

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]); // [5,27,39,1001]

largestOfFour([
  [4, 5, 100, 3],
  [13, 270, 18, 26],
  [32, 350, 37, 39],
  [1000, 100, 857, 1],
]); // [100, 270, 350, 1000]
