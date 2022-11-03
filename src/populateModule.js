import { inbox } from ".";
import Inbox from "./inbox";
import Task from "./task";
import format from 'date-fns/format'

export default function populateModule(project){

    function createTaskForm() {
        let form = document.createElement('form');
        form.id = 'taskForm';
        let input = document.createElement('input');
        input.id = 'newTaskInput';
        
        
        

        // date
        let dateContainer = document.createElement('div');
        dateContainer.id = 'dateContainer';
        let dateLabel = document.createElement('div');
        dateLabel.innerHTML = 'Date: ';
        let dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateContainer.appendChild(dateLabel);
        dateContainer.appendChild(dateInput);


        // priority
        let priorityContainer = document.createElement('div');

        
      

        let add_btn = document.createElement('button');
        add_btn.addEventListener('click', () => {
            let dateVal;
            if (!dateInput.value){
                // dateVal = new Date();
                dateVal = format(new Date(), 'MMMM dd, yyyy');
            }
            else {
                let temp = dateInput.value;
                let fullDate = new Date(temp);
                fullDate.setTime( fullDate.getTime() + fullDate.getTimezoneOffset()*60*1000 );
                dateVal = format(fullDate, 'MMMM dd, yyyy');
            }
            let newTask1 = new Task(input.value, '', dateVal, 'none', project.name);
            let newTask2 = new Task(input.value, '', dateVal, 'none', project.name);
            inbox.addTask(newTask1);
            project.addTask(newTask2);
            let taskGrid = document.querySelector('.taskGrid');
            taskGrid.removeChild(form);
            populateModule(project);
        })
        let cancel_btn = document.createElement('button');
        cancel_btn.addEventListener('click', () => {
            let taskGrid = document.querySelector('.taskGrid');
            taskGrid.removeChild(form);
            populateModule(project);
        })

        add_btn.id = 'add_btn';
        add_btn.innerHTML = "Add"
        cancel_btn.id = 'cancel_btn';
        cancel_btn.innerHTML = "Cancel"
        form.appendChild(input);
        form.appendChild(dateContainer);
        form.appendChild(priorityContainer);
        form.appendChild(add_btn);
        form.appendChild(cancel_btn);



        return form;
    }



    const content = document.querySelector('.content');
    content.innerHTML = '';


    let header = document.createElement('div');
    header.id = 'projectHeader';
    header.innerHTML = project.name;
    content.appendChild(header);

    // need to sort array first

    let taskGrid = document.createElement('div');
    taskGrid.classList.add('taskGrid');
    content.appendChild(taskGrid);

    // sort array
    project.sortTasks();
    project.taskArray.forEach(task => {

        // <input type="date" class="input-due-date active" data-input-due-date=""></input>

        
        let currentTask = document.createElement('div');
        currentTask.classList.add('task');

        let priorityBtn = document.createElement('div')
        priorityBtn.classList.add('priorityBtn');
        let taskName = document.createElement('div')
        taskName.classList.add('taskName');

        taskName.innerHTML = task.getName();
        let taskDate = document.createElement('div');
        taskDate.innerHTML = task.getDueDate();
        taskDate.classList.add('taskDate');
        
    

        currentTask.appendChild(priorityBtn);
        currentTask.appendChild(taskName);
        currentTask.appendChild(taskDate);

        taskGrid.appendChild(currentTask);
    });

    // add task button
    let addTaskBtn = document.createElement('div');
    addTaskBtn.classList.add('task');
    addTaskBtn.id = 'addTaskButton';

    let plusSign = document.createElement('div');
    plusSign.classList.add('priorityBtn');
    plusSign.id = 'plusBtn';
    plusSign.innerHTML = '+';
    plusSign.addEventListener('click', () => {

        // remove add task text div
        let addDiv = document.getElementById('addTaskButton');
        taskGrid.removeChild(addDiv);

        // add form and event listeners
        taskGrid.appendChild(createTaskForm());
    })


    let addTaskText = document.createElement('div');
    addTaskText.classList.add('taskName');
    addTaskText.innerHTML = 'Add Task';

    addTaskBtn.appendChild(plusSign);
    addTaskBtn.appendChild(addTaskText);

    if (project.name != "Inbox"){
        taskGrid.appendChild(addTaskBtn);
    }
    
}