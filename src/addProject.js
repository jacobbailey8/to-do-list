import { inbox } from '.';
import Icon from './hammer.png';
import populateModule from './populateModule';

export default function addProject(project) {
    const projects = document.getElementById('projects');

    let newProject = document.createElement('div');
    newProject.id = project.name;
    newProject.classList.add('newProject');
    let imgDiv = document.createElement('div');
    let icon = new Image();
    icon.src = Icon;
    imgDiv.classList.add('icon');
    imgDiv.appendChild(icon);

    let labelDiv = document.createElement('div');
    labelDiv.classList.add('labelDiv');
    labelDiv.addEventListener('click', () => {
        populateModule(project);
    })

    labelDiv.innerHTML = project.name;
    let cancelBtn = document.createElement('div');
    cancelBtn.innerHTML = 'x'
    cancelBtn.classList.add('cancel');
    newProject.appendChild(imgDiv);
    newProject.appendChild(labelDiv);
    newProject.appendChild(cancelBtn);

    
    projects.insertBefore(newProject, projects.children[1]);
    cancelBtn.addEventListener('click', () => {
        projects.removeChild(newProject);
        inbox.removeProject(project.name);
        populateModule(inbox);
    });
}

