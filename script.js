// Setup Event Listener for Page Load


  let taskList = document.getElementById('task-list');
let taskInput = document.getElementById('task-input');
let addTaskBtn = document.getElementById('add-task-btn');

let tasks = [];

// Load tasks from Local Storage
function loadTasksFromLocalStorage() {
  let storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    tasks.forEach((task) => {
      let taskListItem = document.createElement('li');
      taskListItem.textContent = task;
      let removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.className = 'remove-btn';
      removeButton.onclick = () => {
        let taskIndex = tasks.indexOf(task);
        tasks.splice(taskIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskList.removeChild(taskListItem);
      };
      taskListItem.appendChild(removeButton);
      taskList.appendChild(taskListItem);
    });
  }
}

// Add task function
function addTask() {
  let taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    let taskListItem = document.createElement('li');
    taskListItem.textContent = taskText;
    let removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = 'remove-btn';
    removeButton.onclick = () => {
      let taskIndex = tasks.indexOf(taskText);
      tasks.splice(taskIndex, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      taskList.removeChild(taskListItem);
    };
    taskListItem.appendChild(removeButton);
    taskList.appendChild(taskListItem);
    taskInput.value = "";
  }
}

// Event listener for add task button
addTaskBtn.addEventListener('click', addTask);

// Load tasks from Local Storage when the page loads
document.addEventListener('DOMContentLoaded', loadTasksFromLocalStorage);

