let arr = []
for(let i = 1; i <= 3; i++) {
    arr.push(window.prompt(`${i}: Enter a name`))
}

for(let i = 0; i < 3; i++) {
    console.log(arr[i])
}
