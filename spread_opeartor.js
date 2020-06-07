//Rest parameters
function sum(...arg) {
    let sum = 0
    for (let el of arg)
        sum += el
    return sum
}

//console.log(sum(1, 2, 3, 4, 5))
function foo(arg1, arg2, ...rest) {
    console.log(arg1)
    console.log(arg2)
    console.log(rest)
}

//foo(1, 2, 3, 5, 3, 4, 5, 6)

//Spread operator
const numbers = [1, 2, 33, 4, 5]
//console.log(Math.max(...numbers))

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const merged = [...arr1, ...arr2]
//console.log(merged)

let str = 'Hello'
console.log(...str)