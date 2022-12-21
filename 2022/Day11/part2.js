const { monkies } = require("./input")

let round = 1;
let modulo = 1;
// let modulo = monkies['0'].test;
// Get the modulo by multiplying all the test numbers together
for (let key in monkies){
    modulo *= monkies[key].test
}

while(round < 10001){
    for(let key in monkies){
        let [...arr] = monkies[key].itemsArr
        let operator = monkies[key]["operator"];
        let amount = monkies[key]["amount"];
        let test = parseInt(monkies[key]["test"],10)
        let trueTarget = monkies[key]["true"];
        let falseTarget = monkies[key]["false"];
        let inspect = monkies[key].itemsArr.length;
        monkies[key].inspectionCount = inspect + monkies[key].inspectionCount;
        
        arr.forEach(val => {
            let worryLevel
            if(amount === "old"){
                
                if(operator === "*"){
                    worryLevel = Math.floor((val * val) % modulo)
                }
                else {
                    worryLevel = Math.floor((val + val) % modulo)
                }
            }
            else {
                amount = parseInt(amount, 10)
                if(operator === "+"){
                    worryLevel = Math.floor((val + amount) % modulo)
                }
                else {
                    worryLevel = Math.floor((val * amount) % modulo)
                }
            }
            if(worryLevel % test === 0){
                let currentArr = monkies[trueTarget].itemsArr
                currentArr.push(worryLevel);
                monkies[trueTarget].itemsArr = currentArr
                monkies[key].itemsArr.shift()
            }
            else {
                let currentArr = monkies[falseTarget].itemsArr
                currentArr.push(worryLevel);
                monkies[falseTarget].itemsArr = currentArr
                monkies[key].itemsArr.shift()
            }
        })
        
    }
    round++;
}
let monkeyCount =  [monkies["0"]["inspectionCount"], monkies["1"]["inspectionCount"], monkies["2"]["inspectionCount"], monkies["3"]["inspectionCount"], monkies["4"]["inspectionCount"], monkies["5"]["inspectionCount"], monkies["6"]["inspectionCount"], monkies["7"]["inspectionCount"]]
monkeyCount.sort(function(a, b){return b-a});


console.log(monkeyCount[0] * monkeyCount[1])
console.log(monkeyCount)
