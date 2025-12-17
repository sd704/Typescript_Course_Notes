// GENERIC CLASS

class User<T> {
    constructor(public id: T) { }
}

const u1 = new User('xyus786')




// GENERIC INTERFACE
interface Auth<T> {
    email: string
    password: T
}