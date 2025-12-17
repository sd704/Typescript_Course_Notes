class UserName {
    constructor(private firstName: string, private lastName: string) { }

    // Getter, must have a return
    get fullName() {
        return this.firstName + ' ' + this.lastName
    }
}

const max = new UserName('Max', 'Smith')

// No parenthesis to access getters
console.log(max.fullName)

//----------------------------------------------------------------------------------------------------------------

class UserName2 {
    private _firstName: string = ''
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

const matt = new UserName2()
// No parenthesis to access setters
matt.firstName = 'Matt'
matt.lastName = 'Smith'
console.log(max.fullName)