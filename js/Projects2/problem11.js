let arr = []
for(let i = 1; i <= 5; i++) {
    arr.push(window.prompt(`${i}: Enter an age`))
}

for(n of arr) {
    if(n >= 18) console.log(n)
}
