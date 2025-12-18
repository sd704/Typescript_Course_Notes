// Decorator Logic
// We need 2 arguments, target -> Class, ctx -> Context
// ClassDecoratorContext is built into TS
function logger<T extends new (...args: any[]) => any>(target: T, ctx: ClassDecoratorContext) {
    console.log('logger decorator')
    console.log(target)
    console.log(ctx)

    // Output ->
        // logger decorator
        // [Function: P]
        // {
        //     kind: 'class',
        //     name: 'P',
        //     metadata: undefined,
        //     addInitializer: [Function(anonymous)]
        // }

    // This is how we can modify the class [OPTIONAL]
    // We are returning a anonymous class based on actual class, this class will replace class P
    // This is a valid JS code
    return class extends target {
        age = 35
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

const max = new P()
console.log(max) // class_1 { name: 'Max', age: 35 }