let students = []

let stuJSON = ''

function displayStudents(input) {
  let ul = document.getElementById("stu")
  ul.innerHTML = `<h2>Students</h2>`
  
  for(let i = 0; i < input.length; i++) {

    let li = document.createElement("li")
    li.innerHTML =
      `${input[i].name}
      - ${input[i].age}
      - ${input[i].grade}
      
      `
    ul.appendChild(li)
  }
}




function addStudent() {
  let student = getInputValues()
  let isValid = validateInput(student)
  if(!isValid) return


  students.push(student)
    
  clearInput()

  displayStudents(students)




}

function saveJSON() {
    stuJSON = JSON.stringify(students)
    console.log(stuJSON)

    students = []

}

function loadJSON() {
    let arr = JSON.parse(stuJSON)
    displayStudents(arr)
}

function getInputValues() {
  let student = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    grade: document.getElementById("grade").value,

  }
  return student
}

function validateInput(student = {}) {
  let isValid = true

  let isEmpty = input => input === undefined || input === null || (typeof(input) === 'string' && input.trim().length === 0)
  let ageNum = Number(student.age)

  if(isEmpty(student.name) || isEmpty(student.age) || isEmpty(student.grade) ) {
    alert("Enter all inputs")
    isValid = false
    return
  }
  else if(!Number.isFinite(ageNum) || ageNum < 18) {
    alert("Age must be 18 or above")
    isValid = false
    return
  }

  return isValid
  
}

function clearInput() {
  document.getElementById("name").value = ""
  document.getElementById("age").value = ""
  document.getElementById("grade").value = ""
}

