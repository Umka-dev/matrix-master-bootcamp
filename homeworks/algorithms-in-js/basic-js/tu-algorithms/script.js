// 1. Addition
// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.

// My Solution:
// Create a function
// Create an empty array inside and variable sum=0
// For loop for numbers between 200 and 2700
// If statement If i divisible by 3 or 5, but not both 3 and 5
// If true - add this number to sum
// Print array of added numbers
// Run/call the function
// const addNumbers = () => {
//   let sum = 0;

//   for (let i = 200; i <= 2700; i++) {
//     if ((i % 3 === 0 || i % 5 === 0) && i % 15 !== 0) {
//       sum += i;
//     }
//   }

//   console.log(
//     'Sum of numbers that are divisible by 3 or 5, but not both 3 and 5:',
//     sum
//   );
// };

// addNumbers();

// 2. Shift the Values
// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

// My Solution:
// Create new empty array
// For loop for the i from 0 to x.length
// Add current element from array x to array
// Print new array

// let x = [2, 1, 6, 4, -7];
// let reversedArr = [];
// for (let i = 0; i < x.length; i++) {
//   reversedArr.unshift(x[i]);
// }
// console.log('Given array: ', x);
// console.log('Changed array: ', reversedArr);

// 3. FizzBuzz
// Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".
// Your output should look like [1,2, 'Fizz',4, 'Buzz', 'Fizz',7, 8, ...]

// My Solution:
// Create empty array
// For loop for i from 1 to 135
// If it divisible by 3 and 5 (or 15) raplace it with the word "FizzBuzz"
// Else If i divisible by 5 raplace it with the word "Buzz"
// Else If i divisible by 3 raplace it with the word "Fizz"
// Else just add to array as it is
// Print changed array
// let arr = [];
// for (let i = 1; i <= 135; i++) {
//   if (i % 15 === 0) {
//     arr.push('FizzBuzz');
//   } else if (i % 5 === 0) {
//     arr.push('Buzz');
//   } else if (i % 3 === 0) {
//     arr.push('Fizz');
//   } else arr.push(i);
//   // arr.push(i % 15 === 0 ? "FizzBuzz" : i % 5 === 0 ? "Buzz" : i % 3 === 0 ? "Fizz" : i); // or with the ternar operator
// }
// console.log(arr);

// 4. Fibonacci
// For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
// A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.
// 0 1 1 2 3 5 8 13 21...

// My Solution:
// Create an array with 0 and 1 elements
// For loop from upto 1000000
// Create a variable for next Fibonacci number
// Add this element to array
// Print array
// let arrFibonacci = [0, 1];
// for (let i = 2; i < 100 - 1; i++) {
//   let nextFib = arrFibonacci[i - 1] + arrFibonacci[i - 2];
//   arrFibonacci.push(nextFib);
// }

// console.log(arrFibonacci);

// 5. Remove the Negative
// Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

// My Solution:
// For loop from 0 to x.length
// If is negative then remove element and decrease index for 1;
// Print renewed array

// let x = [1, -2, 4, 1];

// for (let i = 0; i < x.length; i++) {
//   if (x[i] < 0) {
//     x.splice(i, 1);
//     i = i - 1;
//   }
// }
// console.log('Array without negative values', x);

// 6. Communist Censorship
// Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice

// My Solution:
// Define a wanted word
// Create a censored word as empty string
// For loop to replace all letters in word with *
// For loop from 0 to x.length
// Check condition if element is wanted word then replace it with censored word
// Print renewed array
let x = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];
let word = 'Love';
let censoredWord = '';
for (let i = 0; i < word.length; i++) {
  censoredWord += '*';
}
for (let i = 0; i < x.length; i++) {
  if (x[i] === word) {
    x[i] = censoredWord;
  }
}

console.log(x);
