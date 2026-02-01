let arr = []
for(let i = 1; i <= 5; i++) {
    arr.push(window.prompt(`${i}: Enter a number`))
}
let sum = 0;
for(n of arr) {
    sum += Number(n)
}

console.log(sum)
