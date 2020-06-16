//keys(), values() and entries() method are availble for Map, Set, Array and Object

let user = {
    name: "John",
    age: 20
}

for(let val of Object.keys(user))
    console.log(val)

for(let val of Object.values(user))
    console.log(val)

for(let field in user)
    console.log(field)