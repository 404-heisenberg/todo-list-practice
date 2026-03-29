let taskList = document.getElementById("task-list");
let taskInput = document.getElementById("task-input");

class Task {
  constructor(taskText) {
    this.id = generateTaskId();
    this.text = taskText;
    this.completed = false;
    this.cancelled = false;
  }
}

let tasks = [];

// generate unique id for each task
function generateTaskId() {
  const uuid = crypto.randomUUID();
  return `task-${uuid}`;
}

function saveTask(task) {
  tasks.push(task);
}
