const root = document.getElementById('root');
document.body.style.backgroundColor = '#3F334D';
document.body.style.overflowY = 'hidden';

const header = document.createElement('header');
header.style.width = '60%';
header.style.height = '5vh';
header.style.textAlign = 'center';
header.style.padding = '30px 0';
header.style.backgroundColor = '#2E2533';
header.style.color = 'white';
header.style.fontSize = '20px';
header.style.fontWeight = 'bold';
header.style.letterSpacing = '2px';
header.style.marginLeft = '300px';
const heading = document.createElement('h1');
heading.style.marginTop = '0';
heading.textContent = 'THIS WEB PAGE IS TO DO';


header.appendChild(heading);
document.body.insertBefore(header, root);


const task = document.createElement('input');
task.type = 'text';
task.placeholder = "Write new task";
task.style.backgroundColor = 'white';
task.style.width = '200px';
task.style.height = '20px';
task.style.border = 'none';
task.style.width = '250px';
task.style.height = '5vh';


const section = document.createElement('section');
section.style.padding = '20px';
section.style.display = 'block';
section.style.margin = '120px auto';
section.style.backgroundColor = '#574B60';
section.style.width = '500px';
section.style.height = '60vh';
section.style.borderRadius = '30px';
section.style.color = 'white';

const button = document.createElement('button');
button.textContent = 'SUBMIT TASK';
button.style.display = 'block';
button.style.backgroundColor = '#726080';
button.style.width = '200px';
button.style.height = '5vh';
button.style.borderRadius = '10px';
button.style.border = 'none';
button.style.color = 'white';
button.style.marginTop = '50px';

button.addEventListener('mouseenter', () => {
  button.style.backgroundColor = '#b278d3ff'; 
  button.style.transform = 'scale(1.05)';
});


button.addEventListener('mouseleave', () => {
  button.style.backgroundColor = '#726080'; 
  button.style.transform = 'scale(1)';
});

const list = document.createElement('ul');
list.style.width = '100%';

const counter = document.createElement('p');

function myButton() {
    button.addEventListener('click', () => {
        const taskText = task.value.trim();
        if (!taskText) {
            alert('Please enter valid text');
            return;
        }

        const li = document.createElement('li');
        li.style.listStyleType = "none";
        li.style.display = 'flex';
        li.style.alignItems = 'center';
        li.style.justifyContent = 'space-between';
        li.style.width = '50%';
        li.style.backgroundColor = '#4A3F57';
        li.style.marginBottom = '10px';
        li.style.padding = '12px 16px';
        li.style.borderRadius = '8px';
        li.style.fontSize = '20px';



        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            li.classList.toggle('completed', checkbox.checked);
            updateCounter();
        });

        const span = document.createElement('span');
        span.textContent = taskText;
        span.style.margin = '0 10px';

        const deletebtn = document.createElement('button');
        deletebtn.textContent = "DELETE";
        deletebtn.style.backgroundColor = '#726080';
        deletebtn.style.borderRadius = '10px';
        deletebtn.style.border = 'none';
        deletebtn.style.color = 'white';
        deletebtn.style.marginLeft = '10px';
        deletebtn.style.width = '100px';
        deletebtn.style.height = '30px';

        deletebtn.addEventListener('click', () => {
            li.remove();
            updateCounter();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deletebtn);
        list.appendChild(li);

        task.value = '';
        updateCounter();
    });
}

function updateCounter() {
    const remaining = [...list.children].filter(li => {
        const cb = li.querySelector('input[type="checkbox"]');
        return cb && !cb.checked;
    }).length;
    counter.textContent = `Remaining Tasks: ${remaining}`;
}


const style = document.createElement('style');
style.textContent = `
.completed span {
    text-decoration: line-through;
    opacity: 0.6;
}
`;
document.head.appendChild(style);

myButton();

section.appendChild(task);
section.appendChild(button);
section.appendChild(list);
section.appendChild(counter);
root.appendChild(section);
