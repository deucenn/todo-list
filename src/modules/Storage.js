import Project from "./Project";
import Task from "./Task";
import ToDoList from "./ToDoList";

export default class Storage {
  static saveToDoList(data) {
    localStorage.setItem("toDoList", JSON.stringify(data));
  }

  static getToDoList() {
    const toDoList = Object.assign(
      new ToDoList(),
      JSON.parse(localStorage.getItem("toDoList"))
    );

    toDoList.setProjects(
      toDoList
        .getProjects()
        .map((project) => Object.assign(new Project(), project))
    );

    toDoList
      .getProjects()
      .forEach((project) =>
        project.setTasks(
          project.getTasks().map((task) => Object.assign(new Task(), task))
        )
      );

    return toDoList;
  }

  static addProject(project) {
    const toDoList = Storage.loadToDoList();
    toDoList.addProject(project);
    Storage.saveToDoList(toDoList);
  }

  static deleteProject(projectName) {
    const toDoList = Storage.loadToDoList();
    toDoList.deleteProject(projectName);
    Storage.saveToDoList(toDoList);
  }

  static addTask(projectName, task) {
    const toDoList = Storage.loadToDoList();
    toDoList.getProject(projectName).addTask(task);
    Storage.saveToDoList(toDoList);
  }

  static deleteTask(projectName, task) {
    const toDoList = Storage.loadToDoList();
    toDoList.getProject(projectName).deleteTask(task);
    Storage.saveToDoList(toDoList);
  }
}
