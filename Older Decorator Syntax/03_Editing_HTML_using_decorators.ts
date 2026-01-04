// Decorator Factory
function Logger(str: string) {
    return function (constructor: Function) {
        console.log(str)
        console.log(constructor)
    }
}

// Decorator Factory
function AddTemplate(htmlElement: string, elementId: string) {
    // We can give '_' to variable names when its necessary to put, but not required
    return function (_: Function) {
        const element = document.getElementById(elementId)
        if (element) {
            element.innerHTML = htmlElement
        }
    }
}

// @Logger("Logger Decorator Factory")
@AddTemplate('<h1>Hello!</h1>', 'app')
class Person {
    name = 'Max'

    constructor() {
        console.log('Created Person Object')
    }
}

const p = new Person()
console.log(p)


// Output:

    // Shows Hello! on screen

    // Created Person Object
    // Object { name: "Max" }