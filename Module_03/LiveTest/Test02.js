function getLastItem(arr){
    return arr[arr.length-1];
}
console.log(getLastItem([1, 2, 3, 4, 5])); // Output: 5

console.log(getLastItem(['apple', 'banana', 'orange']));  // Output: 'orange'

console.log(getLastItem([]));      // Output: undefined