// Decorator Factory
function Logger(str: string) {
    return function (constructor: Function) {
        console.log(str)
        console.log(constructor)
    }
}

@Logger("Logger Decorator Factory")
class Person {
    name = 'Max'

    constructor() {
        console.log('Created Person Object')
    }
}

const p = new Person()
console.log(p)

// Output:
    // Logger Decorator Factory
    // class Person {}
    // Created Person Object
    // Object { name: "Max" }