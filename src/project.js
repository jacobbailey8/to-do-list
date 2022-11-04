import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import parseISO from 'date-fns/parseISO';

export default class Project {
    constructor(name){
        this.name = name;
        this.taskArray = [];
    }

    addTask(task){
        this.taskArray.push(task);
    }

    removeTask(taskName){
        for (let i = 0; i < this.taskArray.length; i++){
            if (this.taskArray[i].name == taskName){
                this.taskArray.splice(i, 1);
            }
        }
    }

    // return new array of tasks sorted in order by date
    sortTasks(){
        
        function dateCompare(a,b){
            if (a.getDueDate() < b.getDueDate()){
                return -1;
            }
            else if (a.getDueDate() > b.getDueDate()){
                return 1;
            }else {
                return 0;
            }
        }
        
     
        this.taskArray.sort(dateCompare);
        // if (!priority){
        //     this.taskArray.sort(dateCompare);
        // }
        // else {
        //     let green = [];
        //     let red = [];
        //     let yellow = [];
        //     for (let i = 0; i < this.taskArray.length; i++){
        //         let cur = this.taskArray[i];
        //         if (cur.priority == 'low'){
        //             green.push(cur);
        //         }
        //         else if (cur.priority == 'high'){
        //             yellow.push(cur);
        //         }
        //         else {
        //             red.push(cur);
        //         }
        //     }

        //     green.sort(dateCompare);
        //     yellow.sort(dateCompare);
        //     red.sort(dateCompare);

        //     this.taskArray = red;
        //     this.taskArray.concat(yellow);
        //     this.taskArray.concat(green);

        // }
        
        

         
    }

    


}