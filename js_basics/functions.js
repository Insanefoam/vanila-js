//Function with standart parameters
function foo(a, b = 'nothing here') {
    console.log(a, b)
}

foo('hi', 'ho')
foo('ge')

//result with empty return or without return === undefied
console.log(foo() === undefined) // true

//Function expression
let g = function (param) {
    console.log(param)
}

//Function declaration
function p(param) { 
    console.log(param)
}