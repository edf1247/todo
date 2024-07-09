import {createTodo} from "./todo.js";
import {displayTodo} from "./todo.js"
import { todoForm } from "./todo.js";
import { todoArr } from "./todo.js";
import { countTodo } from "./projects.js";
import { renderAddProjectForm, renderProjectList } from "./projects.js";


displayTodo();
todoForm();
renderProjectList();
renderAddProjectForm();
countTodo();
