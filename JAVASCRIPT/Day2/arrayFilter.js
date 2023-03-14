const nums = [6,8,1,25,14,12,22,36,17,9];

const numsBelow10 = nums.filter(num => isBelow10(num));

function isBelow10(num){
    return parseInt(num) < 10;
}

console.log("These are the numbers available:", nums.join(", ") );

console.log("These are the numbers available below 10:", numsBelow10.join(", "));

