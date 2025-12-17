function add(a: number, b: number) {
    return a + b
}

type AddFn = typeof add
type FnReturnType<T> = T extends (...args: any[]) => infer R ? R : never
// It checks is T is a function, (..args) is a JS feature
// If T is a function, infer the value of its return type, keep that type, else set to never
type AddReturnType = FnReturnType<AddFn>