import { todoArr } from "./todo";

function countToday(){
    let counter = 0;
    for(let i = 0; i < todoArr.length; i++){
        let todoDate = todoArr[i].deadline;

        let todaysDate = new Date();

        if(todoDate.setHours(0, 0, 0, 0) === todaysDate.setHours(0, 0, 0, 0)){
            counter++;
        }
    }
    let numToday = counter;
    return numToday;
}

