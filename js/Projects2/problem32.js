function Reverse(arr = []){
    let newArr = []
    for(let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}
let array = [1, 2, 3, 4, 5]
let na = Reverse(array)
console.log(na)
