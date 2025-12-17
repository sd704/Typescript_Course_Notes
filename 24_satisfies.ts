let user: Record<string, string | number | boolean>
user = {}

user.x1 = 90
user.x2 = 78

// Here is a problem
// 'x3' is not defined, which TS doesn't check if it exists or not
// TS only checks the key validity
// So TS will not give any error
console.log(user.x3)


//----------------------------------------------------------------------------------------------------------------


// FIX -> using 'satisfies'
let user2 = {
    x1: 90,
    x2: 78
} satisfies Record<string, string | number | boolean>

// TS will give error here as it will check is the value exists
// console.log(user2.x3)