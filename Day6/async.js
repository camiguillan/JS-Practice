//Functions running in parallel with other functions are called asynchronous

setTimeout(saySomething, 3000); //It logs something after 3 seconds, only once 

function saySomething(){
    myFunction ("something");
}

function myFunction(value) {
  console.log(value.toUpperCase());
}

// It logs Hi every one second
setInterval(sayHi, 1000);

function sayHi(){
    console.log("Hi");
}