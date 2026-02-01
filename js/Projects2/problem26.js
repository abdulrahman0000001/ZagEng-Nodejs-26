let arr = []
for(let i = 1; i <= 5; i++) {
    arr.push(window.prompt(`${i}: Enter a number`))
}
let count = 0
for(let i = 0; i < 5; i++) {
    if(Number(arr[i]) > 10) count++
}
console.log(count)
