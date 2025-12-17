class User {
    // 'protected' can be accessed from within child classes
    protected _firstName: string = ''
    private _lastName: string = ''

    // Setter
    set firstName(name: string) {
        if (this._firstName.trim() === '') {
            throw new Error('Invalid name.')
        }
        this._firstName = name
    }

    set lastName(name: string) {
        if (this._lastName.trim() === '') {
            throw new Error('Invalid name.')
        }
        this._lastName = name
    }

    get fullName() {
        return this._firstName + ' ' + this._lastName
    }
}

// 'extends' is a JS feature
class Employee extends User {
    constructor(public job: string) {
        super() // Must call super class constructor first
        // super.firstName = 'Max'
        // super.lastName = 'Smith'
    }

    work() {
        console.log(this._firstName)
    }
}