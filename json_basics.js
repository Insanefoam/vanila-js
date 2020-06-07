let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null,
    sayHi() {
        console.log("Hi")
    },
    id: undefined
};

//JSON ignore functions, Symbols and undefiend values
let json = JSON.stringify(student);
//console.log(json)

//Result of parse JSON
let obj = JSON.parse(json)
//console.log(obj)

//Recursive structure down here
let room = {
    number: 25
}

let meetup = {
    title: 'Programming discussion',
    participations: [{ name: 'Oleg' }, { name: 'Inga' }],
    place: room
}

room.occupiedBy = meetup
//Fix with Replacer
//And space parameter example
let string = JSON.stringify(meetup, (key, value) => key === 'occupiedBy' ? undefined : value, 50)
//console.log(string)

//Change to JSON function
room.toJSON = function () {
    return this.number
}

string = JSON.stringify(meetup, (key, value) => key === 'occupiedBy' ? undefined : value)
console.log(string)