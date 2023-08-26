"use strict";
function printObjectProperties(obj){
    if(Object.keys(obj).length==""){
        console.log("The object is empty!!");
    }
    else {
        for (let props in obj){
            console.log(props+"= "+obj[props]);
        }
        }

}
let shoe= {};
let person={name: "John Doe",
    username: "jonnydoe",
    age: 14};
printObjectProperties(shoe);
printObjectProperties(person);

