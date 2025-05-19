// Exercise 1
// The following function returns true if the parameter age is greater than 18.

// Otherwise, it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Do you have your parents permission to access this page?');
//   }
// }
// Rewrite it, to perform the same, but without if...else, and use the arrow function.

// My solution
const checkAge = (age) => {
  age > 18
    ? true
    : confirm('Do you have your parents permission to access this page?');
};

// Test the code
// checkAge(15); // Output: Do you have your parents permission to access this page?
// checkAge(25); // Output: nothing

// Exercise 2
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// P.S. In this task, the function should support only the natural values of n: integers up from 1.

// My solution
const pow = (x, n) => {
  if (!Number.isInteger(n) || n < 1) {
    return 'Error: n must be a natural number (1, 2, 3, ...)';
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= x;
  }
  return result;
};

// Test the code
// console.log(pow(100, 0)); // Error: n must be a natural number (1, 2, 3, ...)
// console.log(pow(100, -1)); // Error: n must be a natural number (1, 2, 3, ...)
// console.log(pow(10, 1)); // 10
// console.log(pow(3, 2)); // 9
// console.log(pow(3, 3)); // 27
// console.log(pow(1, 100)); // 1

// Exercise 3
// Replace Function Expressions with arrow functions in the code:

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no()
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed.") },
//   function() { alert("You canceled the execution.") }
// )

// My solution
// const ask = (question, yes, no) => {
//   confirm(question) ? yes() : no();
// };

// ask(
//   'Do you agree?',
//   () => alert('You agreed.'),
//   () => alert('You canceled the execution.')
// );

// Exercise 4
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// let calculator = {
//   // ... your code ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// My solution
// let calculator = {
//   num1: 0,
//   num2: 0,
//   read() {
//     this.num1 = Number(prompt('Input first number:'));
//     this.num2 = Number(prompt('Input second number:'));
//   },
//   sum() {
//     this.num1 + this.num2;
//   },
//   mul() {
//     this.num1 * this.num2;
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// Exercise 5
// Write a function min(a,b) which returns the least of two numbers a and b. Use the arrow function along with the question mark operator ?

// My solution
const min = (a, b) => {
  return a < b ? a : b;
};

//Test the code
console.log('Min number: ', min(2, 3)); // 2
console.log('Min number: ', min(84, 36)); // 36
