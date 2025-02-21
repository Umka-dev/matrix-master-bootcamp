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
let sum = 0;
for (let i = 1; i < 136; i++) {
  sum = sum + i;
  console.log('Number is: ' + i + '; Sum:' + sum);
}
