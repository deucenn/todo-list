function renderTask() {
    const content = document.getElementById("content");

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    taskContainer.textContent = "Task";
    content.appendChild(taskContainer);
}

export { renderTask };