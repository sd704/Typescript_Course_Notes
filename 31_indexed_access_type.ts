type X = {
    name: string;
    age: number;
    permission: {
        id: number;
        title: string;
    }[];
}

// This is a TS feature
// It is used to extract types for object types
type P = X['permission']

// type P = {
//     id: number;
//     title: string;
// }[]




// To extract type from single element of array
type Q = P[number]
let q: Q

// type Q = {
//     id: number;
//     title: string;
// }