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
