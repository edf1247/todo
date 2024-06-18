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
    todoData.id = "todo-data";
    const completed = document.createElement("input");
    const titleContainer = document.createElement("div");
    const deleteIcon = document.createElement("div");
    const deleteContainer = document.createElement("div");
    deleteContainer.id = "delete-container";
    deleteIcon.className = "material-symbols-outlined";
    deleteIcon.id = "delete-button";
    deleteIcon.innerHTML = "delete";

    deleteIcon.addEventListener("click", function(){
        todoContainer.remove();
    })

    titleContainer.id = "title-container";

    completed.type = "checkbox";


    title.innerHTML = todo.title;
    title.id = "todo-title";
    project.innerHTML = todo.project;
    project.id = "project";
    description.innerHTML = "Description " + todo.description;
    description.id = "description";
    priority.innerHTML = "Priority: " + todo.priority;
    priority.id = "priority";
    deadline.innerHTML = "Deadline: " + todo.deadline;
    deadline.id = "deadline";

    container.appendChild(todoContainer);
    titleContainer.appendChild(completed);
    titleContainer.appendChild(title);
    titleContainer.appendChild(deleteContainer);
    deleteContainer.appendChild(deleteIcon);
    todoContainer.appendChild(titleContainer);
    todoContainer.appendChild(todoData);
    todoData.appendChild(project);
    todoData.appendChild(description);
    todoData.appendChild(priority);
    todoData.appendChild(deadline);

}
