function renderTaskElement(listItem, taskText) {
  let checkboxBtn = document.createElement("button");
  checkboxBtn.type = "button";
  checkboxBtn.className = "toggle-btn";
  let checkboxImg = document.createElement("img");
  checkboxImg.src = "images/checkbox.svg";
  checkboxBtn.appendChild(checkboxImg);
  listItem.appendChild(checkboxBtn);

  let taskTextElement = document.createElement("span");
  taskTextElement.className = "task-text";
  taskTextElement.textContent = taskText;
  listItem.appendChild(taskTextElement);

  let deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "delete-btn";
  let deleteImg = document.createElement("img");
  deleteImg.src = "images/trash.svg";
  deleteBtn.appendChild(deleteImg);
  listItem.appendChild(deleteBtn);

  return listItem;
}

// add placeholder tasks
function renderPlaceholderTasks() {
  const placeholderTasks = ["Buy groceries", "Do laundry", "Clean the house"];

  placeholderTasks.forEach((taskText) => {
    let task = new Task(taskText);

    const taskElement = document.createElement("li");
    taskElement.dataset.taskId = task.id;

    saveTask(task);

    renderTaskElement(taskElement, taskText);

    taskList.appendChild(taskElement);
  });
}

// add tasks to the list
function renderTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  let task = new Task(taskText);

  const taskElement = document.createElement("li");
  taskElement.dataset.taskId = task.id;

  saveTask(task);

  renderTaskElement(taskElement, taskText);

  taskList.appendChild(taskElement);
  taskInput.value = "";
}
