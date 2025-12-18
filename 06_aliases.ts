// We can save types with custom names by using 'type' keyword given by typescript
type userAccess = 'admin' | 'editor' | 'guest' | 'reader'
var accessType: userAccess
function abc(role: userAccess) { return role }


type xArr = [1 | -1, 1 | -1]
var xy: xArr


type userProfileX = {
    name: string,
    age: number,
    phn: string | number,
    hobbies: string[]
    role: {
        description: string,
        id: number
    }
}

var u1: userProfileX