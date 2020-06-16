'use strict';

//Unary plus - convert value to a Number
let str = '123';
console.log(+str + +'50'); // 173

let a, b, c;

a = b = c = 2 + 7;
//We can do chain approriate
console.log(a, b, c); //9 9 9

// '=' is return value
let d = 2 * (a = a - 5); // 2 * 4 = 8
console.log(d);

//POWWW!!!!
console.log(2 ** 10); // 1024
console.log(4 ** (1/2)) // 2

