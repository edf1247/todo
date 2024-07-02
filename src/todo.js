export function createTodo(title, project, description, priority, deadline) {
    return {
        title,
        project,
        description,
        priority,
        deadline
    }
}

let todo1 = createTodo("test", "test", "test", "test", "test");


let todoArr = [];
todoArr.push(todo1);
const projects = ["test", "test"];


export function todoForm() {
    const newTodo = document.getElementById("add-todo");
    newTodo.addEventListener("click", function (){
        const header = document.getElementById("body-header");
        const body = document.getElementById("body-container");

        while (header.firstChild) {
            header.removeChild(header.firstChild);
        };
        while (body.firstChild) {
            body.removeChild(body.firstChild);
        };
        renderForm(projects);
    });
    
}


function renderForm(projects) {
    const bodyHeader = document.getElementById("body-header");
    const bodyContainer = document.getElementById("body-container");
    const todoTitle = document.createElement("div");
    todoTitle.id = "body-title";
    todoTitle.className = "todo-title";
    todoTitle.innerHTML = "Create Todo";

    const closeContainer = document.createElement("div");
    closeContainer.id = "close-container";

    const closeWindow = document.createElement("div");
    closeWindow.id = "close-window";

    closeContainer.appendChild(closeWindow);

    closeWindow.addEventListener("click", function(){
        const header = document.getElementById("body-header");
        const body = document.getElementById("body-container");

        while (header.firstChild) {
            header.removeChild(header.firstChild);
        };
        while (body.firstChild) {
            body.removeChild(body.firstChild);
        };

        header.innerHTML = "<div id='body-title'>Todo List</div><div id='add-container'><div id='add-todo' class='btn btn-rect-to-round btn-rect-to-round--black'>New <span class='material-symbols-outlined'>add</span></div></div>";
        todoForm();
        displayTodo();
    });

    const formContainer = document.createElement("div");
    formContainer.id = "form-container";

    const labelT = document.createElement("label");
    labelT.htmlFor = "form-title";
    labelT.innerHTML = "Title";

    const labelPt = document.createElement("label");
    labelPt.htmlFor = "form-project";
    labelPt.innerHTML = "Projects";

    const labelD = document.createElement("label");
    labelD.htmlFor = "form-description";
    labelD.innerHTML = "Description";

    const labelPy = document.createElement("label");
    labelPy.htmlFor = "form-priority";
    labelPy.innerHTML = "Priority";

    const labelDe = document.createElement("label");
    labelDe.htmlFor = "form-deadline";
    labelDe.innerHTML = "Deadline";

    const projectDiv = document.createElement("div");
    projectDiv.id = "project-div";

    const descriptionDiv = document.createElement("div");
    descriptionDiv.id = "description-div";

    const priorityDiv = document.createElement("div");
    priorityDiv.id = "priority-div";

    const deadlineDiv = document.createElement("div");
    deadlineDiv.id = "deadline-div";

    const titleDiv = document.createElement("div");
    titleDiv.id = "title-div";

    const title = document.createElement("input");
    title.id = "form-title";
    title.required = true;

    const projectSel = document.createElement("select");
    projectSel.id = "form-project";
    projectSel.required = true;

    for(let i=0; i < projects.length; i++) {
        const curSelection = document.createElement("option");
        curSelection.value = projects[i];
        curSelection.innerHTML = projects[i];
        curSelection.id = "option-" + i;
        curSelection.className = "options";
        projectSel.appendChild(curSelection);
    };

    const description = document.createElement("input");
    description.type = "textarea";
    description.id = "form-description";
    description.addEventListener("input", autoResize);
    description.maxLength = 60;
    description.required = true;

    function autoResize() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    }

    const priority = document.createElement("select");
    priority.setAttribute("required", "");
    const priorityOptions = ["Low", "Medium", "High"];
    priority.id = "form-priority";

    for (let i = 0; i < priorityOptions.length; i++) {
        const pSelect = document.createElement("option");
        pSelect.value = priorityOptions[i];
        pSelect.innerHTML = priorityOptions[i];
        pSelect.className = "options";
        priority.appendChild(pSelect);
    }

    const deadlineInput = document.createElement("input");
    deadlineInput.type = "date";
    deadlineInput.max = "2035-01-01";
    deadlineInput.min = new Date();
    deadlineInput.id = "form-deadline";
    deadlineInput.setAttribute("required", "");

    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Add Item";
    submitButton.id = "submit";
    submitButton.className ="btn btn-rect-to-round btn-rect-to-round--black";

    submitButton.addEventListener("click", function createTodoItem(){
        let todoTitle = document.getElementById("form-title").value;
        let todoProjects = document.getElementById("form-project").value;
        let todoPriority = document.getElementById("form-priority").value;
        let todoDescription = document.getElementById("form-description").value;
        let todoDeadline = document.getElementById("form-deadline").value;

        if (todoTitle == null || todoProjects == null || todoPriority == null || todoDescription == null || todoDeadline== null) {
            let alert = document.createElement("div");
            alert.innerHTML = "Please fill out all required fields.";
            alert.id = "alert";
            bodyContainer.appendChild(alert);
        }
        else {
            let todoObj = createTodo(todoTitle, todoProjects, todoDescription, todoPriority, todoDeadline);
        
            todoArr.push(todoObj);
            
            const header = document.getElementById("body-header");
            const body = document.getElementById("body-container");

            while (header.firstChild) {
                header.removeChild(header.firstChild);
            };
            while (body.firstChild) {
                body.removeChild(body.firstChild);
            };

            header.innerHTML = "<div id='body-title'>Todo List</div><div id='add-container'><div id='add-todo' class='btn btn-rect-to-round btn-rect-to-round--black'>New <span class='material-symbols-outlined'>add</span></div></div>";
            todoForm();
            displayTodo();
        }
    });

    titleDiv.appendChild(labelT);
    titleDiv.appendChild(title);

    projectDiv.appendChild(labelPt);
    projectDiv.appendChild(projectSel);

    descriptionDiv.appendChild(labelD);
    descriptionDiv.appendChild(description);

    priorityDiv.appendChild(labelPy);
    priorityDiv.appendChild(priority);

    deadlineDiv.appendChild(labelDe);
    deadlineDiv.appendChild(deadlineInput);


    bodyHeader.appendChild(todoTitle);
    bodyHeader.appendChild(closeContainer);
    bodyContainer.appendChild(formContainer);
    formContainer.appendChild(titleDiv);
    formContainer.appendChild(projectDiv);
    formContainer.appendChild(descriptionDiv);
    formContainer.appendChild(priorityDiv);
    formContainer.appendChild(deadlineDiv);
    formContainer.appendChild(submitButton);
}



export function displayTodo() {
    for (let i = 0; i < todoArr.length; i++){
        let todo = todoArr[i];
        const container = document.getElementById("body-container");
        const todoContainer = document.createElement("div");
        const title = document.createElement("div");
        const project = document.createElement("div");
        const description = document.createElement("div");
        const priority =  document.createElement("div");
        const deadline = document.createElement("div");
        const todoData = document.createElement("div");
        todoContainer.className = "todo-container";
        todoData.id = "todo-data";
        const completed = document.createElement("input");
        const titleContainer = document.createElement("div");
        const deleteIcon = document.createElement("div");
        const deleteContainer = document.createElement("div");
        deleteContainer.id = "delete-container";
        deleteIcon.id = "delete-button";
        todoContainer.id = i;


        deleteIcon.addEventListener("click", function(){
            let currentTodo = todoContainer.id;
            todoContainer.remove();
            todoArr.splice(currentTodo, 1);
            console.log(todoArr);
            let selector = document.getElementsByClassName("todo-container");
            var renderedTodos = Array.from(selector);
            for(let i = 0; i < renderedTodos.length; i++){
                renderedTodos[i].id = i;
            }
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
    
}

export {todoArr};