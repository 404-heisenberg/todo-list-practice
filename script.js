"use strict";

let taskInput = document.getElementById("inputTask");
let createTaskBtn = document.getElementById("btnCreateTask");
let taskList = document.getElementById("task-list");
let taskForm = document.getElementById("task-form");

let tasks = [];

class Task {
  constructor(taskText) {
    this.text = taskText;
    this.completed = false;
    this.canceled = false;
    this.removed = false;
  }
}

const tempTasks = document.querySelectorAll("#task-list li");
tempTasks.forEach((task) => tasks.push(new Task(task.textContent.trim())));

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

function handleTasks(e) {
  let target = e.target.closest("li");
  if (!target) return;

  let task = tasks.find((t) => t.text === target.textContent.trim());
  if (!task) return;

  switch (e.type) {
    case "click":
      task.completed = !task.completed;
      target.classList.toggle("completed");
      break;
    case "contextmenu":
      e.preventDefault();
      task.canceled = !task.canceled;
      target.classList.toggle("cancelled");
      break;
  }
}

taskList.addEventListener("click", handleTasks);
taskList.addEventListener("contextmenu", handleTasks);

// left clicking a task should mark it as completed

// right clicking a task should cancel it
