// Given an array of integers IntAtt, for example, IntArr = [2,7,1,-2], implement a function 
// to sort this array in ascending order (from lowest to largest) using the Selection Sort method.
// For this algorithm, write the pseudocode, before your JS code.

let IntArr = [2,7,1,-2];// result should be [-2,1,2,7]

// Define a function that takes an array as a parameter
// Define a variable to hold the index of the minimal number
// Define a variable to hold a temporary element for swapping
// For loop from 0 index to the array length
// Set the index of minimal equal to current index
// Inner For loop from next index (i+1) to the array length
// Condition to check if the current element is less then the minimal element
// True - set the index of minimal number equal to current index
// Inside the first for loop 
// Save the current element to the temporary variable
// Set the current element equal to the founded min element
// Set the prev minimal equal to temporary element
// Return the sorted array
// Call the function

const selectSort=(arr)=>{
  let indOfmin=0;
  let temp=0;
  for (let i=0; i<arr.length; i++){
    indOfmin=i;
    for (let j=i+1; j<arr.length; j++){
      if (arr[j]<arr[indOfmin]){
        indOfmin=j;
      }
    }
    temp=arr[i];
    arr[i]=arr[indOfmin];
    arr[indOfmin]=temp;
  }
  return arr;
};
console.log(selectSort(IntArr)); // [-2,1,2,7]
console.log(selectSort([9,2,-5,0,12,4])); // [-5, 0, 2, 4, 9, 12]

