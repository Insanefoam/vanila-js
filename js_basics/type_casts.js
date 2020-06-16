let fls = false
console.log(String(fls)) // 'false'

//Cast to number laws:
//Undefied -> NaN
//null -> 0
//true/false -> 1/2
//String -> String - spaces on edges -> cast to numer -> if Error then NaN, else number
console.log('6' / '3') // 2
console.log(Number(undefined)) // NaN
console.log(Number(null)) // 0
console.log(Number(true)) // 1
console.log(Number('   54546    ')) // 54546

//String conversion
//If some of operands are String, then other operands cast to String and concat
console.log('2' + 5) //25

//Boolean cast
//If some argument are intuitive are 'empty' then it cast to 0, else cast to 1
console.log(Boolean('')) //false
console.log(Boolean(32)) //true