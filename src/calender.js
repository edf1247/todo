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

function countWeek(){
    let counter = 0;
    for(let i = 0; i < todoArr.length; i++){
        let todoDate = todoArr[i].deadline;

        let now = new Date();

        let inWeek = new Date();
        inWeek.setDate(inWeek.getDate() +7);

        if(todoDate.valueOf() >= now.valueOf() && todoDate.valueOf() <= inWeek.valueOf()){
            counter++;
        }

    }
    let numWeek = counter;
    return numWeek;
}



