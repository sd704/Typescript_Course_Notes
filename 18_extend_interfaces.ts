interface User {
    name: string
    age: string
}

// We can extend interfaces as well
interface Auth extends User {
    email: string
    password: string

    login(): void
    logout(): void
}