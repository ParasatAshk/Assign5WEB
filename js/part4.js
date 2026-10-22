let tasks = [
  {
    id: 1,
    title: "Assignment 6",
    description: "Complete assignment on time",
    completed: false
  }
];

let taskTitleInput = document.getElementById("task-title");
let taskDescInput = document.getElementById("task-desc");
let addTaskBtn = document.getElementById("add-task-btn");
let todoListContainer = document.getElementById("todo-list");

function renderTasks() {
  if (!todoListContainer) return;
  todoListContainer.innerHTML = "";

  if (tasks.length === 0) {
    let emptyMsg = document.createElement("div");
    emptyMsg.className = "alert alert-light border text-center text-muted py-4";
    emptyMsg.textContent = "No tasks in the list. Fill out the form to add a new task.";
    todoListContainer.appendChild(emptyMsg);
    return;
  }

  for (let i = 0; i < tasks.length; i++) {
    let currentTask = tasks[i];

    let card = document.createElement("div");
    card.className = "task-card " + (currentTask.completed ? "task-completed" : "");

    let header = document.createElement("div");
    header.className = "d-flex justify-content-between align-items-center mb-2 pb-1 border-bottom";

    let title = document.createElement("h5");
    title.className = "task-title mb-0";
    title.textContent = currentTask.title;

    let actions = document.createElement("div");
    actions.className = "d-flex align-items-center gap-1";

    let toggleBtn = document.createElement("button");
    toggleBtn.className = "action-btn toggle-btn";
    toggleBtn.title = currentTask.completed ? "Mark as Incomplete" : "Mark as Completed";
    toggleBtn.innerHTML = currentTask.completed ? '<i class="bi bi-check-circle-fill"></i>' : '<i class="bi bi-circle"></i>';
    toggleBtn.addEventListener("click", function() {
      currentTask.completed = !currentTask.completed;
      renderTasks();
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "action-btn delete-btn";
    deleteBtn.title = "Delete task";
    deleteBtn.innerHTML = '<i class="bi bi-x-lg"></i>';
    deleteBtn.addEventListener("click", function() {
      tasks = tasks.filter(function(t) {
        return t.id !== currentTask.id;
      });
      renderTasks();
    });

    actions.appendChild(toggleBtn);
    actions.appendChild(deleteBtn);

    header.appendChild(title);
    header.appendChild(actions);

    let desc = document.createElement("p");
    desc.className = "task-desc";
    desc.textContent = currentTask.description || "(No description provided)";

    card.appendChild(header);
    card.appendChild(desc);

    todoListContainer.appendChild(card);
  }
}

function addTask() {
  let title = taskTitleInput.value.trim();
  let description = taskDescInput.value.trim();

  if (title === "") {
    alert("Please enter a task title.");
    taskTitleInput.focus();
    return;
  }

  let newTask = {
    id: Date.now(),
    title: title,
    description: description,
    completed: false
  };

  tasks.push(newTask);
  taskTitleInput.value = "";
  taskDescInput.value = "";
  renderTasks();
}

if (addTaskBtn) {
  addTaskBtn.addEventListener("click", addTask);
}

if (taskTitleInput) {
  taskTitleInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });
}

renderTasks();
