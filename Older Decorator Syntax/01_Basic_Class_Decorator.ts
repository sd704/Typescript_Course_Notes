// Decorator Function parameters depend on where we use the decorator
// For Class we get the constructor of the class
function Logger(constructor: Function) {
    console.log('Logger Decorator')
    console.log(constructor)
}

@Logger
class Person {
    name = 'Max'

    constructor() {
        console.log('Created Person Object')
    }
}

const p = new Person()
console.log(p)

// Output:
    // Logger Decorator
    // class Person {}
    // Created Person Object 
    // Object { name: "Max" }