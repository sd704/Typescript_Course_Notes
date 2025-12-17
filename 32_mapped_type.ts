type F = (a: number, b: number) => number

type Operations = {
    add: F
    subtract: F
}

// We want a Results type to store all the operation results
// type Results = {
//     add: number,
//     subtract: number
// }


// Maps over T object, and for each key K saves type as number
type Results<T> = {
    [K in keyof T]: number
}




let math: Operations = {
    add(a: number, b: number) { return a + b },
    subtract(a: number, b: number) { return a - b }
}

let results: Results<Operations> = {
    add: math.add(1, 2),
    subtract: math.subtract(1, 2),
}




// Lets say we want the keys to be optional, so we can add '?'
type Results2<T> = {
    [K in keyof T]?: number
}

// or 
type Operations2 = {
    add?: F
    subtract?: F
}

// Or we want to make the keys not optional though its optional in the main object type, '-?'
type Results3<T> = {
    [K in keyof T]-?: number
}

// If we want the results to be read only
type Results4<T> = {
    readonly [K in keyof T]: number
}

// If we want to remove readonly (if obj type has readonly, it will be followed in mapped type)
// '-readonly' to remove readonly
type Operations5 = {
    readonly add: F
    readonly subtract: F
}

type Results5<T> = {
    -readonly [K in keyof T]: number
}
