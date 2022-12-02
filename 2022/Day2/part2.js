const { input } = require("./input")
/* 
A = Rock ==> 1 pt
B = Paper ===> 2 pt
C = Scissors ===> 3 pt
X ==> Need to lose
Y ==> Need to draw
Z ==> Need to win

0 points for loss
3 points for a draw
6 points for a win
*/
let score = 0;

input.map(item => {
    // Need to lose
    if(item[1] === "X"){
        // They throw rock
        if(item[0] === "A"){
            // Scissors to lose
            score += 3
        }
        // They throw paper
        if(item[0] === "B"){
            // Rock to lose
            score += 1
        }
        // They throw scissors
        if(item[0] === "C"){
            // Paper to lose
            score += 2
        }
    }
    // Need to draw
    if(item[1] === "Y"){
        score += 3
        // They throw rock
        if(item[0] === "A"){
            // rock to tie
            score += 1
        }
        // They throw paper
        if(item[0] === "B"){
            // Paper to tie
            score += 2
        }
        if(item[0] === "C"){
            // Scissors to tie
            score += 3
        }
    }

    // Need to win
    if(item[1] === "Z"){
        score += 6
        // They throw rock
        if(item[0] === "A"){
            // Paper to win
            score += 2
        }
        // They throw paper
        if(item[0] === "B"){
            // scissors to win
            score += 3
        }
        // They throw scissors
        if(item[0] === "C"){
            // rock to win
            score += 1
        }
    }

})

console.log(score)