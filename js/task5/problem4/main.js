let products = [
  {},
  {
    name: "Wireless Mouse",
    price: "$25.99",
    category: "Electronics"
  },
  {
    name: "USB-C Cable",
    price: "$12.99",
    category: "Electronics"
  },
  {
    name: "Bluetooth Speaker",
    price: "$49.99",
    category: "Electronics"
  },
  {
    name: "Laptop Stand",
    price: "$35.99",
    category: "Accessories"
  },
  {
    name: "Mechanical Keyboard",
    price: "$89.99",
    category: "Electronics"
  },
  {
    name: "Monitor Screen Protector",
    price: "$19.99",
    category: "Accessories"
  },
  {
    name: "Desk Lamp",
    price: "$39.99",
    category: "Lighting"
  },
  {
    name: "Mouse Pad",
    price: "$14.99",
    category: "Accessories"
  },
  {
    name: "HDMI Cable",
    price: "$9.99",
    category: "Electronics"
  },
  {
    name: "Webcam HD",
    price: "$59.99",
    category: "Electronics"
  }
]

function displayProducts() {
  let ul = document.getElementById("products")
  let noResults = document.getElementById("noResults")
  
  ul.innerHTML = ""
  noResults.innerHTML = ""

  for(let i = 1; i < products.length; i++) {
    let li = document.createElement("li")
    li.innerHTML = `
      <div class="name">${products[i].name}</div>
      <div class="price">${products[i].price}</div>
      <div class="category">${products[i].category}</div>
    `
    ul.appendChild(li)
  }
}

function searchProducts(value = "") {
  let ul = document.getElementById("products")
  let noResults = document.getElementById("noResults")
  
  ul.innerHTML = ""
  noResults.innerHTML = ""
  
  if(value === "") {
    displayProducts()
    return
  }

  let found = false
  let searchLower = value.toLowerCase()

  for(let i = 1; i < products.length; i++) {
    let isMatch = isProductFound(searchLower, i)
    
    if(isMatch) {
      found = true
      let li = document.createElement("li")
      li.innerHTML = `
        <div class="name">${products[i].name}</div>
        <div class="price">${products[i].price}</div>
        <div class="category">${products[i].category}</div>
      `
      ul.appendChild(li)
    }
  }

  if(!found) {
    noResults.innerHTML = "No results found"
  }
}

function isProductFound(searchValue, index) {
  let name = products[index].name.toLowerCase()
  let category = products[index].category.toLowerCase()
  
  return name.includes(searchValue) || category.includes(searchValue)
}
