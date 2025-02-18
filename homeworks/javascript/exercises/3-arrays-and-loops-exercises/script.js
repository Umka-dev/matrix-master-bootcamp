// Exercise-1
const myFavFruits = ['Persimmon', 'Mango', 'Pear', 'Apple', 'Banana'];

for (let counter = 0; counter < 4; counter++) {
  console.log(myFavFruits[counter]);
}

// Exercise-2
function calculateAverage(numbers) {
  if (numbers.length === 0) return 0; // Handle empty array case

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}

// Test calculateAverage function:
console.log(calculateAverage([10, 20, 30, 40, 50])); // Output: 30
console.log(calculateAverage([5, 15, 25])); // Output: 15
console.log(calculateAverage([])); // Output: 0

// Exercise-3
function findLargestNumber(arr) {
  if (arr.length === 0) {
    console.log('Array is empty.');
    return null;
  }

  let largest = arr[0]; // Assume the first number is the largest

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]; // Update largest if a bigger number is found
    }
  }

  console.log('Largest number:', largest);
  return largest;
}

// Test function findLargestNumber:
findLargestNumber([]); // Output: Array is empty.
findLargestNumber([10, 96, 3, 84, 7]); // Output: Largest number: 96

// Exercise-4
const wordsArr = ['Hello', 'my', 'friend!'];
sentence = '';
for (let i = 0; i < wordsArr.length; i++) {
  sentence += wordsArr[i] + ' ';
}
console.log(sentence);

// Exercise-5
function doesNameExist(arr, name) {
  console.log(arr, name);
  return arr.includes(name);
}

// Test function doesNameExist
let names = ['Daria', 'Sam', 'Alina', 'Reham', 'Divya'];
console.log(doesNameExist(names, 'Sam')); // true
console.log(doesNameExist(names, 'Tanya')); // false

// Exercise-6
let evenNumbers = [];

for (let i = 1; i < 21; i++) {
  if (i % 2 == 0) {
    evenNumbers.push(i);
  }
  evenNumbers;
}

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
