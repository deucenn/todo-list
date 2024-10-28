function renderNavbar() {
  const content = document.getElementById("content");

  const navbar = document.createElement("div");
  navbar.classList.add("navbar", "blurred"); // Blur Opt-In
  content.appendChild(navbar);

  const appName = document.createElement("h1");
  appName.classList.add("app-name");
  appName.textContent = "Notedock";
  navbar.appendChild(appName);

  const navProject = document.createElement("div");
  navProject.classList.add("nav-item");
  navProject.textContent = "Project";
  navbar.appendChild(navProject);

  const navProject2 = document.createElement("div");
  navProject2.classList.add("nav-item");
  navProject2.textContent = "Univeristy";
  navbar.appendChild(navProject2);

  // TODO: fix the delete button
  // const deleteButton = document.createElement("button");
  // deleteButton.classList.add("delete-button");
  // const deleteIcon = document.createElement("img");
  // deleteIcon.src = "./assets/deleteBtn.svg"; // Path to your SVG in the assets folder
  // console.log(deleteIcon.src); // This will show the fully constructed path in the console
  // deleteIcon.classList.add("delete-icon"); // Add a class for custom styling

  // deleteButton.appendChild(deleteIcon);
  // navProject.appendChild(deleteButton);
}

export { renderNavbar };
