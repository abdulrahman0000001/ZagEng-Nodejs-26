let jsonData = '[]'

let data = JSON.parse(jsonData)

data.push({
  id: "1",
  name: "test"
})

jsonData = JSON.stringify(data)

console.log(jsonData)
