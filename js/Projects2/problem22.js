let arr = []
for(let i = 1; i <= 5; i++) {
    arr.push(window.prompt(`${i}: Enter a number`))
}

for(let i = 0; i < 5; i++) {
    arr[i] = Number(arr[i]) * 2
}
console.log(arr)
