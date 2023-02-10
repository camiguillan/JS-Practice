//declaring a set of variables
let a, b, sum;

// Using variables
a = 10;
b = 5;
sum = a + b;

let d = (a+b)*sum;

// Concatinating strings
let firstName, surname, completeName;
firstName = 'Camila';
surname= 'Guillan';
completeName = firstName + " " + surname;

//Exponentiation Assignment Operator
let exp= a**b;

//Comparisson operators
let isAbiggerThanb;
isAbiggerThanb = b < a; //True


//Logical operators
let bool1 = true, 
    bool2 = false, $and, $or;

$and = bool1 && bool2 ; // False 
$or = bool1 || bool2 ;  // True

// Ternary operator
let f=true;
ternary= f ? '5' : '3'; // 5

//typeof -> returns the type of a variable



//Showing the value of the variables 
console.log("Variables values are: ", "a=", a, "b=", b, "c=", sum, 'd=', d);
console.log("Variable a + b equals: ", a+b);
console.log(completeName);
console.log("a**b=", exp);
console.log('b < a: ', isAbiggerThanb); 
console.log('And operation:', $and, '\n Or operation:', $or);
console.log('Ternary operation:',ternary);
console.log('typeof -> returns the type of a variable:', typeof a); //Number


//String methods
console.log('\n----STRING METHODS----');
console.log('Complete Name length:', completeName.length);
console.log('Estracting only the Fisrt name from complete name:', completeName.substr(0,6) );
console.log("Replacing Camila to Sol in completeName:", completeName.replace('Camila', 'Sol'));


// If, If-else, If-elseIf
console.log('\n----IF----');
let text;
if (a%2==0)
    text= "a is pair";
else
    text = "a is odd";

console.log(text);

//Switch 
console.log("\n-----SWITCH-----");
const age = 22;
let  text2;

switch(true){
    case (age < 13 ):     
        text2 = "You are a child!";
        break;
    case (age > 13 && age < 21):
        text2 = "You are a teenager!";
        break;
    case (age > 21 && age < 30): 
        text2 = "You are a young adult!";
        break;
    case (age > 30):
        text2 = "You are an adult!"; 
        break;
    default: text2 = "You are inmortal ";
}

console.log("Based on your age,", text2);

//For 
console.log('\n----FOR----');

for(let i = 0; i < 10; i++){
    console.log("The number is", i);
}

//While
console.log("\n----WHILE----");
let num= 10;

while (num < 20){
    console.log("The number is", num);
    num ++;
}

// Do-While
console.log("\n----DO-WHILE----");
let num2 = 10;

do {
    console.log("The number is", num2);
    num2 ++;
}
while (num2 < 20);


