const { input } = require("./input")

/* 
A = Rock
B = Paper
C = Scissors
X = Rock ==> 1 pt
Y = Paper ==> 2 pt
Z = Scissors ==> 3 pt

0 points for loss
3 points for a draw
6 points for a win
*/

let score = 0;
// index 0 is theirs
// index 1 is ours
input.map(item =>{
    // Points based on your guess
    if(item[1] === "X") score++
    if(item[1] === "Y") score+=2
    if(item[1] === "Z") score+=3
    // Tie
    if(item[0] === "A" && item[1] === "X"){
        score += 3;
    }
    if(item[0] === "B" && item[1] === "Y"){
        score += 3;
    }
    if(item[0] === "C" && item[1] === "Z"){
        score += 3;
    }
    // If you win
    // rock beats scissors
    if(item[0] === "C" && item[1] === "X") score+=6
    // Paper beats rock
    if(item[0] === "A" && item[1] === "Y") score+=6
    // Scissors beats paper
    if(item[0] === "B" && item[1] === "Z") score+=6
})

console.log(score)