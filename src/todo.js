export function createTodo(title, date, description, priority, deadline) {
    return {
        title,
        date,
        description,
        priority,
        deadline
    }
}

export function displayTodo(todo) {
    const container = document.getElementById("container");
    const todoContainer = document.createElement("div");
    const title = document.createElement("div");
    const creationDate = document.createElement("div");
    const description = document.createElement("div");
    const priority =  document.createElement("div");
    const deadline = document.createElement("div");


    title.innerHTML = "Title: " + todo.title;
    creationDate.innerHTML = "Date Created: " + todo.date;
    description.innerHTML = "Description " + todo.description;
    priority.innerHTML = "Priority: " + todo.priority;
    deadline.innerHTML = "Deadline: " + todo.deadline;

    container.appendChild(todoContainer);
    todoContainer.appendChild(title);
    todoContainer.appendChild(creationDate);
    todoContainer.appendChild(description);
    todoContainer.appendChild(priority);
    todoContainer.appendChild(deadline);
}
