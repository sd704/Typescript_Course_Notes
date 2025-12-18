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

// Field decorator logic
// Here target will always be undefined because it works before the variable is initialized
function fieldLogger(target: undefined, ctx: ClassFieldDecoratorContext) {
    console.log('fieldLogger decorator')
    console.log(target)
    console.log(ctx)

    return (initialValue: any) => {
        console.log("initialValue : " + initialValue)
        return initialValue + ' Smith'
    }
}


// ECMAScript decorator
@logger
class P {
    @fieldLogger
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
    // fieldLogger decorator
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
    // class_1 { greet: [Function: bound ], name: 'Max Smith' }
    // Executing original function
    // Hi Max Smith