function func1(){
    console.log("Hello");
    return this;
}



const function2 = func1();
console.log(function2);
