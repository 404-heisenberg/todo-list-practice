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
