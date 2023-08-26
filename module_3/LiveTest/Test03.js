class Calculator{
    
    add(a,b){
        console.log(a+b);
}
    subtract(a,b){
       console.log(a-b);
    }
    multiply(a,b){
        console.log(a*b);
    }
    divide(a,b){
        console.log(a/b) ;
    }

}
var calculator = new Calculator()

calculator.add(10,5) // 15

calculator.subtract(10, 5) // 5

calculator.multiply(10, 5) // 50

calculator.divide(10, 5) //2

