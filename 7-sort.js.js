//* sort() => MUTATES the original
//* toSorted() => does not MUTATE the origin. creates a new ref.

// let someLetters = ["e", "a", "c", "tb", "b", "ta", "A", "G"]
// someLetters.sort()
// console.log(someLetters)

let numbers = [1, 10, 4, 2, 20, 400, 800, 8, 101]
//numbers.sort()
//console.log(numbers)


numbers.sort((elem2, elem1) => {
  console.log(elem2, elem1)
  // return:
  // negative number (-1) => the first element goes first
  // positive number (1) => the second element goes first
  // 0 => both element are the same

  if (elem1 > elem2) {
    return 1
  } else if (elem2 > elem1) {
    return -1
  } else {
    return 0
  }

  // return elem1 - elem2

})

console.log(numbers)

