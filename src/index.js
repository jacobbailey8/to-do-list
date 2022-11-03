import addProject from './addProject'
import Inbox from './inbox'
import populateModule from './populateModule'
import Project from './project'
import './style.css'
import Task from './task'
import Today from './today'
import Week from './week'




// create inbox, today, and week objects
const inbox = new Inbox("Inbox")

const inboxDiv = document.getElementById('inbox');
inboxDiv.addEventListener('click', () => {
    populateModule(inbox);
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

export {inbox};