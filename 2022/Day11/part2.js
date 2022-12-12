const { monkies } = require("./input")

let round = 1;
while(round < 21){
    for(let key in monkies){
        let [...arr] = monkies[key].itemsArr
        let operator = monkies[key]["operator"];
        let amount = monkies[key]["amount"];
        let test = parseInt(monkies[key]["test"],10)
        let trueTarget = monkies[key]["true"];
        let falseTarget = monkies[key]["false"];
        let inspect = monkies[key].itemsArr.length;
        monkies[key].inspectionCount = inspect + monkies[key].inspectionCount ;
        for(let i = 0; i < arr.length; i++){
            
        }
        arr.forEach(val => {
            let worryLevel
            if(amount === "old"){
                
                if(operator === "*"){
                    worryLevel = Math.floor((val * val))
                }
                else {
                    worryLevel = Math.floor((val + val))
                }
            }
            else {
                amount = parseInt(amount, 10)
                if(operator === "+"){
                    worryLevel = Math.floor((val + amount))
                }
                else {
                    worryLevel = Math.floor(val * amount)
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
let monkeyCount =  [monkies["0"]["inspectionCount"], monkies["1"]["inspectionCount"], monkies["2"]["inspectionCount"], monkies["3"]["inspectionCount"]]
monkeyCount.sort(function(a, b){return b-a});


console.log(monkeyCount[0] * monkeyCount[1])
console.log(monkeyCount)
