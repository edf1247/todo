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
    const projName = document.createElement("form");
    const projInput = document.createElement("input");
    const projInputLabel = document.createElement("div");
    const submitCont = document.createElement("div");
    const submitText = document.createElement("div");
    const plusIcon = document.createElement("div");
    const wrapper = document.createElement("div");

    wrapper.id = "wrapper";

    plusIcon.id = "plus-icon";
    submitText.innerHTML = "Create";
    submitText.id = "submit-project";
    submitCont.id = "submit-cont";

    formContainer.id = "project-form-container";
    formTitle.id = "project-title-container";
    formTitle.innerHTML = "Create Project";
    
    projName.id = "project-body";
    projInputLabel.innerHTML = "Project Name:";
    projInputLabel.id = "proj-input-label";
    projInput.type = "text";
    projInput.id = "proj-input";

    

    wrapper.appendChild(projInputLabel);
    wrapper.appendChild(projInput);

    submitText.appendChild(plusIcon);
    submitCont.appendChild(submitText);
    

    formContainer.appendChild(formTitle);
    projName.appendChild(wrapper);
    formContainer.appendChild(projName);
    projName.appendChild(submitCont);
    

    page.appendChild(blur);
    blur.appendChild(formContainer);
}

function processProjectInput(){
    const projectName = document.getElementById("proj-input").value;
    const projectSubmit = document.getElementById("submit-project");

    projectSubmit.addEventListener("click", function(){
        projectList.push(projectName);
        console.log(projectList);
    });


}

export function renderAddProjectForm() {
    let button = document.getElementById("project-button");
    button.addEventListener("click", function(){
        addProjectDom();
        processProjectInput();
    });
}