// All your DOM manipulation must happen here.
const root = document.getElementById('root');
// You will create and inject all elements into <main id="root"> using JavaScript only.



const task = document.createElement('input');
task.type = 'text';
task.placeholder = "Enter a task";
task.style.backgroundColor = 'white';
task.style.width = '200px';
task.style.height = '20px';
task.style.border = 'none';

const section = document.createElement('section');
section.style.padding = '20px';
section.style.display = 'block';
section.style.margin = '20px auto';
section.style.backgroundColor = 'blue';
section.style.width = '500px';

const button = document.createElement('button');
button.textContent = 'SUBMIT';
button.style.display = 'block';
button.style.backgroundColor = 'purple';
button.style.width = '80px';
button.style.height = '4vh';
button.style.borderRadius = '10px';
button.style.border = 'none';
button.style.color = 'white';

const list = document.createElement('ul');

const counter = document.createElement('p');  

function myButton() {
    button.addEventListener('click', () => {
        const taskText = task.value.trim();
        if (!taskText) {
            alert('Please enter valid text');
            return;
        }

       
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        li.textContent = taskText;
        li.appendChild(checkbox);
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

myButton();

section.appendChild(task);
section.appendChild(button);
section.appendChild(list);
section.appendChild(counter);
root.appendChild(section);
