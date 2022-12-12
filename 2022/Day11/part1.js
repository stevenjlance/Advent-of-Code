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

        arr.forEach(val => {
            let worryLevel
            if(amount === "old"){
                
                if(operator === "*"){
                    worryLevel = Math.floor((val * val) / 3)
                }
                else {
                    worryLevel = Math.floor((val + val) / 3)
                }
            }
            else {
                amount = parseInt(amount, 10)
                if(operator === "+"){
                    worryLevel = Math.floor((val + amount) / 3)
                }
                else {
                    worryLevel = Math.floor(val * amount / 3)
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
let monkeyCount =  [monkies["0"]["inspectionCount"], monkies["1"]["inspectionCount"], monkies["2"]["inspectionCount"], monkies["3"]["inspectionCount"],  monkies["4"]["inspectionCount"],  monkies["5"]["inspectionCount"],  monkies["6"]["inspectionCount"],  monkies["7"]["inspectionCount"]]
monkeyCount.sort(function(a, b){return b-a});


console.log(monkeyCount[0] * monkeyCount[1])
