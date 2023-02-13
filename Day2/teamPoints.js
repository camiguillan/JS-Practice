const prompt = require("prompt-sync")();

function calcFinalScore(wins, draws, losses){
    winPoints = wins * 3;
    drawPoints = draws * 1 ;
    losePoints = 0 * losses ;
    finalScore = winPoints +  drawPoints + losePoints;
    return finalScore;
}

function stringToNum(s){
    return parseInt(s);
}

const winS = prompt("Enter the number of matches that you team won\n");
const drawS = prompt("Enter the number of matches drawn by your team \n");
const loseS = prompt("Enter the number of matches lost by your team \n");

win = stringToNum(winS);
draw = stringToNum(drawS);
lose = stringToNum(loseS);

matches = win + draw + lose; 

let score = calcFinalScore(win,draw,lose);
console.log('Your team score is:', score, "out of ", matches, "matches");

