const { input } = require('./input')

let scoreGrid = [];
for(let i = 0; i < input.length; i++){
    let row = [];
    for(let j = 0; j < input[i].length; j++){
        row.push(0);
    }
    scoreGrid.push(row)
}
const transposeArray = arr =>
  arr[0].map((_, c) => arr.map(row => row[c]));

const part2 = (input) =>
  input
  .map(
    (line, y, grid, transposed = transposeArray(grid)) =>
      line.map((_, x) =>{
        let arr = [
            line.slice(x + 1),
            line.slice(0, x).reverse(),
            transposed[x].slice(0, y).reverse(),
            transposed[x].slice(y + 1),
          ]
        let val = parseInt(line[x],10);
        let rightCount = 0;
        let leftCount = 0
        let bottomCount = 0;
        let topCount = 0;
        for(let i = 0; i < arr[0].length; i++){
            if(val > parseInt(arr[0][i])) rightCount++;
            else if(i !== 0){
                rightCount++
                break
            }
            else break;
        }
        
        if(rightCount !== 0){
            for(let i = 0; i < arr[1].length; i++){
                if(val > parseInt(arr[1][i])) leftCount++;
                else if(i !== 0){
                    leftCount++
                    break
                }
                else break;
            }
        }
        
        if(rightCount !== 0 && leftCount !== 0){
            for(let i = 0; i < arr[2].length; i++){
                if(val > parseInt(arr[2][i])) bottomCount++;
                else if(i !== 0){
                    bottomCount++
                    break
                }
                else break;
            }
        }
        
        if(rightCount !== 0 && leftCount !== 0 & bottomCount !== 0){
            for(let i = 0; i < arr[3].length; i++){
                if(val > parseInt(arr[3][i])) topCount++;
                else if(i !== 0){
                    topCount++
                    break
                }
                else break;
            }
        }
        if(rightCount !== 0 && leftCount !== 0 & bottomCount !== 0 && topCount !== 0){
            let score = topCount * bottomCount * rightCount * leftCount;
            scoreGrid[x][y] = score;
        }
        
        return scoreGrid;
      })
  )
part2(input)
console.log(scoreGrid)
let max = -1;
scoreGrid.forEach(row => {
    row.forEach(score => {
        if(score > max){
            max = score
        }
    })
})
console.log(max)