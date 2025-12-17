class User {
    // In JS, we would not need to initialize variables here
    // the constructor can directly declare variables in JS
    name: string
    age: number

    constructor(n: string, a: number) {
        this.name = n
        this.age = a
    }
}

let u1 = new User('Max', 40)

//----------------------------------------------------------------------------------------------------------------

// Another way (same functionality) by TS
class User2 {
    // public and private are TS exclusive features
    // Here phone is optional
    constructor(public name: string, public age: number, private phone?: string) { }

    printPhone() {
        console.log("Phone no. : " + this.phone)
    }
}

let u2 = new User2('Max', 40, '1111100000')
u2.age = 70

// Phone is invalid because its not public
// u2.phone 

u2.printPhone()

//----------------------------------------------------------------------------------------------------------------

class User3 {
    // readonly ensures a property can be read, but cannot be changed
    // It can be used with other access specifiers
    readonly name: string = 'Max'
    public readonly age: number = 56

    // 'static' property allows us to call a property or method without creating a class object
    static x = 67

    static greet() {
        console.log('Hello!')
    }
}

// Calling static method directly
User3.greet()

let u3 = new User3()
// We cannot change age as its 'readonly'
// u3.age = 67