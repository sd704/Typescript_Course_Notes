class User {
    constructor(public name: string) { }
    read() { console.log('read') }
}

class Admin {
    constructor(public name: string) { }
    write() { console.log('write') }
}

type Entity = User | Admin

function xyz(entity: Entity) {
    // 'instanceof' comes from JS
    if (entity instanceof User) {
        entity.read()
        return
    }
    entity.write()
    return
}