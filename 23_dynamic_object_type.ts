// Here we can add multiple properties
// Property name is defined by [prop: string]
// Values allowed string | number | boolean

type Data = {
    [prop: string]: string | number | boolean
}

let user: Data = {}

user.id = 90
user.name = 'Max'
user.isAdmin = false


// ANOTHER WAY
// If we wantto declare a variable as object but we don't know the keys, we can use Generic Type 'Record'
// Inside <>, first argument means key type, javascript supports various key types, number or string
// Second is the value type
let user2: Record<string, string | number | boolean>
user2 = {
    age: 56
}