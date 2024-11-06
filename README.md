# A Notion like ToDo List
 
A book library build with Webpack and JavaScript.


[Live View](https://deucenn.github.io/todo-list/)

----------------------------------------------------------------
 
## Features

- **Project Management**: Allows users to create, view, and delete projects directly from the navigation bar.
- **Task Management**: Users can add, view, and delete tasks within each project, organizing tasks by project.
- **Local Storage Persistence**: Projects and tasks are saved to local storage, so they persist even after reloading the page.
- **Dynamic UI Updates**: New projects and tasks dynamically appear in the UI without requiring page reloads.
- **Responsive Task Modal**: A modal interface for adding new tasks, which blurs the background content to maintain focus.

----------------------------------------------------------------

## Next Features to Add

- **Project Selection in Navbar**: When a project is clicked in the navbar, the app will load and display only the tasks associated with that project.
- **Task Status Tracking**: Add the ability to mark tasks as complete or incomplete within each project.
- **Edit Task & Project Names**: Implement editing functionality for task and project names to allow better customization.
- **Due Dates for Tasks**: Enable users to assign and display due dates for each task.
- **Project Deletion Confirmation**: Show a confirmation modal before permanently deleting a project.
- **Search Functionality**: Allow users to search across projects and tasks for easier navigation.
- **Drag-and-Drop Task Reordering**: Add the ability to reorder tasks within a project using drag-and-drop.

----------------------------------------------------------------

## Future Enhancements

- **Filter and Sort Options**: Allow users to filter tasks by completion status, due date, or alphabetical order.
- **Collaborative Mode**: Introduce multi-user functionality, allowing team members to collaborate on projects and tasks in real-time.
- **Task Prioritization**: Add priority levels for tasks (e.g., low, medium, high) to help users manage workloads.
- **Progress Tracking**: Display progress indicators for each project based on task completion rates.

----------------------------------------------------------------

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before running the project, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/deucenn/restaurant-page.git
   ```

2. Navigate into the project directory:

   ```bash
   cd restaurant-page
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

To start the development server and see the website live:

1. Run the Webpack development server:

   ```bash
   npx webpack serve
   ```

2. Open your browser and visit [http://localhost:8080](http://localhost:8080) to view the website.

## Built With

- **JavaScript (ES6)**: Dynamically generates the website's content.
- **CSS**: Provides the styling for a professional and clean look.
- **Webpack**: Bundles the project and serves it via Webpack Dev Server.

## Deployment

To deploy the project on GitHub Pages:

1. Create a `gh-pages` branch:

   ```bash
   git branch gh-pages
   ```

2. Merge changes from `main` to `gh-pages`:

   ```bash
   git checkout gh-pages
   git merge main --no-edit
   ```

3. Build the project:

   ```bash
   npx webpack
   ```

4. Push the contents of the `dist` folder to the `gh-pages` branch:

   ```bash
   git add dist -f