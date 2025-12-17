var pet = ['cat', 'dog']
// We cannot push a different type (other than string) in this array

//Declare a string array
var pets: string[]

// If we want multiple types (Union Types)
var phnNos: (string | number)[]
phnNos = [1, '20']

// GENERIC TYPES
let users: Array<string | number>

// If we want the array to have only 2 values (fixed length), we can use Tuple
let results: [number, number]
let res: [number, string, boolean]