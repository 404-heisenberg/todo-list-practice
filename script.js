"use strict"

let taskInput = document.getElementById("inputTask");
let createTaskBtn = document.getElementById("btnCreateTask");
let taskList = document.getElementById("task-list");
let taskForm = document.getElementById("task-form");

let tasks = [];

tempTasks = document.querySelectorAll("#task-list li");

tempTasks.forEach((task) => tasks.push(new Task(task.textContent)));

class Task {
  constructor(taskText) {
    this.Task = taskText;
    this.completed = false;
    this.canceled = false;
    this.removed = false;
  }

  get completed() {
    return this._completed;
  }

}

// when the create task button is clicked, add the task to the list
function addTask(event) {
  if (event) {
    event.preventDefault();
  }

  let taskText = taskInput.value.trim();
  if (!taskText) {
    return;
  }

  let task = new Task(taskText);
  tasks.push(task);

  let listItem = document.createElement("li");
  listItem.textContent = taskText;
  taskList.appendChild(listItem);
  taskInput.value = "";
}

taskForm.addEventListener("submit", addTask);

function

// left clicking a task should mark it as completed

// right clicking a task should cancel it
