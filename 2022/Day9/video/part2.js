const { input } = require("./input");
const {movesDefinition, Point, markVisited} = require("./part1")

function part2() {
    const knots = new Array(10).fill(0).map(_ => new Point(0,0));
    // track unique nodes visited
    const visited = new Set()
    markVisited(0, 0, visited)  

    // iterate through each input
    for(const line of input){
        // Iterate for total number of moves
        for(let i = 0; i < line.totalMoves; i++){
            // move head according to the instructions
            knots[0].move(line.direction)
            // move the rest of the rope
            for(let knot = 1; knot < knots.length; knot++){
                const point = knots[knot];
                // follow the previous knot
                point.follow(knots[knot - 1])
            }
            const tail = knots[knots.length - 1];
            markVisited(tail.x, tail.y, visited)
        }
    }
    console.log(`Unique Tails Part 2: ${visited.size}`)
}

part2();