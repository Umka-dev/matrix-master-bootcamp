// Declare a function titleCase(arr) that returns the provided string with the first letter
// of each word capitalized. Make sure the rest of the word is in lowercase.
let str='tHis iS a tiTle';

const titleCase=(str)=>{
let strArr=str.toLowerCase().split(' ');// convert given string to lower case and split it to array elements
for (let i=0; i<strArr.length; i++){ // for every word in array
    strArr[i]=strArr[i][0].toUpperCase()+strArr[i].slice(1); // change the first letter to upper case and add the rest letters 
}
return strArr.join(' '); // return converted array to string with the words divided by spaces
}

console.log(titleCase(str)); // This is a title
console.log(titleCase('tHis Is another One titlE')); // This is a title

// T-diagram for the str='tHis iS a tiTle'
//  i  |  strArr                    
//  -  | ['this','is','a','title']
//  0  | ['This','is','a','title']
//  1  | ['This','Is','a','title']
//  2  | ['This','Is','A','title']
//  3  | ['This','Is','A','Title']
