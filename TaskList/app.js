//Defining ui variable
const form = document.querySelector("#task-form");
const tasklist = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//load all event listerners
loadEvenListners();

function loadEvenListners() {
  //DOM Load event
  document.addEventListener("DOMContentLoaded", getTasks);
  //add task event
  form.addEventListener("submit", addtask);
  //remove task
  tasklist.addEventListener("click", removeTask);
  // clear task event
  clearBtn.addEventListener("click", clearTasks);
  //filter tasks
  filter.addEventListener("keyup", filterTasks);
}
// Get tasks from ls
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function (task) {
    //creat li element
    const li = document.createElement("li");
    //add class
    li.className = "collection-item";
    //create text node and append li;
    li.appendChild(document.createTextNode(task));
    //create new link element
    const link = document.createElement("a");
    //add class
    link.className = "delete-item secondary-content";
    // add icon
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append the link to li
    li.appendChild(link);

    //append li to ul
    tasklist.appendChild(li);
  });
}

// add task

function addtask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  //creat li element
  const li = document.createElement("li");
  //add class
  li.className = "collection-item";
  //create text node and append li;
  li.appendChild(document.createTextNode(taskInput.value));
  //create new link element
  const link = document.createElement("a");
  //add class
  link.className = "delete-item secondary-content";
  // add icon
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append the link to li
  li.appendChild(link);

  //append li to ul
  tasklist.appendChild(li);

  // store in local storage
  storeTaskInLocalStorage(taskInput.value);

  //clear input
  taskInput.value = "";

  e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    // confirm popup/alert
    if (confirm("Are You Sure ?"));
    {
      e.target.parentElement.parentElement.remove();
    }

    //Remove from ls
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
  }
}

// Remove from ls
function removeTaskFromLocalStorage(taskItem) {}

//Clear tasks
function clearTasks() {
  // tasklist.innerHTML = " ";

  //  faster way with loop
  while (tasklist.firstChild) {
    tasklist.removeChild(tasklist.firstChild);
  }
}

//filterTasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  // looking at all the item in
  document.querySelectorAll(".collection-item").forEach(function (task) {
    /* querySelectorAll returns nodelist so we dont 
    need to convert it to array. 
    
    for each will iter over all items of list.
    
    item contain text content of fist child
    */
    const item = task.firstChild.textContent;
    //  -1 is outcome when there is no match found
    // != -1 mean when there is a match
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
