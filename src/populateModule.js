import { inbox, week, today } from ".";
import Task from "./task";
import format from 'date-fns/format'
import { isThisWeek, parseISO } from "date-fns";

export default function populateModule(project){

    function createTaskForm() {
        let form = document.createElement('form');
        form.id = 'taskForm';
        let input = document.createElement('input');
        input.id = 'newTaskInput';
        input.placeholder = 'Task Name';
        
        
        

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
        priorityContainer.classList.add('priorityContainer')
        let priorityLabel = document.createElement('div');
        priorityLabel.innerHTML = 'Priority:';
        priorityContainer.appendChild(priorityLabel);
        let options = document.createElement('div');
        options.id = 'options';
        priorityContainer.appendChild(options);

        let labelHigh = document.createElement('div');
        labelHigh.innerHTML = "High";
        let highInput = document.createElement('input');
        highInput.type = 'radio';
        highInput.name = 'priority';
        highInput.value = 'high';
        options.appendChild(labelHigh);
        options.appendChild(highInput);

        let labelMed = document.createElement('div');
        labelMed.innerHTML = "Medium";
        let medInput = document.createElement('input');
        medInput.type = 'radio';
        medInput.name = 'priority';
        medInput.value = 'medium';
        options.appendChild(labelMed);
        options.appendChild(medInput);

        let labelLow = document.createElement('div');
        labelLow.innerHTML = "Low";
        let lowInput = document.createElement('input');
        lowInput.type = 'radio';
        lowInput.name = 'priority';
        lowInput.value = 'low';
        options.appendChild(labelLow);
        options.appendChild(lowInput);

        
      

        let add_btn = document.createElement('button');
        add_btn.addEventListener('click', () => {
            let dateVal;
            if (!dateInput.value){
                
                dateVal = format(new Date(), 'MMMM dd, yyyy');
            }
            else {
                let temp = dateInput.value;
                let fullDate = new Date(temp);
                fullDate.setTime( fullDate.getTime() + fullDate.getTimezoneOffset()*60*1000 );
                dateVal = format(fullDate, 'MMMM dd, yyyy');
            }

            let priorityButtons = document.querySelectorAll('input[name="priority"]');
            let selectedPriority;
            priorityButtons.forEach(button => {
                if (button.checked){
                    selectedPriority = button.value;
                }
                
            });


            let newTask1 = new Task(input.value, '', dateVal, selectedPriority, project.name);
            let newTask2 = new Task(input.value, '', dateVal, selectedPriority, project.name);
            let newTask3 = new Task(input.value, '', dateVal, selectedPriority, project.name);
            let newTask4 = new Task(input.value, '', dateVal, selectedPriority, project.name);
            inbox.addTask(newTask1);
            project.addTask(newTask2);

            let todayDate = format(new Date(), 'MMMM dd, yyyy');
            if (dateVal == todayDate){
                today.addTask(newTask4);
            }
            if (isThisWeek(parseISO(dateVal)),  { weekStartsOn: 0 }){
                week.addTask(newTask3);
            }

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
    inbox.sortTasks();
    week.sortTasks();
    today.sortTasks();

    project.taskArray.forEach(task => {

       
        
        let currentTask = document.createElement('div');
        currentTask.classList.add('task');

        let priorityBtn = document.createElement('div')
        priorityBtn.classList.add('priorityBtn');
        let priorityCircle = document.createElement('div');
        if (task.priority == 'high'){
            priorityCircle.classList.add('circleRed');
        }else if (task.priority == 'medium'){
            priorityCircle.classList.add('circleYellow');
        }else {
            priorityCircle.classList.add('circleGreen');
        }
        priorityBtn.appendChild(priorityCircle);

        priorityCircle.addEventListener('click', () => {
            inbox.removeTask(task.name);
            today.removeTask(task.name);
            week.removeTask(task.name);
            project.removeTask(task.name);
            populateModule(project);
        })
       

        






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
    addTaskBtn.addEventListener('click', () => {

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

    if (project.name != "Inbox" && project.name != "Today" && project.name != "This Week"){
        taskGrid.appendChild(addTaskBtn);
    }
    
}