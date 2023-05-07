document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

  });
  
});
const taskList = document.querySelector('#tasks');

function addDeleteButton(task) {
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'delete';
  deleteButton.addEventListener('click', function() {
    taskList.removeChild(task);
  });
  task.appendChild(deleteButton);
}


function addTask(description) {
  const task = document.createElement('li');
  task.innerText = description;
  addDeleteButton(task); 
  taskList.appendChild(task);
}

const form = document.querySelector('#create-task-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const description = document.querySelector('#new-task-description').value;
  addTask(description);
});
