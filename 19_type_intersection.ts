type FileData = {
    path: string,
    data: string
}

type Status = {
    isOpen: boolean,
    errorMsg?: string
}

// AccessedFile will have all properties of both the types
type AccessedFile = FileData & Status

type Db = {
    dbName: string,
    id: string
}

type AccessDb = AccessedFile & Db