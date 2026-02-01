let arr = []
for(let i = 1; i <= 4; i++) {
    arr.push(Math.round(window.prompt(`${i}: Enter an age`)))
}

for(n of arr) {
    if(n >= 8) console.log("Pass")
        else console.log("Fail")
}
