//Functions running in parallel with other functions are called asynchronous
let = n =0;
setTimeout(saySomething, 5000); //It logs something after 3 seconds, only once 

function saySomething(){
    myFunction ("something");
}

function myFunction(value) {
  console.log(value.toUpperCase());
}

// It logs Hi every one second
setTimeout( set1secInterval, 1000);
setTimeout(clearInt, 10000);

function set1secInterval(){
  n = setInterval(sayHi, 1000)
}

function sayHi(){
    console.log("Hi");
}

function clearInt(){
  clearInterval(n);
}
