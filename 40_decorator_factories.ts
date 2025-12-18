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
    console.log('autobind decorator')
    console.log(target)
    console.log(ctx)

    ctx.addInitializer(function (this: any) {
        this[ctx.name] = this[ctx.name].bind(this)
    })

    return function (this: any) {
        console.log('Executing original function')
        target.apply(this)
    }
}

// Decorator factory
// A decorator factory is a function that returns a decorator function. 
// It allows you to pass parameters to customize the decorator's behavior before it's applied to a class, method, or field.
// Without a factory, you can't pass custom values to decorators. With a factory, you can.
function replacer<T>(inputValue: T) {
    // Field decorator logic
    return function replaceValue(target: undefined, ctx: ClassFieldDecoratorContext) {
        console.log('replaceValue decorator')
        console.log(target)
        console.log(ctx)

        return (initialValue: any) => {
            console.log("initialValue : " + initialValue)
            return inputValue
        }
    }
}

// ECMAScript decorator
@logger
class P {
    @replacer('John')
    name = 'Max'

    @autobind
    greet() {
        console.log(`Hi ${this.name}`)
    }
}

const m = new P()
m.greet()




// Output:
    // autobind decorator
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
    // replaceValue decorator
    // undefined
    // {
    //   kind: 'field',
    //   name: 'name',
    //   static: false,
    //   private: false,
    //   access: { has: [Function: has], get: [Function: get], set: [Function: set] },
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
    // initialValue : Max
    // Class Constructor
    // class_1 { greet: [Function: bound ], name: 'John' }
    // Executing original function
    // Hi John