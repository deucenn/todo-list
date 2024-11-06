import Project from "./modules/Project";
import Task from "./modules/Task";
import ToDoList from "./modules/ToDoList";
import Storage from "./modules/Storage";

let activeProjectName = ""; // Default project

export default class UI {
  static loadHomepage() {
    UI.loadContent();
    UI.loadProjects();
    UI.loadTasks();
  }

  static loadProjects() {
    Storage.getToDoList()
      .getProjects()
      .forEach((project) => {
          UI.createProject(project.name);
      });
  }

  static loadTasks(projectName) {
    const taskListArea = document.querySelector(".task-list");
    taskListArea.innerHTML = "";

    Storage.getToDoList()
      .getProject(projectName)
      .getTasks()
      .forEach((task) => {
        UI.createTask(task.name);
      });
  }

  static createProject(name) {
    const navProject = document.createElement("div");
    navProject.classList.add("nav-item");
    navProject.textContent = name;

    navProject.addEventListener("click", () => {
      UI.loadTasks(name);
      document.querySelector(".top-bar").textContent = name;
      activeProjectName = name;
    });
    document.querySelector(".navbar").appendChild(navProject);
  }

  static createTask(title) {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task");
    taskItem.textContent = title;
    document.querySelector(".task-list").appendChild(taskItem);
  }

  static loadModal() {
    const content = document.getElementById("content");

    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal", "active");

    const modalTitle = document.createElement("h2");
    modalTitle.classList.add("modal-title");
    modalTitle.textContent = "Add New Task";

    const modalTask = document.createElement("input");
    modalTask.classList.add("modal-task");
    modalTask.type = "text";
    modalTask.required = true;
    modalTask.placeholder = "Task";

    const modalSave = document.createElement("button");
    modalSave.classList.add("modal-save", "modal-button");
    modalSave.textContent = "Save";

    const modalQuit = document.createElement("button");
    modalQuit.classList.add("modal-quit", "modal-button");
    modalQuit.textContent = "Quit";

    modalSave.addEventListener("click", () => {
      const taskTitle = modalTask.value.trim();
      if (taskTitle) {
        const newTask = new Task(taskTitle);
        Storage.addTask(activeProjectName, newTask); 

        UI.createTask(taskTitle);
        content.removeChild(modalDiv);
        document.querySelector(".task-container").classList.remove("blurred");
      }
    });

    modalQuit.addEventListener("click", () => {
      content.removeChild(modalDiv);
      document.querySelector(".task-container").classList.remove("blurred");
    });

    content.appendChild(modalDiv);
    modalDiv.appendChild(modalTitle);
    modalDiv.appendChild(modalTask);
    modalDiv.appendChild(modalSave);
    modalDiv.appendChild(modalQuit);
  }

  static loadContent() {
    const content = document.getElementById("content");

    const navbar = document.createElement("div");
    navbar.classList.add("navbar");

    const appName = document.createElement("h1");
    appName.classList.add("app-name");
    appName.textContent = "Notedock";

    const createProjectBtn = document.createElement("button");
    createProjectBtn.classList.add("create-project-btn");
    createProjectBtn.textContent = "Create Project";

    const projectInputContainer = document.createElement("div");
    projectInputContainer.classList.add("project-input-container");
    projectInputContainer.style.display = "none"; // Start hidden

    const projectInput = document.createElement("input");
    projectInput.setAttribute("type", "text");
    projectInput.setAttribute("placeholder", "Project Name");
    projectInput.classList.add("project-input");

    const saveProjectBtn = document.createElement("button");
    saveProjectBtn.classList.add("save-project-btn");
    saveProjectBtn.textContent = "Save";

    projectInputContainer.appendChild(projectInput);
    projectInputContainer.appendChild(saveProjectBtn);

    createProjectBtn.addEventListener("click", () => {
      projectInputContainer.style.display =
        projectInputContainer.style.display === "none" ? "block" : "none";
      projectInput.focus();
    });

    saveProjectBtn.addEventListener("click", () => {
      const projectName = projectInput.value.trim();
      if (projectName) {
        UI.createProject(projectName);
        Storage.addProject(projectName);

        projectInput.value = "";
        projectInputContainer.style.display = "none";
      }
    });

    content.appendChild(navbar);
    navbar.appendChild(appName);
    navbar.appendChild(createProjectBtn);
    navbar.appendChild(projectInputContainer);

    const mainContent = document.createElement("div");
    mainContent.classList.add("task-container"); // Blur Opt-In
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
      UI.loadModal();
      mainContent.classList.add("blurred");
    });
    contentArea.appendChild(addTaskButton);
  }
}
