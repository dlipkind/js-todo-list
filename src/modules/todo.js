import Storage from "./storage";
import Project from "./project";
import Task from "./task";
import DOM from "./dom";

console.log("todo here");

export default class Todo {
  static projectsArray = [];

  static currentProject;

  static setCurrentProject(projectName) {
    return (Todo.currentProject = projectName);
  }

  static getProjects() {
    return Todo.projectsArray;
  }

  static getProject(projectName) {
    return this.projectsArray.find(
      (project) => project.getName() === projectName
    );
  }

  static addProject(newProject) {
    Todo.projectsArray.push(newProject);
  }

  static deleteProject(projectToDelete) {
    Todo.projectsArray.splice(Todo.projectsArray.indexOf(projectToDelete), 1);
  }
}
