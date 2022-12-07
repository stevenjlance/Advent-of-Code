const { listeners } = require('process');
const { input } = require('./input');

const makeTree = (input) => {
    const tree = {
        name: "/",
        isDirectory: true,
        children: []
    } // node: name, isDirectory, size, children, parent

    let currentNode = tree;
    let currentCommand = null

    for(const line in input){
        if(input[line][0] === "$"){
            // run command
            const command = input[line].slice(2).split(" ");
            currentCommand = command[0];
            // Change directory if cd
            if(currentCommand === "cd"){
                const location = command[1]
                if(location === "/"){
                    // Go back to the top of the tree
                    currentNode = tree;
                }
                else if(location === ".."){
                    // Go up tree
                    currentNode = currentNode.parent
                }
                else {
                    // Go down a level
                    currentNode = currentNode.children.find((folder) => folder.isDirectory && folder.name === location)
                }
            }
        }
        else {
            // is first value a number? Then create a file at the current node
            if(currentCommand === "ls" && !isNaN(input[line][0])){
                const [size, name] = input[line].split(" ")
                const node = {
                    name,
                    size: parseInt(size, 10)
                }
                currentNode.children.push(node)
            }
            // make a directory if first 3 characters are dir  
            if(currentCommand === "ls" && input[line].slice(0, 3) === "dir"){
                const [dir, name] = input[line].split(" ")
                const node = {
                    name,
                    isDirectory: true,
                    children: [],
                    parent: currentNode
                }
                currentNode.children.push(node)
            }
        }
    }
    return tree;
}
// Generate a file tree from the data
let tree = makeTree(input)

const getSize = (node, directoryCallback = () => {}) => {
    // if the node is not a directory, then we are at the bottom of the tree
    if(!node.isDirectory){
        return node.size;
    }
    // Find the size of each child. Call function recursively if it is not a file.
    const directorySize = node.children
    .map((child) => getSize(child, directoryCallback))
    // Sum
    .reduce((a, b) => a + b, 0)
    directoryCallback(node.name, directorySize)
    return directorySize
}

function part1(tree) {
    const thresholdSize = 100000;
    let sumSmallFolder = 0;
  
    getSize(tree, (name, size) => {
      if (size < thresholdSize) {
        sumSmallFolder += size;
      }
    });
  
    console.log(sumSmallFolder);
}

part1(tree)

module.exports = {
	tree,
    getSize
};