const { tree, getSize } = require("./part1");

const totalSpace = 70000000;
const requiredSpace = 30000000;

const usedSpace = getSize(tree)
// Total space remaining
const availableSapce = totalSpace - usedSpace;
// Space needing to be cleared out
const minimumFolderSize = requiredSpace - availableSapce;

const candidateFolders = [];

getSize(tree, (name, size) => {
    // iterate through recursivly and find sizes. Update array to hold those that have a size larger than minimum size
    if(size >= minimumFolderSize){
        candidateFolders.push({name, size})
    }
})
candidateFolders.sort((a, b) => a.size - b.size)
// Smallest folder that meets criteria
console.log(candidateFolders[0].size)