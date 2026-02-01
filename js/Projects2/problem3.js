let arr = []

for(let i = 1; i<= 5; i++) {
    arr.push(window.prompt(`${i}: Enter a number`))
}
//there is no need to print the length with arr.length
console.log(arr, arr.length, arr[0], arr[arr.length - 1])
