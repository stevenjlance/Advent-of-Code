const { input } = require('./input');
let totalPoints = 0;
input.forEach(card => {
    let cardPoints = 0;
    // Array of structure [card #, numbers to test, winning numbers]
    let testCard = card[0].trim().split(": ")
    testCard.push(card[1].trim())
    // Pull off candidate and winning numbers. Replace all double spaces with single spaces. Covert each string to a number
    let candidateNumbers = testCard[1].trim().replace(/\s+/g, ' ').split(" ").map(num => Number(num))
    let winningNumbers = testCard[2].trim().replace(/\s+/g, ' ').split(" ").map(num => Number(num))

    candidateNumbers.forEach(num => {
        // If it has a winning number, update points
        if(winningNumbers.includes(num)){
            if(cardPoints === 0) cardPoints = 1;
            else cardPoints *= 2;
        }
    })
    // Add summed card points to the total points
    totalPoints += cardPoints
})

// Part 1 Answer
console.log(totalPoints);