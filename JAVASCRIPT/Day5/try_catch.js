//The try statement defines a code block to run (to try).
//The catch statement defines a code block to handle any error.
try{
    const number = 12

    number += 2;
    console.log(number);
}
catch(err){
    //console.log(err);
    console.log(err.name);
    console.log("You tried to add 2 to a const variable");
}








