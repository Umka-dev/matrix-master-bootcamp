// Firday: 3rd Highest Number in Array
// Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. Your algorithm should do only one iteration of the array (just one for/while loop).
// Example:
// //Using the array
// const arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]
// //The correct answer is : 11

// My solution:
// Create a function that takes an array
// Check an array length enough for the task
// Create variables for the three highest numbers in the array
// For loop through array elements
// If the current element is higher than the first (which is 0) then we found the first highest number
// Reissgn the values - third = second;  second = first;  first = num;
// Else if the number is higher than the second and lower than the first
// Then we found 2nd highest - second = num reassign the values
// Else if the number is higher than the third and lower than the second
// Then we found 3rd highest - third = num;
// Print the 3rd highest
// Test with other arrays

const findThirdHighest = (arr) => {
  if (arr.length < 3) {
    console.log('Array must have at least 3 elements');
    return;
  }

  let first = 0;
  let second = 0;
  let third = 0;

  for (let num of arr) {
    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second && num < first) {
      third = second;
      second = num;
    } else if (num > third && num < second) {
      third = num;
    }
  }

  console.log('3rd highest:', third);
  return third;
};

findThirdHighest([5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]); // 11
findThirdHighest([5, 2, 8, 20, -2, 0, 7, 3]); // 7
findThirdHighest([5, 2, 8, -2, 0, 7]); // 5
findThirdHighest([5, 2]); // Array must have at least 3 elements
