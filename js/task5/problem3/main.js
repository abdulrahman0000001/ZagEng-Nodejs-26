let images = [
  "https://clslearn.com/wp-content/uploads/2023/09/offensive-security-tools-4.webp",
  "https://www.openaccessgovernment.org/wp-content/uploads/2019/12/dreamstime_xxl_143548247-696x440.jpg",
  "https://content.kaspersky-labs.com/se/com/content/en-global/images/repository/isc/2021/encryption-1/encryption-1.jpg",
  "https://assets.tryhackme.com/img/paths/web-application-red-teaming-learning.webp",
  "https://academy.hackthebox.com/storage/paths/418/logo.png"
]
let currentIndex = 0

function displayImage() {
  let imageElement = document.getElementById("image")
  let counter = document.getElementById("counter")
  
  imageElement.src = images[currentIndex]
  counter.innerHTML = `Image ${currentIndex + 1} of ${images.length}`
}

function showNext() {
  currentIndex++
  if(currentIndex >= images.length) {
    currentIndex = 0
  }
  displayImage()
}

function showPrevious() {
  currentIndex--
  if(currentIndex < 0) {
    currentIndex = images.length - 1
  }
  displayImage()
}

function resetCarousel() {
  currentIndex = 0
  displayImage()
}

displayImage()
