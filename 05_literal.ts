// Literal Types
// Literal types are basically values that are allowed for a variable
let str: 'admin'

// This is Union Type and Literal Type combination, can be used instead on enums
// the variable won't accept anything other than the given values
var userRole: 'admin' | 'editor' | 'guest'
userRole = 'admin'

// This will only take array of 2 values, with 1 or -1
let possibleresults: [1 | -1, 1 | -1]
possibleresults = [1, -1]