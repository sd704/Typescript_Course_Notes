// GENERIC TYPES

// Existing generic type 'Array<>'
let abc: Array<string>
abc = ['a', 'b']

// Creating a Custom generic type
// 'T' is a common naming convention, we can add multiple placeholders depending on use case
type DataStore<T> = {
    [key: string]: T
}

// Generic types gives us this flexibility to change types we want to use
let store: DataStore<string | boolean> = {}
let ageStore: DataStore<number> = {}