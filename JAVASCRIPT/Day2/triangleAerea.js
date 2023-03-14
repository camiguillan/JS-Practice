const prompt = require("prompt-sync")();

function triangleArea(base, height){
    return base*height;
}

console.log("Let's calculate the Area of a Triangle")
const b = prompt("insert base measures \n");
const h = prompt("insert height measures \n");

area = triangleArea(b,h);
console.log(` Triangle area is: ${area}`);