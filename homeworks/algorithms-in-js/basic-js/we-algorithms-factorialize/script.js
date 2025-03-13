// Factorialize!
// Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Example Outputs:
// factorialize(0) should return 1.
// factorialize(10) should return 3628800.
// factorialize(20) should return 2432902008176640000.

// My solution:
// Create a function
// Create a result variable
// For loop from 0 to n
// If n=0 then result=1;
// Multiply all the numbers in loop
// Print the result

const factorialize = (n) => {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  console.log(`Factorial of ${n} = `, factorial);
  return factorial;
};

factorialize(5); //120
factorialize(0); // return 1.
factorialize(10); // return 3628800.
factorialize(20); // return 2432902008176640000.
