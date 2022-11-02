import Task from "./task";

export default function populateModule(project){

    function createTaskForm() {
        let form = document.createElement('form');
        form.id = 'taskForm';
        let input = document.createElement('input');
        input.id = 'newTaskInput';
        
        
        let add_btn = document.createElement('button');
        add_btn.addEventListener('click', () => {
            project.addTask(new Task(input.value, '', 11, 'none'));
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

    project.taskArray.forEach(task => {

        

        
        let currentTask = document.createElement('div');
        currentTask.classList.add('task');

        let priorityBtn = document.createElement('div')
        priorityBtn.classList.add('priorityBtn');
        let taskName = document.createElement('div')
        taskName.classList.add('taskName');
        taskName.innerHTML = task.getName();
        let taskDate = document.createElement('div')
        taskDate.classList.add('taskDate');
        taskDate.innerHTML = task.getDueDate();

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

    taskGrid.appendChild(addTaskBtn);
}