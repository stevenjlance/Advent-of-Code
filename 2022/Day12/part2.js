const { input } = require("./input") 

const { pointToInt, intToPoint } = require("./part1")

function getNeighbors2(x, y, map){
    const res = [];
    if(y + 1 < map.length  && map[y+1][x] >= map[y][x] - 1){
        res.push(pointToInt(x, y + 1))
    }
    if(y - 1 >= 0 && map[y-1][x] >= map[y][x] - 1){
       res.push(pointToInt(x, y - 1))
    }
    if(x + 1 < map[y].length && map[y][x+1] >= map[y][x] - 1){
        res.push(pointToInt(x + 1, y))
    }
    if(x - 1 >= 0 && map[y][x-1] >= map[y][x] - 1){
        res.push(pointToInt(x - 1, y))
    }
    return res;
}
// Go backwards and stop when you find an 'a'
function dijkstra2(map, start, end){
    const dist = {};
    const prev = {};
    let queue = []
    for(let y = 0; y < map.length; y++){
        for(let x = 0; x < map[y].length; x++){
            const id = pointToInt(x, y);
            dist[id] = Infinity;
            queue.push(id)
        }
    }
    dist[pointToInt(start.x, start.y)] = 0;
    // 0 is false so it will break the loop
    while(queue.length){
        let u = null;
        for(const current of queue){
            if(u === null || dist[current] < dist[u]){
                u = current;
            }
        }
        const point = intToPoint(u);
        if(map[point.y][point.x] === 0) {
            return dist[u];
        }
        queue = queue.filter(x => x !== u);
        
        const neighbors = getNeighbors2(point.x, point.y, map)
        for(const v of neighbors){
            if(queue.includes(v)) {
                const alt = dist[u] + 1;
                if(alt < dist[v]) {
                    dist[v] = alt;
                    prev[v] = u;
                }
            }
        }
    }
}

function part2(){
    const data = dijkstra2(input.map, input.end)
    console.log(data)
}

part2();