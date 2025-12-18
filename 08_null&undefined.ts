// We can give null and undefined as types also

var a: string | null
a = 'Hi'
a = null

var b: string | undefined
b = undefined


// undefined: A variable has been declared but has not yet been assigned a value.
// null: The intentional absence of any value—explicitly set by the programmer to show "no value."
// NaN (Not-a-Number): Indicates a computation that cannot produce a meaningful number.
let xq = 0 / 0;          // NaN
let yq = parseInt("abc"); // NaN


// JAVASCRIPT FEATURE

var inputX = ''
const didProvideInputX = inputX || false
// This will return false
// it will check if inputX has value, if its null or undefined or empty string '', it will return the right side of ||

var inputY = ''
const didProvideInputY = inputY ?? false
// This will return inputY
// Only checks null or undefined 


// OUTPUT
// var t=[]
// console.log(t||false)
// -> []

// var t=''
// console.log(t||false)
// -> false

// var t=null
// console.log(t||false)
// -> false

// var t=''
// console.log(t??false)
// -> ''

// var t=[]
// console.log(t??false)
// -> []

// var t=null
// console.log(t??false)
// -> false
