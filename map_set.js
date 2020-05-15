let map = new Map()
const arr = [1, 2, 3, 4, 5]

//Add entrie - set method
for(let num of arr){
    map.set(num, num ** 2)
}

//Can add entries via operation sequence
map.set(6, 36)
    .set(7, 49)
    .set(8, 64)

//Get iterable keys, values, entries objects
for(let key of map.keys())
    console.log(key)

for(let value of map.values())
    console.log(value)

for(let entry of map)
    console.log(entry)

//Create object from map
const squaresObj = Object.fromEntries(map.entries())

//Set
let set = new Set()

for(let el of arr)
    set.add(el)
set.add(1)
console.log(set)

function unique(arr) {
    let set = new Set();

    for(let el of arr){
        set.add(el);
    }
    const uniqueArr = [...set.values()];
    return uniqueArr;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values))