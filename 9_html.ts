// We tell Typescript what kind of element it is
const name1 = document.getElementById('username') as HTMLInputElement | null

console.log(name1?.value)