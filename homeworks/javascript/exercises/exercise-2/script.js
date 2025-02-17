// Part 1
function addNumbers(number1, number2) {
  return number1 + number2;
}
// Testing the function with different numbers
console.log(addNumbers(5, 10)); // Output: 15
console.log(addNumbers(-3, 7)); // Output: 4
console.log(addNumbers(2.5, 3.5)); // Output: 6
console.log(addNumbers(100, 200)); // Output: 300

// Part 2
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Testing the function
console.log(reverseString('hello')); // Output: "olleh"
console.log(reverseString('world')); // Output: "dlrow"
console.log(reverseString('JavaScript')); // Output: "tpircSavaJ"
console.log(reverseString('12345')); // Output: "54321"
