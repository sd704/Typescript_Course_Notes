// unknown is similar to any, it will accept anything, but we need to check before using it
function aaa(a: unknown) {
    if (a && typeof a === 'object' && 'log' in a && typeof a.log === 'function') {
        console.log(a.log())
    }

}