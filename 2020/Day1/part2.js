const { input } = require('./input');

for(let i = 0; i < input.length; i++){
    const first = input[i];
    for(let j = i; j < input.length; j++){
        const second = input[j];
        for(let k = j; k < input.length; k++){
            const third = input[k];
            if(first + second + third === 2020){
                console.log(first * second * third);
                break
            }
        }
    }
}