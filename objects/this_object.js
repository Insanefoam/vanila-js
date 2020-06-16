'use strict';

let num = 10;
console.log(this);

function foo() {
    console.log(this.num)
}

let obj = {
    num: 10,
    method: function () {
        console.log(this.num)
    },
    methodOuter: foo,
    methodInner: function (g) {
        g()
    }
}

// foo()
// obj.method()
// obj.methodOuter()
// obj.methodInner(foo)
// obj.g = foo;
// obj.g()