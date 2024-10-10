// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM Elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load Tasks from Local Storage
  function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => addTask(taskText, false));
  }

  // Create the addTask Function
  function addTask(taskText, save = true) {
      // Create a new li element
      let taskListItem = document.createElement('li');
taskListItem.textContent = taskText;

let removeButton = document.createElement('button');
removeButton.textContent = "Remove";
removeButton.className = 'remove-btn';

removeButton.onclick = () => {
    taskList.removeChild(taskListItem);
    removeTask(taskText);
};

taskListItem.appendChild(removeButton);
taskList.appendChild(taskListItem);

taskInput.value = "";
  }

  // Remove Task from Local Storage
  function removeTask(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const index = storedTasks.indexOf(taskText);
      if (index > -1) {
          storedTasks.splice(index, 1);
      }
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }

  // Load Tasks from Local Storage
  loadTasks();

  // Attach Event Listeners
  addButton.addEventListener('click', () => {
      let taskText = taskInput.value.trim();
      if (taskText === "") {
          alert("Please enter a task");
          return;
      }
      addTask(taskText);
      taskInput.value = "";
  });

  taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          let taskText = taskInput.value.trim();
          if (taskText === "") {
              alert("Please enter a task");
              return;
          }
          addTask(taskText);
          taskInput.value = "";
      }
  });
});