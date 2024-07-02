let projectList = ["test", "test"];

function renderAddProjectForm() {
    let button = document.getElementById("project-button");

    button.addEventListener("click", function(){

    });
}

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

