import Project from "./modules/Project";
import Task from "./modules/Task";
import ToDoList from "./modules/ToDoList";
import Storage from "./modules/Storage";

export default class UI {
  static loadHomepage() {
    UI.loadProjects();
  }

  static loadProjects() {
    const content = document.getElementById("content");

    const navbar = document.createElement("div");
    navbar.classList.add("navbar");

    const appName = document.createElement("h1");
    appName.classList.add("app-name");
    appName.textContent = "Notedock";

    // Create "Create Project" button
    const createProjectBtn = document.createElement("button");
    createProjectBtn.classList.add("create-project-btn");
    createProjectBtn.textContent = "Create Project";

    // Project input field and save button (initially hidden)
    const projectInputContainer = document.createElement("div");
    projectInputContainer.classList.add("project-input-container");
    projectInputContainer.style.display = "none"; // Start hidden

    const projectInput = document.createElement("input");
    projectInput.setAttribute("type", "text");
    projectInput.setAttribute("placeholder", "New Project Name");
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
        Storage.getToDoList().addProject(projectName);
        projectInput.value = "";
        projectInputContainer.style.display = "none";
      }
    });

    // Append elements to the navbar
    content.appendChild(navbar);
    navbar.appendChild(appName);
    navbar.appendChild(createProjectBtn);
    navbar.appendChild(projectInputContainer);

    // Load projects from local storage
    Storage.getToDoList()
      .getProjects()
      .forEach((project) => {
        UI.createProject(project.name);
      });
  }

  static createProject(name) {
    const navProject = document.createElement("div");
    navProject.classList.add("nav-item");
    navProject.textContent = name;
    document.querySelector(".navbar").appendChild(navProject);
  }
}
