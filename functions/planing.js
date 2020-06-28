function sayHi(from, to) {
    console.log(`Hi from ${from} to ${to}`);
}

setTimeout(sayHi, 1000); //Hi from to
setTimeout(sayHi, 1000, 'Daniil', 'Serega'); //Hi from Daniil to Serega
//setTimeout("console.log('Hello')", 1000) Error in Node
let id = setTimeout(() => console.log('Hello'), 1000);
clearTimeout(id);

//Recusrive setTimeout
// let id2 = setTimeout(function tick() {
//     console.log('Tick');
//     id2 = setTimeout(tick, 1000);
// }, 1000);

// let int = setInterval(() => console.log('Tick'), 1000);
// setTimeout(clearInterval, 5000, int);

function printNumbers(from, to) {
    // let tmp = from;
    // let id = setInterval(() => {
    //     console.log(tmp)
    //     tmp++;
    // }, 1000);
    // setTimeout(clearInterval, (to - from + 2) * 1000, id);
    setTimeout(function foo(num) {
        console.log(num);
        num++;
        num === (to + 1) ? null : setTimeout(foo, 1000, num);
    }, 1000, from);
}

printNumbers(1, 5);