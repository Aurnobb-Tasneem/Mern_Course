function minNumber(...number){
    let  min=number[0];
    for(var i=0;i<number.length;i++){
        if(min>number[i]){
            min=number[i];
        }
    }
    return min;
}
console.log(minNumber(5, 10, 3, 7)); // Output: 3