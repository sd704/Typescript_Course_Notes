interface Auth {
    email: string
    password: string

    login(): void
    logout(): void
}

interface User {
    name: string
    age: string
}

class AuthUser implements Auth, User {
    constructor(
        public email: string,
        public password: string,
        public name: string,
        public age: string
    ) { }

    login(): void {
        //...
    }

    logout(): void {
        //...
    }
}


// Lets say we have a function where we want to pass an object that should have a login method
// We can do this using interface
function authenticate(user: Auth) {
    user.login()
}