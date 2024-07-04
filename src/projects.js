export var projectList = ["test", "test"];

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

function alertUser(){
    alert("Please enter a project name.");
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
    const submitText = document.createElement("button");
    const wrapper = document.createElement("div");

    wrapper.id = "wrapper";

    submitText.type = "submit";
    submitText.innerHTML = "Create";
    submitText.className = "button-4";
    submitCont.id = "submit-cont";

    submitText.addEventListener("click", function(){
        event.preventDefault();
        let userInput = projInput.value;
        if (userInput.length == 0) {
            alertUser();
        }
        else {
            projectList.push(userInput);
            console.log(projectList);
            blur.innerHTML = " ";
            blur.remove();

            document.getElementById("project-container").innerHTML = "";

            renderProjectList();
        }
    });

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

    submitCont.appendChild(submitText);
    

    formContainer.appendChild(formTitle);
    projName.appendChild(wrapper);
    formContainer.appendChild(projName);
    projName.appendChild(submitCont);
    

    page.appendChild(blur);
    blur.appendChild(formContainer);
}



export function renderAddProjectForm() {
    let button = document.getElementById("project-button");
    button.addEventListener("click", function(){
        addProjectDom();
        
    });
}