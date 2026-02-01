//assume that only spaces aren't characters
let str = window.prompt("Enter a string")
let len = str.length
let spaceCount = 0
for(let i = 0; i < len; i++) {
    if(str[i] == " ") spaceCount++
}
console.log(len - spaceCount)
