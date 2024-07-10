import { todoArr } from "./todo";

function countToday(){
    let counter = 0;
    for(let i = 0; i < todoArr.length; i++){
        let todoDate = new Date(todoArr[i].deadline);

        let todaysDate = new Date();

        if(todoDate.getDate() === todaysDate.getDate() && todoDate.getMonth() === todaysDate.getMonth() && todoDate.getFullYear() === todaysDate.getFullYear()){
            counter++;
        }
    }
    let numToday = counter;
    return numToday;
}

function countWeek(){
    let counter = 0;
    for(let i = 0; i < todoArr.length; i++){
        let todoDate = new Date(todoArr[i].deadline);

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

function countMonth(){
    let counter = 0;
    for(let i = 0; i < todoArr.length; i++){
        let todoDate = new Date(todoArr[i].deadline);

        let now = new Date();

        let curMonth = now.getMonth();

        if(todoDate.getMonth() === curMonth) {
            counter++;
        }

    }
    let numMonth = counter;
    return numMonth;
}

export function updateCalender(){
    let today = countToday();
    let week = countWeek();
    let month = countMonth();

    let todayTracker = document.getElementById("day-counter");
    todayTracker.innerHTML = today;

    let weekTracker = document.getElementById("week-counter");
    weekTracker.innerHTML = week;

    let monthTracker = document.getElementById("month-counter");
    monthTracker.innerHTML = month;
}