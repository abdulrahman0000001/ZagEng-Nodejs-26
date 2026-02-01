let arr = []
for(let i = 1; i <= 5; i++) {
    arr.push(window.prompt(`${i}: Enter a number`))
}

for(n of arr) {
    if(n > 6) console.log(n)
}
