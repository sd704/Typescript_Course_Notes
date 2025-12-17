const n = 'Max'
const greet = `Hi ${n}!` // JS feature


type Read = 'readable' | 'non-readable'
type Write = 'writeable' | 'non-writeable'
type FilePermissions = `${Read}_${Write}` // TS feature
// type FilePermissions = "readable_writeable" | "readable_non-writeable" | "non-readable_writeable" | "non-readable_non-writeable"




// ANOTHER USECASE
// We want to create a object type based on keys on another object type

type SavedFile = {
    data: string,
    date: string
}

type NewSavedFileProps = `new${keyof SavedFile}`
// type NewSavedFile = "newdata" | "newdate"

type NewSavedFile = {
    [K in NewSavedFileProps]: string
}

// type NewSavedFile = {
//     newdata: string;
//     newdate: string;
// }