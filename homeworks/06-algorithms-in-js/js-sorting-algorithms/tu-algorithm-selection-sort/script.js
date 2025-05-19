// Tuesday: Selection Sort
// how does it work: This is very simple. Go through the array, find the index of the lowest element swap the lowest element with the first element. Hence first element is the lowest element in the array.
// Now go through the rest of the array (excluding the first element) find the index of the lowest and swap it with the second element.
// That is how it continues to select (find out) the lowest element of the array and put it on the left until it hits the last element.

// Solution
// Define a function that takes an array as a parameter
// Define two variables to hold the index of minimal number in the array (indOfMin) and the temp to swap two element's values
// For loop to iterate through the array
// Set the indOfMin equal to i
// Another For loop that starts from the next element (i+1) until the end of the array
// Condition to check if the next element is smaller than the current element
// True set the variable to the smallest element index
// After the loop ends bring the smallest element to the front of the array
// Return the sorted array
// Call the function

const selectionSort = (arr) => {
  let indexOfMin = 0;
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[indexOfMin];
    arr[indexOfMin] = temp;
  }
  return arr;
};
console.log(selectionSort([2, 7, 9, 13, 8, 6, 5, 1, 3])); //  [1, 2, 3, 5, 6, 7, 8, 9, 13]
console.log(selectionSort([9, 2, 8, 3, 7, 6, 5, 1, 10, 4])); //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36])); //  [13, 29, 36, 51, 52, 66, 72, 87, 98]
