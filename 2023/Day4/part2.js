const { input } = require('./input');
let totalScratchCards = 0;

input.forEach((card, index) => {
    // Array of structure [card #, numbers to test, winning numbers, totalScratchCards]
    let testCard = card[0].trim().split(": ")
    testCard.push(card[1].trim())
    // Initially have one scratchcard for each card
    testCard.push(1)
    // Update input array with new card structure
    input[index] = testCard
})

input.forEach((card, index) => {
    // Pull off candidate and winning numbers. Replace all double spaces with single spaces
    let candidateNumbers = card[1].trim().replace(/\s+/g, ' ').split(" ").map(num => Number(num))
    let winningNumbers = card[2].trim().replace(/\s+/g, ' ').split(" ").map(num => Number(num))
    // Sum up the number of winningNumbers
    let totalWinning = 0;
    candidateNumbers.forEach(num => {
        if(winningNumbers.includes(num)) totalWinning++;
    })
    // Starting at 1 more than the currentCard increase their scratchCard count based on number of wins
    let multiplier = input[index][3]
    for(let i = index + 1; i < index + totalWinning + 1; i++){
        // The input[index][3] tells you how many times this will run (e.g. if you have 2 card 2's and each had 3 winning numbers, then you need to increase 3, 4, and 5 by 2 rather than 1)
        input[i][3] = input[i][3] + multiplier
    }
})
// Sum up all the scratchcards
input.forEach(card => {
    totalScratchCards += card[3]
})

console.log(totalScratchCards)