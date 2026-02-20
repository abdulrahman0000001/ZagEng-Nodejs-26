async function checkNumber(num) {
  if (num > 0) return "Positive"
  else if (num === 0) return "Zero"
  else if (num < 0) throw Error("Negative")
}

checkNumber(1)
  .then(res => console.log(res))
  .catch(err => console.log(err))

checkNumber(0)
  .then(res => console.log(res))
  .catch(err => console.log(err))

checkNumber(-1)
  .then(res => console.log(res))
  .catch(err => console.log(err))


////////////////////////////////////////////////////////////////
async function f(number) {
  try {
    let res = await checkNumber(number);
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
}

f(1)
f(0)
f(-1)
