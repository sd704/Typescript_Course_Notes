type FilePath = { path: string }
type DbUrl = { connectionUrl: string }

type Source = FilePath | DbUrl

function load(src: Source) {
    // Here we need to know which type of object is src
    // One way is to check values
    if ('path' in src) {
        //...
        return src.path
    }
    //...
    return src.connectionUrl
}

//----------------------------------------------------------------------------------------------------------------

// ANOTHER WAY -> DISCRIMINATED UNION
type FilePathx = { type: 'file', path: string }
type DbUrlx = { type: 'db', connectionUrl: string }

type Sourcex = FilePathx | DbUrlx

function loadx(src: Sourcex) {
    if (src.type === 'file') {
        //...
        return src.path
    }
    //...
    return src.connectionUrl
}