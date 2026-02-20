function delay(message, time = 0) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(message)
    },time)
  })
}

async function printNumbers(lastNumber) {
  for(let i = 1; i <= lastNumber; i++) {
    let number = await delay(i, 1000)
    console.log(number)
  }  
}

printNumbers(4)
