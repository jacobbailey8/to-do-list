export default class Inbox {
    constructor(){
        this.name = 'Inbox';
        this.taskArray = [];
    }

    addTask(task){
        this.taskArray.push(task);
    }

    removeProject(name){
        let result = this.taskArray.filter(task => task.projectName != name);
        this.taskArray = result;
    }

    showInbox(){
        
    }

    


}