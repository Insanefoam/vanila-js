let arr = ["Daniil", "Ivan", "Eduard", "Mikita"]

//Desctructing operator
let [first, second, third, fourth] = [...arr]

//Can skip elements via ','
let [f, s,,fr] = [...arr]
console.log(f, s, fr)

//Can take multiple elements via '...'
let [one, two, ...last] = [...arr]
console.log(last)

let user = { name: "John", years: 30 };

let {name, years: age, isAdmin = false} = user
console.log(name, age, isAdmin)