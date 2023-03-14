/*It is a JavaScript function that runs as soon as it defined. 
An IIFE (Immediately Invoked Function Expression) can be used for avoiding the variable hoisting 
from within the blocks.
It allows the public access to methods while retaining the 
privacy for variables defined in the function. */

var a =1, b=3;

(function() { 
    sum = a + b;
    console.log("a + b = ", sum); })();  


// Another way of using it 
(()=> {rest = a - b;
        console.log("a - b = ", rest);} )();