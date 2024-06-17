export function createTodo(title, project, description, priority, deadline) {
    return {
        title,
        project,
        description,
        priority,
        deadline
    }
}

export function displayTodo(todo) {
    const container = document.getElementById("body-container");
    const todoContainer = document.createElement("div");
    const title = document.createElement("div");
    const project = document.createElement("div");
    const description = document.createElement("div");
    const priority =  document.createElement("div");
    const deadline = document.createElement("div");
    const todoData = document.createElement("div");
    todoContainer.id = "todo-container";


    title.innerHTML = todo.title;
    title.id = "todo-title";
    project.innerHTML = todo.project;
    project.id = "project";
    description.innerHTML = "Description " + todo.description;
    priority.innerHTML = "Priority: " + todo.priority;
    deadline.innerHTML = "Deadline: " + todo.deadline;

    container.appendChild(todoContainer);
    todoContainer.appendChild(title);
    todoContainer.appendChild(todoData);
    todoData.appendChild(project);
    todoData.appendChild(description);
    todoData.appendChild(priority);
    todoData.appendChild(deadline);
}
