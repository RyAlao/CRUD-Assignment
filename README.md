Hello!
This Task Management App is a web-based application designed to help users efficiently manage their tasks. It provides a structured way to add, view, and delete tasks, making it easier to track priorities and stay organized.
What It Does
- Task Creation: Users can input a task title, description, and priority level (Low, Medium, High).
- Task List Management: Displays all tasks dynamically using AngularJS, ensuring an interactive experience.
- Task Deletion: Users can remove tasks with a single click, updating both the frontend and backend in real time.
- Backend Integration: The app is powered by a Spring Boot backend, handling database operations and API requests.
How It Works
- The frontend sends requests to the backend via REST API endpoints (GET /tasks, POST /tasks, DELETE /tasks/{id}).
- The backend processes the requests, stores data, and responds with updated task lists.
- The AngularJS-based frontend dynamically updates the UI based on user actions.
This app provides a simple yet effective task management system for tracking daily activities while leveraging full-stack development principles.
**BELOW ARE STEPS FOR TESTING THIS APPLICATION**


- Clone the GitHub Repository
- Open your terminal and clone the project.
- Navigate into the project folder.
- Start the Backend (Spring Boot)
- Open the backend folder in your code editor.
- Ensure Java & Maven are installed.
- Run the command to start the Spring Boot server.
- The server will start at http://localhost:8082.
- Run the Frontend (AngularJS)
- Navigate to the frontend folder.
- Open index.html using Live Server in VS Code or another local browser setup.
- Test the App Functionality
- Add tasks using the input form.
- View tasks dynamically updating in the list.
- Delete tasks by clicking the "Delete" button.
- The frontend communicates with the backend, so ensure both are running.

