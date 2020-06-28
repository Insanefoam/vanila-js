let user = {
    name: 'John',
    sayHi() {
        console.log('Hi', this.name);
    }
}

setTimeout(user.sayHi, 1000); //Hi undefiend

setTimeout(() => user.sayHi(), 2000); // Hello from another user

setTimeout(user.sayHi.bind(user), 1000); // Hi John

user.sayHi = function () {
    console.log('Hello from another user');
}

user.sayHi = function () {
    console.log('Hi from', this.name);
}.bind(user);

setTimeout(user.sayHi, 3000);

user.say = function (phrase) {
    console.log(`${this.name} says ${phrase}`);
}

//Bind all function in object
for (let key in user) {
    if (typeof user[key] == 'function') {
        user[key] = user[key].bind(user);
    }
}

let johnSayHello = user.say.bind(user, 'hello');
johnSayHello();