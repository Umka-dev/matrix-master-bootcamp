// Friday: Fibonacci Sequence
// A great friend of yours, Fibonacci, just came up with a sequence of numbers that is really easy to compute. However, his time allows him to calculate by hand only the first 10-15 terms of the sequence; of course, he is busy trying to come up with some other interesting sequence. So he gives you the first terms and asks you to write an algorithm that will return the n-th term in the sequence.

// His sequence looks like this: 1 1 2 3 5 8 13 21 34 ...

// Immediately you find the pattern: setting the first two terms to be 1, any other term is the sum of the two previous terms. 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13 and so on.

// In this way, if n would be equal to 4 your result should be 3; but if n is 7, then the result is 13.

// But these are small numbers, which can be computed by hand. What about bigger numbers? Let's see what results you will get for the following n's:

// n = 43 -> x
// n = 101 -> x
// n = 227 -> x
// n = 491 -> x
// n = 881 -> x

// My solution
// Define function that takes array of two first elements and number n as the parametrs
// Assume that i=n-1;
// For loop for i from 2nd index to n
// Calculate next element of sequence arr[i]=arr[i-2]+arr[i-1]
// Return arr[n-1]

const nthFibNumber = (arr, n) => {
  // console.log(arr, n);
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
    // console.log(i, arr[i]);
  }
  return arr[n - 1];
};

console.log(`4th element = `, nthFibNumber([1, 1], 4)); // 3
console.log(`7th element = `, nthFibNumber([1, 1], 7)); // 13
console.log(`43th element = `, nthFibNumber([1, 1], 43)); // 433494437
console.log(`101th element = `, nthFibNumber([1, 1], 101)); // 573147844013817200000
console.log(`227th element = `, nthFibNumber([1, 1], 227)); // 1.2322798146364122e+47
console.log(`491th element = `, nthFibNumber([1, 1], 491)); // 1.8341986124518392e+102
console.log(`881th element = `, nthFibNumber([1, 1], 881)); // 5.869837224475641e+183

// Other better solution
// Define a function that takes a number as the nth
// Condition for two first elements = 1;
// Define variables that keep previous and current element values
// For loop starts from 3rd element until n
// Calculate next element value
// Change prev and curr
// Return current nth element of the Fibonacci sequence
const fibonacci = (n) => {
  if (n === 1 || n === 2) return 1;
  let prev = 1,
    curr = 1;
  for (let i = 3; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
};

console.log(fibonacci(4)); // 3
console.log(fibonacci(7)); // 13
console.log(fibonacci(43)); // 433494437
