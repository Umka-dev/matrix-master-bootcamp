// Thursday: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// function sumAll(arr) {
//   // You can do this!
// }
// sumAll([1, 4]);

// The lowest number will not always come first.

// sumAll([1, 4])  // should return a number.
// sumAll([1, 4])  // should return 10.
// sumAll([4, 1])  // should return 10.
// sumAll([5, 10])  // should return 45.

// My solution
// Define variables min, max and sum
// If condition of the first array element higher then the second is true
// Then max = the first element and min = the second element
// For loop for i from min to i<=max
// Add the element values to sum
// Return sum

function sumAll(arr) {
  let min = arr[0];
  let max = arr[1];
  let sum = 0;
  if (arr[0] > arr[1]) {
    max = arr[0];
    min = arr[1];
  }
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumAll([1, 4])); // 10
console.log(sumAll([4, 1])); // 10
console.log(sumAll([5, 10])); // 45

// // Other solution
// function sumArr(arr) {
//   let sum = 0;
//   for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumArr([1, 4])); // 10
// console.log(sumArr([4, 1])); // 10
// console.log(sumArr([5, 10])); // 45
