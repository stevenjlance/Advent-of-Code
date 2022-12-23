const { input } = require("./input");

const movesDefinition = {
    R: {
        x: 1,
        y: 0,
    },
    L: {
        x: -1,
        y: 0,
    },
    U: {
        x: 0,
        y: -1,
    },
    D: {
        x: 0,
        y: 1,
    }
}

class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    move(direction){
        const delta = movesDefinition[direction]
        this.x += delta.x;
        this.y += delta.y;
    }

    follow(point){
        // Manhattan distance formula
        const distance = Math.max(Math.abs(this.x - point.x), Math.abs(this.y - point.y))
        // Only move if the distance is larger than 1
        if(distance > 1){
            // move tail
            const directionX = point.x - this.x;
            const directionY = point.y - this.y;
            // If 0 => do nothing
            // 1 or 2 => this.x++
            // -1 or -2 ==> this.x--
            this.x += Math.abs(directionX) === 2 ? directionX/2 : directionX;
            this.y += Math.abs(directionY) === 2 ? directionY/2 : directionY;
        }
    }
    
}

function markVisited(x, y, visited){
    visited.add(`${x}-${y}`);
}

function part1() {
    // track unique nodes visited
    const visited = new Set()
    const head = new Point(0, 0);
    const tail = new Point(0, 0);
    markVisited(0, 0, visited)    
    // iterate through each input
    for(const line of input){
        // Iterate for total number of moves
        for(let i = 0; i < line.totalMoves; i++){
            head.move(line.direction)
            tail.follow(head);
            markVisited(tail.x, tail.y, visited)
        }
    }
    console.log(`Unique Tails Part 1: ${visited.size}`)
}

part1()

module.exports = {
    movesDefinition,
    Point,
    markVisited
}