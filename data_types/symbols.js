//В качестве названи полей у объекта могут быть либо строки, либо символы

//Символ - уникальный идентификатор
let id = Symbol()

//Id - symbol name
id = Symbol('id')

//Symbol are garatie unique
let id2 = Symbol('id')
console.log(id == id2)

//Cant get symbol field without symbol object
let user = {
    name: "Daniil"
}
user[id] = 1
console.log(user[id])

//Can create not unique symbols
let sym1 = Symbol.for("secret")
let sym2 = Symbol.for("secret")
user[sym1] = "top secret"
console.log(user[sym1])
console.log(user[sym2])

//Get name with symbol object
console.log(Symbol.keyFor(sym1))