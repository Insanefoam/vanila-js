//In JS function are objects
function sayHi() {
    console.log('Hi');
}

console.log(sayHi.name) //sayHi
console.log(sayHi.length) //0 - count of arguments

//Function can have attributes
function counter() {
    counter.count++;
    console.log('Function call', counter.count);
}

counter.count = 0;
counter();
counter();
console.log(counter.count);

//Named function expression
let foo = function g(param) {
    if (param) {
        console.log('Hello ', param)
    } else {
        g('Guest')
    }
}

foo('Daniil'); //Hello Daniil
foo(); //Hello Guest

function sum(a) {
    let count = a;

    function f(b) {
        count += b;
        return f;
    }

    f.toString = function() {
        return count;
    }

    return f;
}

console.log(sum(2)(2)(1) == 5);
console.log(sum(2)(2)(1) == 5);