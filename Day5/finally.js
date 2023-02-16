// The finally statement defines a code block to run regardless of the result.

let a = "Camila", b = "Guillan", c ; 
try{
    let f = 0, num1 = 10;
    c = divide(num1,f);
    if(c == Infinity) throw "Cannot divide by zero";

}catch(err){
    console.log(err);

}finally{
    let d = a + ' ' + b;
    console.log(d);
}

function divide(num1, num2){
    return num1 / num2;
}



