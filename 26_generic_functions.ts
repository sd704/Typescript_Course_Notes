// GENERIC FUNCTIONS
function merge<T>(a: T, b: T) {
    return [a, b]
}

const f = merge<string | number>(1, 2)

// Typecsript can understand the type based on the values passed so we can ignore T
const g = merge(1, 2)




// Using Multiple Placeholder
function merge2<T, U>(a: T, b: U) {
    return [a, b]
}

const h = merge2<number, string>(1, '2')
const i = merge2(1, '2')




// ADDING constraint to T, We want to limit what values T can be assigned 
function mergeObj<T extends object>(a: T, b: T) {
    return { ...a, ...b }
}

const m = mergeObj({ name: 'Max' }, { age: 56 })

// As we are passing different types of Objects to mergeObj, TypeScript can throw error
// A better way is to add 2 different placeholder

function improvedMergeObj<T extends object, U extends object>(a: T, b: U) {
    return { ...a, ...b }
}

const n = improvedMergeObj({ name: 'Max' }, { age: 56 })