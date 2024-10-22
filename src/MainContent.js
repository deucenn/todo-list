function renderMainContent() {
    const content = document.getElementById("content");

    const mainContent = document.createElement("div");
    mainContent.classList.add("task-container");
    content.appendChild(mainContent);

    const mainTitle = document.createElement("h2");
    mainTitle.classList.add("top-bar");
    mainTitle.textContent = "Your Tasks";
    mainContent.appendChild(mainTitle);

    const contentArea = document.createElement("div");
    contentArea.classList.add("content-area");
    mainContent.appendChild(contentArea);

    const addTaskButton = document.createElement("button");
    addTaskButton.classList.add("add-task-button");
    addTaskButton.textContent = "+ Add Task";
    contentArea.appendChild(addTaskButton);

    const taskListArea = document.createElement("div");
    taskListArea.classList.add("task-list");
    contentArea.appendChild(taskListArea);

    const taskList = document.createElement("ul");
    taskListArea.appendChild(taskList);

    const task1 = document.createElement("li");
    task1.classList.add("task");
    task1.textContent = "Task 1";
    taskList.appendChild(task1);


}

export { renderMainContent};