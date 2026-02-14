let students = [{}]



function displayStudents() {
  let ul = document.getElementById("stu")
  ul.innerHTML = `<h2>Students</h2>`
  
  for(let i = 1; i < students.length; i++) {

    let li = document.createElement("li")
    li.innerHTML =
      `${students[i].name}
      - ${students[i].age}
      - ${students[i].grade}
      <button class="delete-btn" onclick="deleteStudent(${i})">Delete Student</button>
      `
    ul.appendChild(li)
  }
}

function deleteStudent(index) {
  let studentName = students[index].name
  if(confirm(`You are about to delete ${studentName}`)) {

    students.splice(index, 1)
    
    displayStudents()
  }
  
  if(students.length == 1) alert("There is no students")     
  
  
}


function addStudent() {
  let student = getInputValues()
  let isValid = validateInput(student)
  if(!isValid) return


  students.push(student)
    
  clearInput()

  displayStudents()



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
