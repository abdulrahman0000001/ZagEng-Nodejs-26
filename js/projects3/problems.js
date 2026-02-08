function toUpper(arr = [""]) {
    return arr.map(element => element.toLocaleUpperCase())
}




function pass(arr = [{}]) {
    let x = arr.map(function(element) {
        if(element.score >= 50) {
            element.passed = true
        }
        else {
            element.passed = false
        }
        return element;
    })
    return x
}

function passV2(arr = [{}]) {
    return arr.map(element => ({
        ...element,
        passed: element.score >= 50
    }))
}




function greater4(arr = [""]) {
    return arr.filter(element => element.length > 4)
}



function avg(arr = []) {
    return arr.reduce((acc = 0, cur) => {
        acc += cur
        return acc;
    }) / arr.length
}



function above18Names(arr = [{}]) {
    return arr
        .filter(element => element.age >= 18)
        .map(element => element.name)

    
}


function factorial(num) {
    let res = 1
    for(let i = 1; i <= num; i++) {
        res *= i
    }
    return res
}



// function prefix(arr = []) {
//     let pref = Array(Math.max(...arr) + 1).fill(0)
//     for(let i = 0; i < arr.length; i++) {
//         pref[arr[i]]++;
//     }
//     return pref
// }


// function unique(arr = []) {
//     let pref = prefix(arr)
//     let res = []
//     while(pref.findIndex(count => count === 1) != -1) {
//         res.push(pref.findIndex(count => count === 1))
//         pref[pref.findIndex(count => count === 1)] = 0
//     }
//     return res
// }

function prefix(arr = []) {
    let pref = {}
    for(let i = 0; i < arr.length; i++) {
        pref[arr[i]] = (pref[arr[i]] || 0) + 1
    }
    return pref
}

function unique(arr = []) {
    let pref = prefix(arr)
    let res = []
    for(let key in pref) {
        if(pref[key] === 1) {
            res.push(Number(key))
        }
    }
    return res
}

