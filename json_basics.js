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
console.log(json)