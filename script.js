console.log("testing")

//* Callbacks

function greetPerson(name) {
  // let name = "bob" || "sarah"
  console.log(`Hello ${name}`)
}

function greetVipPerson(name) {
  console.log(`Hello Very Important Person, ${name}`)
}

// greetPerson("bob")
// greetPerson("sarah")

function welcomeUser(name, callback) {
  // let name = "bob" || "sarah"
  // let callback = greetPerson || greetVipPerson
  callback(name)
  console.log("Welcome to the website!")

}

welcomeUser("bob", greetPerson )
welcomeUser("sarah", greetVipPerson)
welcomeUser("patrick", (name) => {
  console.log(`Hola ${name}`)
})

//* methods that use callbacks

let randomNumbers = [4,8,15,16,23,42]

// function doSomething() {
//   console.log("Potato")
// }

// randomNumbers.forEach( doSomething ) // x6

// randomNumbers.forEach( (eachNumber) => {
//   console.log(eachNumber)
// } )

//* the way the forEach method is built looks something like this:
// Array.prototype.forEach = function(callback) {
//   for (let i = 0; i < Array.length; i++) {
//     callback(Array[i], i)
//   }
// }

for (let i = 0; i < randomNumbers.length; i++) {
  console.log(i, randomNumbers[i])
}

let sum = 0;

randomNumbers.forEach((element, index) => {
  console.log(index, element)
  // if (element % 2 === 0) {
  //   console.log(element)
  //   sum += element
  // }
})

console.log(sum) // 70, sum of all the even numbers

//* forEach loop is a cleaner method for looping over an array.