type X<T> = T extends any[] ? T[number] : never
// Here we conditionally assign type of X
// if T is an array, we give it the type of the elements inside the array
// else its 'never'
// 'never' for non return type for ... that will not complete and will not return anything


// ANOTHER USECASE
type Person = { firstName: string, lastName: string }
type conditionalReturnType<T> = T extends Person ? string : never
// We verify is T has both properties as Person, then return type is string, else never

function verifyPerson<T extends object>(p: T): conditionalReturnType<T> {
    if (
        'firstName' in p &&
        'lastName' in p &&
        p.firstName &&
        p.lastName
    ) {
        return `Hi ${p.firstName} ${p.lastName}!` as conditionalReturnType<T>
    }
    throw new Error('Person not found!')
}