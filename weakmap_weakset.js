//Difference betwen Map and WeakMap is that object in WeakMap will be deleted
//after he stand unreachable
let weakmap = new WeakMap();

let obj = {name: "John"};

let map = new Map();
map.add(obj, 123);
weakmap.add(obj, 123);
obj = null;
//Obj will be reachable, but if we delete map.add(obj, 123) line - he stand 
//unrachable and delete from weakMap