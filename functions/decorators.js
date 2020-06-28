function slow(x) {
    console.log('Calculate some big shit with', x, '...');
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {
            console.log('Cached');
            return cache.get(x);
        }

        let result = func.call(this, x);
        cache.set(x, result);

        return result;
    }
}

let slowWithCaching = cachingDecorator(slow);
console.log(slowWithCaching(5));
console.log(slowWithCaching(5));

let user = {
    name: 'John',

    calculate(x) {
        console.log(`${this.name} calculate some big shit with ${x}`);
    }
};

user.calculate = cachingDecorator(user.calculate);
user.calculate(5);

function work(a, b) {
    console.log(a + b); // произвольная функция или метод
}

function spy(func) {
    return function foo(a, b) {
        if (!foo.calls) {
            foo.calls = [];
        }
        foo.calls.push([a, b]);
        func(a, b);
    }
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}