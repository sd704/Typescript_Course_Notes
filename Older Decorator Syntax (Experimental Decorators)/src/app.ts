// This time the HTML changes only when the object is created
// Earlier it happened before object creation


// Decorator Factory
function AddTemplate(htmlElement: string, elementId: string) {
    console.log('AddTemplate Factory')
    return function <T extends { new(...args: any[]): { name: string } }>(constructor: T) {
        return class extends constructor {
            constructor(..._: any[]) {
                super()
                console.log('AddTemplate')
                const element = document.getElementById(elementId)
                // We are initialising the class constructor here
                // const c = new constructor()
                if (element) {
                    element.innerHTML = htmlElement
                    // c.name is name variable in class
                    element.querySelector('h1')!.textContent = this.name
                }
            }
        }
    }
}


@AddTemplate('<h1>Hello!</h1>', 'app')
class Person {
    name = 'Max'

    constructor() {
        console.log('Created Person Object')
    }
}


// Output without instantiation:
    // Blank Screen
    // AddTemplate Factory


const p = new Person()
console.log(p)


// Output with instantiation:

    // Shows Max on screen

    // AddTemplate Factory 
    // Created Person Object
    // AddTemplate
    // Object { name: "Max" }