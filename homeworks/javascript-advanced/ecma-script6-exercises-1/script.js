// Exercise 1
// We have a simple object:

// let user = {
//   name: "John",
//   years: 30
// }

// Write the destructuring assignment that reads:
// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false if absent)

// My solution
// let user = {
//   name: 'John',
//   years: 30,
//   //   isAdmin: true,
// };
// let { name } = user;

// let { years: age } = user;

// let { isAdmin } = user;

// if (user.isAdmin) {
//   isAdmin = true;
// } else {
//   isAdmin = false;
// }

// console.log('Name: ', name); // "John"
// console.log('Age: ', age); // 30
// console.log('Is admin: ', isAdmin); // false

// //Second improved solution
// let user = {
//   name: 'John',
//   years: 30,
//   //   isAdmin: true, // uncomment for testing
// };

// let { name, years: age, isAdmin = false } = user; // isAdmin=false by default if absent

// // Check the variable values
// console.log('Name: ', name); // "John"
// console.log('Age: ', age); // 30
// console.log('Is admin: ', isAdmin); // false

// Exercise 2
// Give the right name:
// Create the variable with the name of our planet. How would you name such a variable?
// Create the variable to store the name of the current visitor. How would you name that variable?

// My solution
// let planetName = 'Earth';
// let currentVisitorName = 'John';

// Exercise 3
// Look at the code. What will be the result of the call at the last line and why?

// let phrase = 'Hello';

// if (true) {
//   let user = 'John';
//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }

// sayHi();

// My solution
// sayHi(); - this line should call the function sayHi,
// But it is incorrect to call it outside the If-block.
// Since sayHi is defined inside the if block, it is not accessible outside of it.
// The If-block will be executed if something is true. In this case the condition allways returns - true therefore the function inside could be run but the function should be called inside thi block not globally
// Despite on my PC the result is allert pop-up with text: Hello, John
// In strict mode JS code will give the result - ReferenceError
// The ReferenceError object represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.

// Exercise 4
// Write the code, one line for each action:
// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

// My solution
// let user = {
//   name: 'John',
//   surname: 'Smith',
// };
// console.log('User default', user);

// user.name = 'Pete';
// console.log('User changed name (Pete):', user);

// delete user.name;
// console.log('User name property has deleted', user);

// Exercise 5
// Is it possible to change an object declared with const, how do you think and why?

// const user = {
//   name: "John"
// }
// does it work?
// user.name = "Pete"

// My solution
// Yes, it does despite the user object being declared as a constant and cannot be assigned with another object. We are still able to reassign object properties multiple times.

// Exercise 6
// We have an object storing the salaries of our team:

// let salaries = {
//   Fred: 100,
//   Ted: 160,
//   Ghaith: 130
// }
// Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.

// My solution
// let salaries = {
//     Fred: 100,
//     Ted: 160,
//     Ghaith: 130,
// };
// let { Fred, Ted, Ghaith } = salaries;
// console.log(Fred, Ted, Ghaith);

// let sum = Number(Fred) + Number(Ted) + Number(Ghaith) || 0;

// console.log(sum);

// Better solution
// let salaries = {
//   //   Fred: 100,
//   //   Ted: 160,
//   //   Ghaith: 130,
//   //   Shoun: '100', // uncomment for testing
// };

// let sum = 0;

// for (let key in salaries) {
//   sum += Number(salaries[key]) ?? 0; // convert each salary to a number and add each salary to sum
// }

// console.log(sum); // 390

// Exercise 7
// Rewrite this if using the ternary operator '?':

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// My solution
// let a = 1;
// let b = 2;
// let result = a + b < 4 ? 'Below' : 'Over';

// console.log('Result: ', result); // output: Below

// Exercise 8
// Rewrite if..else using multiple ternary operators '?'.

// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// My solution
let login = '';

let message =
  login == 'Employee'
    ? 'Hello'
    : login == 'Director'
    ? 'Greetings'
    : login == ''
    ? 'No login'
    : '';

console.log(message);

// For testing
// let login = 'Employee';
// let login = 'Director';
// let login = 'User';
