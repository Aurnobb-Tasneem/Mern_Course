"use strict";
function findMaxNumber (arr){
   let max=null;
    if(arr.length==null){
        max= null;
    }
    else{
        for(let i=0;i<arr.length;i++){
            if(max<arr[i]){
                max=arr[i];
            }
        }


    }
    if(max=="null"){return null;}
    else {return max;}
}
const numbers1 = [10, 20, 5, 30, 25];
console.log(findMaxNumber(numbers1));
const numbers2 = [5, 15, 7];


console.log(findMaxNumber(numbers2));
const emptyArray = [];


console.log(findMaxNumber(emptyArray)); // Output: null