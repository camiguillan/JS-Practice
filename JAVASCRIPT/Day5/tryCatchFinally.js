const prompt = require("prompt-sync")();
number = prompt('enter your age \n');

try{
    if(number > 18){
        console.log('COOL!');
    }else throw "NO UNDER AGE PEOPLE IS ALLOWED HERE";

}catch(err){
    console.log(err);
}