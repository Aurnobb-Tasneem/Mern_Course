"use strict";
 function  doubleNumbers (arr){
     let doubleArr=arr.map((x)=>x*2);
     return doubleArr;

 }
const numbers = [1, 2, 3, 4, 5];


console.log(doubleNumbers(numbers)); // Output: [2, 4, 6, 8, 10]