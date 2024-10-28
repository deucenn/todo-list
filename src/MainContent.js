import Project from "./modules/Project";
import Task from "./modules/Task";
import ToDoList from "./modules/ToDoList";

function renderMainContent() {
  const content = document.getElementById("content");

  const mainContent = document.createElement("div");
  mainContent.classList.add("task-container", "blurred"); // Blur Opt-In
  content.appendChild(mainContent);

  const mainTitle = document.createElement("h2");
  mainTitle.classList.add("top-bar");
  mainTitle.textContent = "Project";
  mainContent.appendChild(mainTitle);

  const contentArea = document.createElement("div");
  contentArea.classList.add("content-area");
  mainContent.appendChild(contentArea);

  const taskListArea = document.createElement("div");
  taskListArea.classList.add("task-list");
  contentArea.appendChild(taskListArea);

  const addTaskButton = document.createElement("button");
  addTaskButton.classList.add("add-task-button");
  addTaskButton.textContent = "+ Add Task";
  addTaskButton.addEventListener("click", () => {

  })
  contentArea.appendChild(addTaskButton);

  const task1 = document.createElement("div");
  task1.classList.add("task");
  task1.textContent = "Task 1";
  taskListArea.appendChild(task1);

//   const deleteBtn = document.createElement("button");
//   deleteBtn.classList.add("task-delete-btn");
//   deleteBtn.textContent = "X";
//   task1.appendChild(deleteBtn);

}

export { renderMainContent };
