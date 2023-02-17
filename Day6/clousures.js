/* lexical scope -> i can define a variable ouside a function an access to 
that variable inside the function */

var age = 22;

function isAnAdult(){
    return (age > 18)? "Yes, it is" : "No, it is not" ; 
}

console.log(isAnAdult());


/* A closure is the combination of a function and the lexical environment within which that function was declared. 
This environment consists of any local variables that were in-scope at the time the closure was created.
 */






