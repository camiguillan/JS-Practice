/*resolve(value) – returns value if the code was executed successfully.
reject(error) – returns error if an error occured */
const prompt = require("prompt-sync")();


let promise = new Promise(function(resolve,reject){
 
    let a = prompt("Enter one number \n");
    let b = prompt("Enter another number \n");

    if(a == b){
        resolve();
    }
    else{
        reject();
    }

});

promise.
        then(function() {console.log("success, the numbers are equal to each other");}).
        catch(function() {console.log("Error, the numbers are not equal to each other");})

