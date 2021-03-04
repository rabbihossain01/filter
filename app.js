// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);

  // remove task event
     taskList.addEventListener("click",removeTask)

     // clear task event
     clearBtn.addEventListener('click',clearTasks)

     // filter tasks

     filter.addEventListener('keyup', filterTasks)
}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  li.style.color = "white";
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.fontSize = "2rem" 
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  link.style.paddingLeft = "55%"
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}

//remove task

function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')){
   if(confirm('Are You Sure')){
    e.target.parentElement.parentElement.remove();

   }

  } 
}

//clear tasks

function clearTasks() {
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild)
  }
}

// filter tasks

function filterTasks(e) {
  const text = e.target.value.toLowerCase();


  document.querySelectorAll('.collection-item').forEach
  (function(task){
    const item = task.firstChild.textContent;
    if( item.toLowerCase().indexOf(text) != -1){
      task.getElementsByClassName.display = "block";

    } else{
      task.style.display = 'none';
    }
  })
}


















