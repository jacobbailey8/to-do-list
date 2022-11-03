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
}