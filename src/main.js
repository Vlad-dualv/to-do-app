const form = document.querySelector('form');
const input = document.getElementById('task-input');
const firstTaskText = document.querySelector('p');
const toDoList = document.querySelector('ul');
const TASK_KEY = 'Task';

let tasks = [];

function addTask(event) {
  event.preventDefault();
  const task = input.value.trim();
  tasks.push(task);
  const json = JSON.stringify(tasks);
  localStorage.setItem(TASK_KEY, json);
  firstTaskText.style.display = 'none';
  const newTask = document.createElement('li');
  const removeTaskBtn = document.createElement('button');
  newTask.textContent = task;
  removeTaskBtn.type = 'button';
  removeTaskBtn.textContent = 'Remove Task';
  removeTaskBtn.classList.add('remove-btn');
  toDoList.append(newTask);
  newTask.append(removeTaskBtn);
  form.reset();
}

function removeTask(event) {
  const taskItem = event.target.parentElement;
  const taskText = taskItem.firstChild.textContent;
  const taskIndex = tasks.indexOf(taskText.trim());
  tasks.splice(taskIndex, 1);
  localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
  taskItem.remove();
  if (tasks.length === 0) {
    firstTaskText.style.display = 'block';
  }
}

form.addEventListener('submit', addTask);
toDoList.addEventListener('click', function (event) {
  if (event.target.classList.contains('remove-btn')) {
    removeTask(event);
  }
});
window.addEventListener('load', e => {
  const savedTasks = JSON.parse(localStorage.getItem(TASK_KEY)) || [];
  tasks = savedTasks;
  if (tasks.length > 0) {
    firstTaskText.style.display = 'none';
  }

  tasks.forEach(task => {
    const newTask = document.createElement('li');
    const removeTaskBtn = document.createElement('button');
    newTask.textContent = task;
    removeTaskBtn.type = 'button';
    removeTaskBtn.textContent = 'Remove Task';
    removeTaskBtn.classList.add('remove-btn');
    toDoList.append(newTask);
    newTask.append(removeTaskBtn);
  });
});
