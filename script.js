let taskInput = document.getElementById("inputTask");
let createTaskBtn = document.getElementById("btnCreateTask");
let taskList = document.getElementById("task-list");

let tasks = [];

function Task(taskText) {
  this.Task = taskText;
  this.completed = false;
  this.canceled = false;
  this.removed = false;
}

// when the create task button is clicked, add the task to the list
function addTask() {
  let taskText = taskInput.value;
  let task = new Task(taskText);
  tasks.push(task);

  let listItem = document.createElement("li");
  listItem.textContent = taskText;
  taskList.appendChild(listItem);
}

createTaskBtn.addEventListener("click", addTask);
