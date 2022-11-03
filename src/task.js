import format from 'date-fns/format'
export default class Task {

    constructor(name, description, dueDate, priority, projectName){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectName = projectName;
    }

    getName() {
        return this.name;
    }
    setName(newName){
        this.name = newName;
    }

    getDescription() {
        return this.description;
    }
    setDescription(newDescription){
        this.description = newDescription;
    }

    getDueDate() {
        return this.dueDate;
    }
    setDueDate(newDate){
        this.dueDate = newDate;
    }

    getPriority() {
        return this.priority;
    }
    setPriority(newPriority){
        this.priority = newPriority;
    }

    formatDate(){
        let date = this.dueDate;
        let dateFull = new Date(date)

        // following line cancels out timezone discrepecies
        dateFull.setTime( dateFull.getTime() + dateFull.getTimezoneOffset()*60*1000 );
        
        let formattedDate = format(dateFull, 'MMMM dd, yyyy');
        // this.dueDate = formattedDate;
        return formattedDate;

    }
}