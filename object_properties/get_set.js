let user = {
    name: 'Daniil',
    age: 20,

    get fullInfo() {
        return `${this.name} ${this.age}`
    },

    set fullInfo(value) {
        [this.name, this.age] = value.split(' ');
    }
}

Object.defineProperty(user, 'fullInfo', {
    get: function () {
        return 'setter add';
    }
})

Object.defineProperty(user, 'job', {
    get: function () {
        return this._job
    },
    set: function (value) {
        if (value.length < 4)
            return;
        this._job = value;
    }
})

user.job = 'tax';
console.log(user.job);
user.job = 'taxi';
console.log(user.job);