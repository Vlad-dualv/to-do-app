const form = document.querySelector('form');
const input = document.getElementById('task-input');
const firstTaskText = document.querySelector('p');
const toDoList = document.querySelector('ul');
const TASK_KEY = 'Task';

function addTask(event) {
  event.preventDefault();
  const task = input.value.trim();
  const json = JSON.stringify(task);
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
  event.target.parentElement.remove();
}

form.addEventListener('submit', addTask);
toDoList.addEventListener('click', function (event) {
  if (event.target.classList.contains('remove-btn')) {
    removeTask(event);
  }
});
