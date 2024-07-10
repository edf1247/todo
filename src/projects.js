import { todoArr } from "./todo";

export var projectList = [];

function createProject(projectName){
    let todoCount = 0;
    return {
        projectName, todoCount
    }
}

let project1 = createProject("test");
projectList.push(project1);


export function countTodo(){
    for(let j = 0; j < projectList.length; j++){
        let curProject = projectList[j];
        let counter = 0;
        for(let i = 0; i < todoArr.length; i++){
            if(todoArr[i].project === curProject.projectName){
                counter++;
                
            }
        }
        curProject.todoCount = counter;
        console.log(projectList);

        let selector = document.getElementsByClassName("project-tracker");
        selector[j].innerHTML = curProject.todoCount;
    }
    
}

export function renderProjectList(){
    for(var i = 0; i < projectList.length; i++){
        const projectContainer = document.getElementById("project-container");
        
        const projectDiv = document.createElement("div");
        projectDiv.id = i;
        const removeProject = document.createElement("div");
        removeProject.id = "remove-project";
        projectDiv.className = "projects";
        const projectName = document.createElement("div");
        
        projectName.innerHTML = projectList[i].projectName;
        projectName.id = "project-name";
        

        const projectTracker = document.createElement("div");
        projectTracker.id = "project-tracker";
        projectTracker.innerHTML = projectList[i].todoCount;
        projectTracker.className = "project-tracker"

        removeProject.addEventListener("click", function (){
            let curSelection = projectDiv.id;
            projectList.splice(curSelection, 1);
            projectContainer.innerHTML = "";
            renderProjectList();
        });
        
        projectDiv.appendChild(projectName);
        projectDiv.appendChild(projectTracker);
        projectDiv.appendChild(removeProject);
        projectContainer.appendChild(projectDiv);
        
    }
    countTodo();
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
        else if(projectList.some((x) => x.projectName === userInput)){
            alert("Looks like you already have the project " + userInput + ". Please enter a new project name!");
        }
        else {

            let project = createProject(userInput);
            projectList.push(project);
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