// Friday: Sum All Odd Fibonacci
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5, and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

// function sumFibs(num) {
//   return num;
// }
// sumFibs(4);

// Solution
// Define a function that takes a number as a parameter
// Define three variables to hold previous, current numbers, and the sum
// While loop to iterate through the array from 1 to the given number
// Condition to check if the previous fib number is odd
// True - add it to the sum
// Shift the numbers
// Return the sum
// Call the function

const sumFibs = (num) => {
  let prev = 1,
    curr = 1,
    sum = 0;

  while (prev <= num) {
    if (prev % 2 !== 0) {
      sum += prev;
    }
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  return sum;
};

console.log(sumFibs(4)); // 5 (1 + 1 + 3)
console.log(sumFibs(7)); // 10 (1 + 1 + 3 + 5)
console.log(sumFibs(12)); // 10 (1 + 1 + 3 + 5)
console.log(sumFibs(13)); // 23 (1 + 1 + 3 + 5 + 13)
console.log(sumFibs(43)); // 44 (1 + 1 + 3 + 5 + 13 + 21)
