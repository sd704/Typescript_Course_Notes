// 'interface' is a TS feature
// there is no implementation inside interface
// It just defines how a object or class should be structured
interface Auth {
    email: string
    password: string

    login(): void
    logout(): void
}

// DECLARATION MERGING
// If the interface is declared with same name, it will be merged
interface Auth {
    name: string
}

// INTERFACE AS OBJECT TYPES
let user: Auth
user = {
    email: 'abc@gmail.com',
    password: '123x',
    name: 'Max',
    login() {
        // Implement login
    },
    logout() {
        // Implement logout
    },
}

// If we want only an object, we can use type also
type Auth1 = {
    email: string
    password: string

    login(): void
    logout(): void
}

let user1: Auth1