const { organizedStacks, commands } = require('./input');

commands.forEach(command => {
    const amount = command[0];
    const fromStack = command[1]
    const toStack = command[2]
    // Iterate the number of times the stack requires
    for(let i = 0; i < amount; i++){
        const oldFromStack = organizedStacks[fromStack]
        const item = organizedStacks[fromStack][0];
        const currentArr = organizedStacks[toStack]
        if(oldFromStack.length !== 0){
            oldFromStack.shift();
            currentArr.unshift(item);
            organizedStacks[toStack] = currentArr
            organizedStacks[fromStack] = oldFromStack
        }
        
    }
})
let part1Answer = ""
for(key in organizedStacks){
    part1Answer += organizedStacks[key][0][1]
}
console.log(part1Answer)