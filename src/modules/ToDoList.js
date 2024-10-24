import Project from "./Project";
import Task from "./Task";

export default class ToDoList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("Work"));
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  getProject(projectName) {
    return this.projects.find(project => project.name === projectName)
  }

  addProject(projectName) {
    this.projects.push(new Project(projectName));
  }

  deleteProject(projectName) {
    const projectIndex = this.projects.findIndex(project => project.name === projectName);
    if (projectIndex > -1) {
      this.projects.splice(projectIndex, 1);
    }
  }

}
