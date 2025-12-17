// typeof is a JS operator
const n = 'Max'
let m = 'Max'
console.log(typeof n) // string

// This is a type alias
type User = string

// Here its using TS's typeof operator
type User2 = typeof n // 'Max', it will take value for const
type User3 = typeof m // string, it will take type for let/var




// IMPORTANT USECASE FOR typeof

const gameSettings = {
    diff: 'easy',
    lvl: 10,
    didStart: false,
    players: ['John', 'Jane']
}

// Lets say, we already have have an object
// We want to create a type based on this object
// So we can do this
type Settings = typeof gameSettings

function loadGame(s: Settings) { }
loadGame(gameSettings)

// We can also use it directly
function loadGame2(s: typeof gameSettings) { }




// ANOTHER USECASE
// We can use typeof with functions

function sum(a: number, b: number) {
    return a + b;
}

function subtract(a: number, b: number) {
    return a - b;
}

type SumFn = typeof sum;
type SubtractFn = typeof subtract;

function performMathAction(cb: SumFn | SubtractFn) {
    // some code...
}




//

const x = {
    name: 'Max',
    age: 29,
    permission: [
        { id: 789, title: 'Admin' }
    ]
}

type X = typeof x

// type X = {
//     name: string;
//     age: number;
//     permission: {
//         id: number;
//         title: string;
//     }[];
// }