// If we want to have a variable that only takes in specific values, we can use enum
// enums are typescript feature
// As enums er not in JS, the enum types will be converted into numbers starting with 0
// So we can also save 0, 1, 2 to user1

enum Role {
    Admin,
    Guest,
    Editor
}

let user1: Role
user1 = Role.Admin
user1 = Role.Guest
user1 = 2

// We can also change the enum type values if we want

enum Role2 {
    Admin = 'Admin',
    Guest = 'Guest',
    Editor = 'Editor'
}

let userx: Role2
userx = Role2.Admin

enum Role3 {
    Admin = 5,
    Guest = 1,
    Editor = 2
}

let usery: Role3
usery = Role3.Admin
usery = 5