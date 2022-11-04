import addProject from './addProject'
import Inbox from './inbox'
import populateModule from './populateModule'
import Project from './project'
import './style.css'
import Task from './task'
import Today from './today'
import Week from './week'




// create inbox, today, and week objects
const inbox = new Inbox("Inbox");
const today = new Today("Today");
const week = new Week("This Week");

const todayDiv = document.getElementById('today');
const weekDiv = document.getElementById('this-week');
const inboxDiv = document.getElementById('inbox');

inboxDiv.addEventListener('click', () => {
    populateModule(inbox);
    inboxDiv.style.backgroundColor = '#ccc';
    todayDiv.style.backgroundColor = 'transparent';
    weekDiv.style.backgroundColor = 'transparent';

    inboxDiv.style.fontFamily = 'Roboto-Bold';
    todayDiv.style.fontFamily = 'Roboto';
    weekDiv.style.fontFamily = 'Roboto';
    
})
todayDiv.addEventListener('click', () => {
    populateModule(today);
    todayDiv.style.backgroundColor = '#ccc';
    inboxDiv.style.backgroundColor = 'transparent';
    weekDiv.style.backgroundColor = 'transparent';

    todayDiv.style.fontFamily = 'Roboto-Bold';
    inboxDiv.style.fontFamily = 'Roboto';
    weekDiv.style.fontFamily = 'Roboto';
    
})
weekDiv.addEventListener('click', () => {
    populateModule(week);
    weekDiv.style.backgroundColor = '#ccc';
    todayDiv.style.backgroundColor = 'transparent';
    inboxDiv.style.backgroundColor = 'transparent';

    weekDiv.style.fontFamily = 'Roboto-Bold';
    todayDiv.style.fontFamily = 'Roboto';
    inboxDiv.style.fontFamily = 'Roboto';
})

const projects = document.getElementById('projects');



const addProjectDiv = document.getElementById('addProject');
addProjectDiv.addEventListener('click',() => {
    projects.appendChild(makeProjectForm());
    projects.removeChild(addProjectDiv);
})


function makeAddProjectDiv(){
    let addProjectButton = document.createElement('div');
    addProjectButton.id = 'addProject';
    addProjectButton.innerHTML = '+ Add Project';
    
    addProjectButton.addEventListener('click', () => {
        projects.appendChild(makeProjectForm());
        projects.removeChild(addProjectButton);
    })

    projects.appendChild(addProjectButton);
}


function makeProjectForm(){
   

    let form = document.createElement('form');
    form.classList.add('form-container');
    let input = document.createElement('input');
    input.id = 'check';
    input.placeholder = 'Project Name';
    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('project-buttons');
    let check = document.createElement('button');
    check.id = 'project-check';
    let cancel = document.createElement('button');
    cancel.id = 'project-cancel';
    check.innerHTML = 'Add';
    cancel.innerHTML = 'Cancel';
    buttonContainer.appendChild(check);
    buttonContainer.appendChild(cancel);
    form.appendChild(input);
    form.appendChild(buttonContainer);

    check.addEventListener('click', () => {
        let input = document.getElementById('check');
        let content = input.value;
        let newProject = new Project(content);
        addProject(newProject);
        projects.removeChild(document.querySelector('form'));
        makeAddProjectDiv();
    })

    cancel.addEventListener('click', () => {
        projects.removeChild(document.querySelector('form'));
        makeAddProjectDiv();
    })
    
    return form;


    
}

export {inbox, today, week};