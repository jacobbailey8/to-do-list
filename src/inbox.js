export default class Inbox {
    constructor(){
        this.name = 'Inbox';
        this.taskArray = [];
    }

    addTask(task){
        this.taskArray.push(task);
    }

    removeTask(index){
        this.taskArray.splice(index, 1);
    }

    showInbox(){
        
    }

    


}