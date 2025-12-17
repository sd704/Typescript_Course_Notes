// Here Typescript can decide the type
let user = {
    name: 'Don',
    age: 45
}

// We can declare ourselves
let userProfile: {
    name: string,
    age: number,
    phn: string | number,
    hobbies: string[]
    role: {
        description: string,
        id: number
    }
}

//Optional Property, is a property is optional
let userProfile3: {
    name: string,
    age: number,
    phn?: string | number
}

// If we wantto declare a variable as object but we don't know the keys, we can use Generic Type 'Record'
// Inside <>, first argument means key type, javascript supports various key types, number or string
// Second is the value type
let user2: Record<string, number | string>
user2 = {}
user2 = {
    age: 56
}