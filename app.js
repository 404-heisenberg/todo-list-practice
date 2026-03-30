let taskForm = document.getElementById("task-form");

// load placeholder tasks when page loads
window.addEventListener("load", (e) => {
  renderPlaceholderTasks();
});

// create the task when form is submitted
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  renderTask();
});

// mark a task as completed when checkbox is clicked
taskList.addEventListener("click", (e) => {
  let button = e.target.closest("button");
  if (!button) return;

  let taskElement = button.closest("li");
  if (!taskElement) return;

  let task = tasks.find((t) => t.id === taskElement.dataset.taskId);
  if (!task) return;

  // if the checkbox is clicked, toggle the completed class and change the image
  if (button.classList.contains("toggle-btn")) {
    // mark the task as completed if it isn't completed already
    if (!task.completed) {
      task.completed = true;
      taskElement.classList.add("completed");
    } else if (task.completed) {
      task.completed = false;
      taskElement.classList.remove("completed");
    }
    const img = button.querySelector("img");
    if (img) {
      img.src = task.completed
        ? "images/completed-checkbox.svg"
        : "images/checkbox.svg";
    }
  }

  // if the trash is clicked, delete the task
  if (button.classList.contains("delete-btn")) {
    // delete the task
    taskElement.remove();
    const taskIndex = tasks.indexOf(task);
    if (taskIndex === -1) return;
    tasks.splice(taskIndex, 1);
  }
});
