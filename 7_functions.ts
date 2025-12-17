// Function return type, given after ()
function sum(a: number, b: number): number {
    return a + b
}

// 'void' for non return type
function error(e: string): void {
    console.log(e)
}

// 'never' for non return type
// Functions that will not complete and will not return anything need 'never'
// void functions will complete
function logError(e: string): never {
    console.log(e)
    throw new Error(e)
}


// Sometimes we need to pass functions as parameters in other functions
// So we can define function types
// Here x1 is a function that has no parameters and returns a number
function calc(x1: () => number) {
    x1()
}
function calc1(x1: (a: number, b: number) => void) {
    x1(2, 3)
}

//Optional Parameter, may or maynot be passed
function calc2(x1?: number) {
    return x1
}


