//* reverse => MUTATES the original array
//* toReversed => DOES not mutate the origina array

let orderedNumbers = [1, 2, 3, 4, 5]

// orderedNumbers.reverse()
let reverseNumbers = orderedNumbers.toReversed()

console.log("new reversed", reverseNumbers)
console.log("original", orderedNumbers)