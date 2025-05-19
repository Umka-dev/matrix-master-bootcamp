// Exercise 1
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.
// The function should not modify the array. It should return the new array. For instance:
// let arr = [5, 3, 8, 1]
// let filtered = filterRange(arr, 1, 4)
// alert( filtered )  // 3,1 (matching values)
// alert( arr )      // 5,3,8,1 (not modified)

// My solution
// let arr = [5, 3, 8, 1];

// const filterRange = (arr, a, b) => {
//   return arr.filter((num) => num >= a && num <= b);
// };

// const filtered = filterRange(arr, 1, 4);

// alert(filtered); // 3,1 (matching values)
// alert(arr); // 5,3,8,1 (not modified)

// Testing the code
// arr = [12, 4, 6, 10, 2];
// const filtered = filterRange(arr, 10, 15);
// console.log(filtered); // 12, 10 (matching values)
// console.log(arr); // 12, 4, 6, 10, 2 (not modified)

// Exercises 2
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
// For instance:

// let john = { name: "John", age: 25 }
// let pete = { name: "Pete", age: 30 }
// let mary = { name: "Mary", age: 28 }

// let users = [ john, pete, mary ]

// let names = /* ... your code */

// alert( names ) // John, Pete, Mary

// My solution
// let john = { name: 'John', age: 25 };
// let pete = { name: 'Pete', age: 30 };
// let mary = { name: 'Mary', age: 28 };

// let users = [john, pete, mary];

// let names = users.map((n) => n.name);

// alert(names); // John, Pete, Mary

// Exercises 3
// Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

// The formula for the average is (age1 + age2 + ... + ageN) / N. For instance:

// let john = { name: "John", age: 25 }
// let pete = { name: "Pete", age: 30 }
// let mary = { name: "Mary", age: 29 }

// let arr = [ john, pete, mary ]

// alert( getAverageAge(arr) )   // (25 + 30 + 29) / 3 = 28

// My solution
let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 29 };

let arr = [john, pete, mary];

const getAverageAge = (arr) => {
  const ages = arr.map((n) => n.age); // get list or array of ages
  return ages.reduce((sum, num) => (sum += num), 0) / ages.length; // get a sum of ages and divide it by the amount of age numbers
};

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
