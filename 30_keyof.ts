type Person = { name: string, age: number }

// keyof is a typescript operator
// keyof will make the keys of an object as types
type PersonKeys = keyof Person

// k can have values 'name' and 'age'
let k: PersonKeys
k = "age"
k = "name"




// USECASE
function getprop<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}