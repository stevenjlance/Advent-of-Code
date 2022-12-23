const input = "1113122113"
let acc = input;
let round = 1;
// change to 41 for part1
while(round < 51){
    let val = acc[0];
    let count = 1;
    let temp = "";
    if(acc.length === 1){
        temp = val + count;
    }
    else {
        for(let i = 1; i < acc.length; i++){
            if(val === acc[i]){
                count++;
            }
            else {
                temp += count.toString() + val;
                count = 1;
                val = acc[i]
            }
        }
        temp += count.toString() + val;
    }
    acc = temp;
    
    round++
}
console.log(acc.length)