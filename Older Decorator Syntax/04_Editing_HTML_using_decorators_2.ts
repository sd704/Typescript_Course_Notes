// Decorator Factory
function Logger(str: string) {
    return function (constructor: Function) {
        console.log(str)
        console.log(constructor)
    }
}

// Decorator Factory
function AddTemplate(htmlElement: string, elementId: string) {
    return function (constructor: any) {
        const element = document.getElementById(elementId)
        // We are initialising the class constructor here
        const c = new constructor()
        if (element) {
            element.innerHTML = htmlElement
            // c.name is name variable in class
            element.querySelector('h1')!.textContent = c.name
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

// Shows Max on screen

// Created Person Object
// Object { name: "Max" }