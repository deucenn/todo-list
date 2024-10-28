export default class UI {
  static loadHomepage() {
    UI.loadProjects();
  }

  static loadProjects() {
    const content = document.getElementById("content");

    const navbar = document.createElement("div");
    navbar.classList.add("navbar"); // Blur Opt-In

    const appName = document.createElement("h1");
    appName.classList.add("app-name");
    appName.textContent = "Notedock";

    const createElement = document.createElement("button");
    createElement.classList.add("create-project-btn");
    createElement.textContent = "Create Project";

    const navProject = document.createElement("div"); // Just for testing UI
    navProject.classList.add("nav-item"); 
    navProject.textContent = "hello"; 
    
    content.appendChild(navbar);
    navbar.appendChild(appName);
    navbar.appendChild(createElement);
    navbar.appendChild(navProject); // Just for testing UI

    // Load projects from local storage
    Storage.getToDoList()
      .getProjects()
      .forEach((project) => {
        console.log(project);
        // Render project in the UI
        UI.createProject(project.name);
      });
  }

  static createProject(name) {
    const navProject = document.createElement("div");
    navProject.classList.add("nav-item");
    navProject.textContent = name;
    navbar.appendChild(navProject);
  }
}
