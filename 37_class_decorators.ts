
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




// ECMAScript decorator
@logger
class P {
    name = 'Max'

    greet() {
        console.log(`Hi ${this.name}`)
    }
}

const m = new P()
const n = new P()

// Output ->
    // logger decorator
    // [Function: P]
    // {
    //   kind: 'class',
    //   name: 'P',
    //   metadata: undefined,
    //   addInitializer: [Function (anonymous)]
    // }
    // Class Constructor
    // class_1 { name: 'Max' }
    // Class Constructor
    // class_1 { name: 'Max' }