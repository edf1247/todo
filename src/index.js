import {displayTodo} from "./todo.js"
import { todoForm } from "./todo.js";
import { countTodo } from "./projects.js";
import { renderAddProjectForm, renderProjectList } from "./projects.js";
import { updateCalender } from "./calender.js";


displayTodo();
todoForm();
renderProjectList();
renderAddProjectForm();
countTodo();
updateCalender()

function darkMode(){
    let dmButton = document.getElementById("dm-button");
    let background = document.body;

    dmButton.addEventListener("click", function(){
        background.classList.toggle("dark-mode");
        dmButton.classList.toggle("dm-icon-dark");
    });
}

darkMode();