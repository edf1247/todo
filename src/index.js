import {createTodo} from "./todo.js";
import {displayTodo} from "./todo.js"
import { todoForm } from "./todo.js";
import { todoArr } from "./todo.js";

for(let i = 0; i < todoArr.length; i++) {
    displayTodo(todoArr[i]);
}
todoForm();
