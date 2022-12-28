const { input } = require("./input");

let maxScore = -1;

let TEASPOONS = 100;

for (var frosting = 0; frosting <= TEASPOONS; frosting++) {
    for(var candy = TEASPOONS - frosting; candy >= 0; candy--){
        for(let butterscotch = TEASPOONS - frosting - candy; butterscotch >= 0; butterscotch--){
            let sugar = TEASPOONS - frosting - candy - butterscotch;
            let score = getScore(frosting, candy, butterscotch, sugar)
            if(score > maxScore) {
                maxScore = score;
            }
        }
        
    }
}



function getScore(frosting, candy, butterscotch, sugar) {
    // remove lines 24 and 25 to answer for part 1
    let calories = input[0].calories * frosting + input[1].calories * candy + input[2].calories * butterscotch + input[3].calories * sugar;
    if(calories !== 500) return -1;
    let capacity = input[0].capacity * frosting + input[1].capacity * candy + input[2].capacity * butterscotch + input[3].capacity * candy; 
    if(capacity < 0) capacity = 0;
    let durability = input[0].durability * frosting + input[1].durability * candy + input[2].durability * butterscotch + input[3].durability * sugar;
    if(durability < 0) durability = 0;
    let flavor = input[0].flavor * frosting + input[1].flavor * candy + input[2].flavor * butterscotch + input[3].flavor * sugar;
    if(flavor < 0) flavor = 0;
    let texture = input[0].texture * frosting + input[1].texture * candy + input[2].texture * butterscotch + input[3].texture * sugar;
    if(texture < 0) texture = 0;
    return capacity * durability * flavor * texture;
}

console.log(maxScore)

