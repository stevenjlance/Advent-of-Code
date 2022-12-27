const { input } = require("./input");

let cordSet = new Set();
let maxY = 0;
// Make rock map
input.forEach(val => {
    let cords = [];
    for(key in val){
        let x = val[key].x;
        let y = val[key].y;
        cords.push([parseInt(x), parseInt(y)])
    }
    for(let i = 0; i < cords.length - 1; i++){
        let x = cords[i][0];
        let y = cords[i][1]
        let nextX = cords[i + 1][0];
        let nextY = cords[i + 1][1];
        if(y > maxY) maxY = y;
        if(nextY > maxY) maxY = nextY;
        if(x !== nextX){
            // Iterate up
            if(x < nextX){
                for(let start = x; start <= nextX; start++){
                    cordSet.add(`x:${start}, y:${y}`);
                }
            }
            else {
                for(let start = x; start >= nextX; start--){
                    cordSet.add(`x:${start}, y:${y}`);
                }
            }
            
        }
        else if(y !== nextY){
            // iterate y
            if(y < nextY){
                for(let start = y; start <= nextY; start++){
                    cordSet.add(`x:${x}, y:${start}`);
                }
            }
            // iterate down
            else {
                for(let start = y; start >= nextY; start--){
                    cordSet.add(`x:${x}, y:${start}`);
                }
            }
            
        }
    }
})
// Part 1
let endlessVoid = false;
let sandUnits = 0;
while(!endlessVoid){
    let point = { x: 500, y: 0 };
    sandUnits++;
    while(!endlessVoid){
        if(!cordSet.has(`x:${point.x}, y:${point.y + 1}`)){
            // direct fall
            point.y++;
        }
        else if(!cordSet.has(`x:${point.x - 1}, y:${point.y + 1}`)){
            // diagonal fall to the left
            point.y++;
            point.x--;
        }
        else if(!cordSet.has(`x:${point.x + 1}, y:${point.y + 1}`)){
            // diagonal fall to the right
            point.y++;
            point.x++;
        }
        else {
            // can't fall any further
            cordSet.add(`x:${point.x}, y:${point.y}`);
            break;
        }
        if(point.y >= maxY){
            // Sand is past the maxY
            endlessVoid = true;
            sandUnits--;
        }
    }
}
console.log(sandUnits)

module.exports = {
    cordSet,
    maxY,
}