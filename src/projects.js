let projectList = ["test", "test"];

export function renderProjectList(){
    for(let i = 0; i < projectList.length; i++){
        const projectContainer = document.getElementById("project-container");
        const projectDiv = document.createElement("div");
        projectDiv.className = "projects";
        const projectName = document.createElement("div");
        projectName.innerHTML = projectList[i];
        projectName.id = "project-name";

        const projectTracker = document.createElement("div");
        projectTracker.id = "project-tracker";

        projectDiv.appendChild(projectName);
        projectDiv.appendChild(projectTracker);
        projectContainer.appendChild(projectDiv);
    }
}

function addProjectDom() {
    const page = document.getElementById("body");
    const blur = document.createElement("div");
    blur.id = "blur";

    const formContainer = document.createElement("div");
    const formTitle = document.createElement("div");
    const projName = document.createElement("div");
    const projInput = document.createElement("input");
    const projInputLabel = document.createElement("div");
    const submit = document.createElement("div");

    formContainer.id = "project-form-container";
    formTitle.id = "project-title-container";
    formTitle.innerHTML = "Create Project";
    
    projInputLabel.innerHTML = "Project Name:";
    projInput.type = "text";

    formContainer.appendChild(formTitle);
    projName.appendChild(projInputLabel);
    projName.appendChild(projInput);
    formContainer.appendChild(projName);
    formContainer.appendChild(submit);


    page.appendChild(blur);
    blur.appendChild(formContainer);
}

export function renderAddProjectForm() {
    let button = document.getElementById("project-button");
    button.addEventListener("click", function(){
        addProjectDom();
    });
}