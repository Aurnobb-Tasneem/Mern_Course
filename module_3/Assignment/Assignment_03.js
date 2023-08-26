"use strict";
function mergeArrays(arr1,arr2){
    let merge=[...arr1,...arr2];
    return merge;
}
const arr1 = [1, 2, 3];


const arr2 = [4, 5, 6];





console.log(mergeArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]