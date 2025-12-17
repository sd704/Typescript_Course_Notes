// Helps typescript to understand the return types
// Problem without this is TS won't know if the function will return string or number
function getLength(val: string): string
function getLength(val: any[]): number

function getLength(val: string | any[]) {
    if (typeof val === 'string') {
        // This returns a string
        return `${val.split(' ').length} words`
    }
    // This returns a number
    return val.length
}

const nWords = getLength("Hello World!")
const nArr = getLength(['Hello', 'Worlds'])


