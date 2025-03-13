// Write a program that returns an array consisting of the largest number from each 
// provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

let initialArr=[[1,4,3,2],[2,4,3,5],[3,1,7,0],[4,8,2,9]]; // result should be [4,5,7,9]

// Solution with 2 functions
// // Function to find max element in sub array
// const findMax=(subArr)=>{
// let max=subArr[0];
// for (let i=1; i<subArr.length; i++){
//   if (subArr[i]>max){
//     max=subArr[i];
//   }
// }
// return max;
// }

// //Function to add maxs to the result array
// const arrOfMaxs=(arr)=>{
//   let arrMax=[];
//   for (let i=0; i<arr.length; i++){
//     arrMax.push(findMax(arr[i]));
//   }
//   return arrMax;
// }
// console.log(arrOfMaxs(initialArr)); [4,5,7,9]

// Solution with the nested for loops
const findMaxs=(arr)=>{
  let arrOfMaxs=[];
  for (let i=0; i<arr.length; i++){
    arrOfMaxs.push(arr[i][0]);
    for (let j=0; j<arr.length; j++){
      if (arrOfMaxs[i]<arr[i][j]){
      arrOfMaxs[i]=arr[i][j];
      }
    }
  }
  return arrOfMaxs;
}
console.log(findMaxs(initialArr)); // [4, 5, 7, 9]

// T-diagram for arr=[[1,4,3,2],[2,4,3,5],[3,1,7,0],[4,8,2,9]]
//     i     |    j     |     arrOfMaxs
//     0     |    0     |       [1]
//     0     |    1     |       [4]
//     0     |    2     |       [4]
//     0     |    3     |       [4]
//     1     |    0     |       [4,2]
//     1     |    1     |       [4,4]
//     1     |    2     |       [4,4]
//     1     |    3     |       [4,5]
//    ....