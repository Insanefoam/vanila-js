let user = {
    name: 'Daniil',
    age: 20
}

let desc = Object.getOwnPropertyDescriptor(user, 'name');
console.log(desc); //Descriptors for 'name' field

Object.defineProperty(user, 'name', {writable: false});
user.name = 'John';
console.log(user); //name: 'Daniil'

user.toString = function() {
    console.log(this.name, this.age);
}
Object.defineProperty(user, 'toString', {enumerable: false});

for(let key in user) console.log(key); //name age

Object.defineProperty(user, 'age', {configurable: false, writable: false});
delete user.age; //error
//Object.defineProperty(user, 'age', {value: 30}); //error
console.log(user); // Daniil 20

Object.defineProperties(user, {
    name: {value: 'John'},
    toString: function() {
        console.log('Hello')
    }
});
console.log(user);

let props = Object.getOwnPropertyDescriptors(user);
let cloneWitProps = Object.defineProperties({}, props);
console.log(cloneWitProps);