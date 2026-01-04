// Decorator Factory
function Logger(str: string) {
    console.log('Logger Factory')
    return function (constructor: Function) {
        console.log(str)
        console.log(constructor)
    }
}

// Decorator Factory
function AddTemplate(htmlElement: string, elementId: string) {
    console.log('AddTemplate Factory')
    return function (constructor: any) {
        console.log('AddTemplate')
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


// Multiple Decorators execute bottom up
// Here @AddTemplate then @Logger

// But factory functions will execute in order
// Here @Logger then @AddTemplate

@Logger("Logger")
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

// Logger Factory 
// AddTemplate Factory
// AddTemplate
// Created Person Object
// Logger
// class Person {}
// Created Person Object
// Object { name: "Max" }