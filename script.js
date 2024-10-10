// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Create the addTask Function
    function addTask() {
      // Retrieve and trim the value from the task input field
      const taskText = taskInput.value.trim();
  
      // Check if taskText is not empty
      if (taskText === "") {
        alert("Please enter a task");
        return;
      }
  
      // Create a new li element
      const taskListItem = document.createElement('li');
      taskListItem.textContent = taskText;
  
      // Create a new button element for removing the task
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.className = 'remove-btn';
  
      // Assign an onclick event to the remove button
      removeButton.onclick = () => {
        taskList.removeChild(taskListItem);
      };
  
      // Append the remove button to the li element
      taskListItem.appendChild(removeButton);
  
      // Append the li to taskList
      taskList.appendChild(taskListItem);
  
      // Clear the task input field
      taskInput.value = "";
  
      // Invoke the addTask function on DOMContentLoaded (Outside addTask)
      // This line is not needed as we are already calling addTask inside the event listener
      // addTask();
    }
  
    // Attach Event Listeners
    addButton.addEventListener('click', addTask);
  
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    // Create a new li element
const taskListItem = document.createElement('li');
taskListItem.textContent = taskText;

// Create a new button element for removing the task
const removeButton = document.createElement('button');
removeButton.textContent = "Remove";
removeButton.className = 'remove-btn';

// Assign an onclick event to the remove button
removeButton.onclick = () => {
  taskList.removeChild(taskListItem);
};

// Append the remove button to the li element
taskListItem.appendChild(removeButton);

// Append the li to taskList
taskList.appendChild(taskListItem);
// Create the addTask Function
function addTask() {
  // Retrieve and trim the value from the task input field
  const taskText = taskInput.value.trim();

  // Check if taskText is not empty
  if (taskText !== "") {
    // Create a new li element
    const taskListItem = document.createElement('li');
    taskListItem.textContent = taskText;

    // Create a new button element for removing the task
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = 'remove-btn';

    // Assign an onclick event to the remove button
    removeButton.onclick = () => {
      taskList.removeChild(taskListItem);
    };

    // Append the remove button to the li element
    taskListItem.appendChild(removeButton);

    // Append the li to taskList
    taskList.appendChild(taskListItem);

    // Clear the task input field
    taskInput.value = "";
  }
}

// Attach Event Listeners
addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
// Clear the task input field
taskInput.value = "";
    // Invoke the addTask function on DOMContentLoaded (Outside addTask)
    // This line is not needed as we are already calling addTask inside the event listener
    // addTask();
  });

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

