function makeCounter() {
    let count = 0;

    return function () {
        return count++; // есть доступ к внешней переменной "count"
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

//Both functions have private lexical enviroment
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter2()); // 0

let name = 'Daniil';

function sayHi() {
    console.log('Hi', name);
}

name = 'Egor';
// Hi Egor
//Because when functions is called he search 'name' variable in his Lexical Enviroment
//Don't find it, and starts search in outter Lexical Enviroment, where name = 'Egor'
sayHi();

//IIFE
(function IIFE() {
    let name = 'John'
    console.log(name)
})();

function inBetween(a, b) {
    return function (c) {
        return c >= a && c <= b
    }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.filter(inBetween(2, 7)));