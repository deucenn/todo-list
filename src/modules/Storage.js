import Project from "./Project";
import Task from "./Task";
import ToDoList from "./ToDoList";

export default class Storage {
  static saveToDoList(data) {
    localStorage.setItem("ToDoList", JSON.stringify(data));
  }

  static loadToDoList() {
    const savedData = localStorage.getItem("ToDoList");
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return new ToDoList();
    }
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
