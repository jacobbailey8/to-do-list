export default class Week {
    constructor(name){
        this.name = name;
        this.taskArray = [];
    }

    addTask(task){
        this.taskArray.push(task);
    }

    removeTask(index){
        this.taskArray.splice(index, 1);
    }

    showWeek(){
        
    }

    


}