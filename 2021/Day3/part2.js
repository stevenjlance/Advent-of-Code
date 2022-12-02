const { input } = require('./input')
const { gamma, epsilon } = require('./part1');

let oxy = [...input]
let co2 = [...input]

const findMax = (arr, position) => {
    let counter = [0, 0]
    arr.map(val => {
        if(val[position] === "0") {
            counter[0] += 1;
        }
        else {
            counter[1] += 1;
        }
    })
    if(counter[0] > counter[1]) return "0"
    return "1"
}

const findMin = (arr, position) => {
    let counter = [0, 0]
    arr.map(val => {
        if(val[position] === "0") {
            counter[0] += 1;
        }
        else {
            counter[1] += 1;
        }
    })
    if(counter[0] > counter[1]) return "1"
    return "0"
}

let position = 0;
while(oxy.length > 1){
    let maxDigit = findMax(oxy, position)
    oxy = oxy.filter(num => num[position] === maxDigit);
    position++
}

position = 0
while(co2.length > 1){
    let minDigit = findMin(co2, position)
    co2 = co2.filter(num => num[position] === minDigit);
    position++
}

let result = parseInt(oxy, 2) * parseInt(co2, 2)
console.log(result)