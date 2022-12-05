const { organizedStacks, commands } = require('./input');

commands.forEach(command => {
    const amount = command[0];
    const fromStack = command[1]
    const toStack = command[2]
    const holder = []
    for(let i = 0; i < amount; i++){
        const oldFromStack = organizedStacks[fromStack]
        const item = organizedStacks[fromStack][0];
        holder.push(item)
        oldFromStack.shift();
        organizedStacks[fromStack] = oldFromStack
    }
    for(let i = holder.length - 1; i >= 0; i--){
        const currentArr = organizedStacks[toStack]
        currentArr.unshift(holder[i]);
        organizedStacks[toStack] = currentArr
    }  
})

let part2Answer = ""
for(key in organizedStacks){
    part2Answer += organizedStacks[key][0][1]
}
console.log(part2Answer)