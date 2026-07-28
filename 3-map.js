//* map()

let randomNumbers = [4,8,15,16,23,42]

//* create a new array with the elments multiplied by 100

let multipliedNumbers = randomNumbers.map((number) => {
  console.log(number)

  let newValue = number * 100
  //* ALWAYS expect a return 
  return newValue
})

console.log(multipliedNumbers)

let names = ["bob", "rocio", "juliette", "simi"]

let capitalizedNames = names.map((name) => {
  let capName = name[0].toUpperCase() + name.slice(1)
  return capName
})

console.log(capitalizedNames)