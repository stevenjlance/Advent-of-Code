const { input } = require('./input');
let cycle = 0;
let x = 1;
let valsArray = [];

input.forEach(val => {
    let [command, amount] = val.split(" ");
    amount = parseInt(amount,10);
    if(command === "noop"){
        cycle++;
        // Check if it is the 20th, 60th, 100th, 140th, 180th, and 220th cycles
        if(cycle === 20 || cycle === 60 || cycle === 100 || cycle === 140 || cycle === 180 || cycle === 220){

            let signalStrength = x * cycle;
            valsArray.push(signalStrength);
        }
    }
    else {
         // First cycle
        cycle++;
        // Capture signal strength if one of these rounds
        if(cycle === 20 || cycle === 60 || cycle === 100 || cycle === 140 || cycle === 180 ||  cycle === 220){
            let signalStrength = cycle * x;
            valsArray.push(signalStrength);
            // Second cycle
            cycle++;
            x += amount;
            
        }
        else {
            cycle++; 
            if(cycle === 20 || cycle === 60 || cycle === 100 || cycle === 140 || cycle === 180 ||  cycle === 220){
                let signalStrength = cycle * x;
                valsArray.push(signalStrength);
            }
            x += amount;
        }
    }
})

let total = 0;
valsArray.forEach(val => {
    total += val;
})

console.log(total)