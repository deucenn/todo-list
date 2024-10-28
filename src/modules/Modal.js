export default function Modal() {
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
    modalTask.placeholder = "Task"

    const modalSave = document.createElement("button");
    modalSave.classList.add("modal-save", "modal-button");
    modalSave.textContent = "Save";

    const modalQuit = document.createElement("button");
    modalQuit.classList.add("modal-quit", "modal-button");
    modalQuit.textContent = "Quit";

    content.appendChild(modalDiv);
    modalDiv.appendChild(modalTitle);
    modalDiv.appendChild(modalTask);
    modalDiv.appendChild(modalSave);
    modalDiv.appendChild(modalQuit);
}