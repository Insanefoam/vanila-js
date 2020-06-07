const array = [1, 2, 3, 4, 5]

//Методы для работы с массивами: reduce, map, filter
//Reduce: params - 1. callback(prev, cur, index, arr); 2. initialState for prev
const sumOfArr = array.reduce((prevVal, curVal, index, array) => {
    return prevVal + curVal;
}, 0)
console.log(sumOfArr)

//Map: params - 1. callback(cur)
const squares = array.map(el => el * el)
console.log(squares)

//Filter: params - 1. predicate(return true|false)
const odds = array.filter(el => el % 2 === 0)
console.log(odds)
