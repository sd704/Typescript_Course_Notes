// Class decorator logic
function logger<T extends new (...args: any[]) => any>(target: T, ctx: ClassDecoratorContext) {
    console.log('logger decorator')
    console.log(target)
    console.log(ctx)

    return class extends target {
        constructor(...args: any[]) {
            super(...args)
            console.log('Class Constructor')
            console.log(this)
        }
    }
}

// Method decorator logic
function autobind(target: (...args: any[]) => any, ctx: ClassMethodDecoratorContext) {
    console.log(target)
    console.log(ctx)

    // This is a utility method provided by the context object, passed to decorator automatically by JS
    // The ctx.addInitializer() method registers a callback function that runs during instance initialization, AFTER the constructor executes. 
    // It's a way to hook into the instance creation lifecycle without modifying the constructor itself.
    // Arrow function WON'T work inside this ()=>{}
    ctx.addInitializer(function (this: any) {
        this[ctx.name] = this[ctx.name].bind(this)
    })

    // We can also modify the method by sending a new method [OPTIONAL]
    return function (this: any) {
        console.log('Executing original function')
        
        // Executing old method with bind
        target.apply(this)

        // target()
        // target() is the old method, where bind is not applied
        // Executing this will make "const greet = m.greet; greet();" to not work 
    }
}


// ECMAScript decorator
@logger
class P {
    name = 'Max'

    // constructor() { this.greet = this.greet.bind(this) }

    @autobind
    greet() {
        console.log(`Hi ${this.name}`)
    }
}

const m = new P()
m.greet() // Hi Max, This is valid
const greet = m.greet
greet() // Hi undefined, This is invalid, JS issue with 'this'
// This can be solved by this line inside class:
// constructor() { this.greet = this.greet.bind(this) }
// Or we can use a decorator:
// ctx.addInitializer(function (this: any) {
//     this[ctx.name] = this[ctx.name].bind(this)
// })
// Hi Max







// Output before ctx.addInitializer ->
    // [Function (anonymous)]
    // {
    // kind: 'method',
    // name: 'greet',
    // static: false,
    // private: false,
    // access: { has: [Function: has], get: [Function: get] },
    // metadata: undefined,
    // addInitializer: [Function (anonymous)]
    // }
    // logger decorator
    // [Function: P]
    // {
    // kind: 'class',
    // name: 'P',
    // metadata: undefined,
    // addInitializer: [Function (anonymous)]
    // }
    // Class Constructor
    // class_1 { name: 'Max' }
    // Hi undefined
    // Hi Max




// Output after ctx.addInitializer ->
    // [Function (anonymous)]
    // {
    //   kind: 'method',
    //   name: 'greet',
    //   static: false,
    //   private: false,
    //   access: { has: [Function: has], get: [Function: get] },
    //   metadata: undefined,
    //   addInitializer: [Function (anonymous)]
    // }
    // logger decorator
    // [Function: P]
    // {
    //   kind: 'class',
    //   name: 'P',
    //   metadata: undefined,
    //   addInitializer: [Function (anonymous)]
    // }
    // Class Constructor
    // class_1 { greet: [Function: bound ], name: 'Max' }
    // Executing original function
    // Hi Max
    // Executing original function
    // Hi Max