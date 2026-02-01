let arr = []
for(let i = 1; i <= 5; i++) {
    arr.push(window.prompt(`${i}: Enter a number`))
}

console.log(Math.max(...arr))
console.log(Math.min(...arr))
