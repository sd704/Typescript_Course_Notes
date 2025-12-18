// Explicitly set type to variable. Types: number, boolean, string, any
var userName: string
userName = 'Jack'

// Here Typscript doesn't show error because it can get the type from the value assigned
var age = 34

// This is not recommended, we should let Typescript decide the type where variable is directly assigned
var phn: string = '1111100000'

// Explicitly set type to function parameters
function add(a: number, b = 5) {
    return a + b
}

// Incase we want a variable to have flexible types
var x: any = 28
x = '45'
x = []
x = null
x = undefined

// Incase we want a variable to have flexible types, but cannot be null or undefined
var xx: {}
xx = 45
xx = 'as'
xx = []

// UNION TYPE
// We can give just specific types to a variable
var y: string | number = 56
var z: boolean | string | number = 'xyz'