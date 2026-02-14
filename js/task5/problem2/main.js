let tasks = [{}]

function displayTasks() {
  let ul = document.getElementById("tasks")
  ul.innerHTML = ""

  for(let i = 1; i < tasks.length; i++) {
    let li = document.createElement("li")
    li.innerHTML = `
      <input type="checkbox" onchange="toggleTask(${i})" ${tasks[i].completed ? "checked" : ""}>
      <span>${tasks[i].text}</span>
      <button class="delete-btn" onclick="deleteTask(${i})">Delete</button>
    `

    if(tasks[i].completed) {
      li.classList.add("completed")
      li.querySelector("span").style.textDecoration = "line-through"
    }

    ul.appendChild(li)
  }
}

function addTask() {
  let taskText = document.getElementById("taskInput").value

  if (!taskText || taskText.trim().length === 0) {
    alert("Enter a task")
    return
  }

  let task = {
    text: taskText,
    completed: false
  }

  tasks.push(task)
  document.getElementById("taskInput").value = ""
  displayTasks()
}

function deleteTask(index) {
  tasks.splice(index, 1)
  displayTasks()
  if (tasks.length == 1) alert("No tasks left")
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed
  displayTasks()
}
