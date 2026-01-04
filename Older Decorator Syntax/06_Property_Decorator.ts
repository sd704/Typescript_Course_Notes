function log(target: any, propertyName: string | Symbol) {
    console.log('Property Decorator.')
    console.log(target, propertyName)
}

class Product {
    @log
    title: String
    private _price: number

    set price(n: number) {
        if (n > 0) {
            this._price = n
        } else {
            throw new Error("Invalid Price!")
        }
    }

    constructor(t: string, p: number) {
        this.title = t
        this._price = p
    }

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax)
    }
}
