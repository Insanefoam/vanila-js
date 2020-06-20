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

//On '<' and '>' operators operands cast to Number
console.log('0' > 1) // false
//Or if both operands are String, then they compare lehigraphical
console.log('a' > 'b') // false

console.log('' == false) // true
//When strong '===' then JS doesnt cast operands
console.log('' === false) //false

console.log(1 || '') // 1