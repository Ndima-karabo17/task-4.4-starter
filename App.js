// All your DOM manipulation must happen here.
const root = document.getElementById('root');
// You will create and inject all elements into <main id="root"> using JavaScript only.


document.body.style.backgroundColor = 'purple';

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
section.style.margin = '200px auto';
section.style.backgroundColor = '#9400D3';
section.style.width = '800px';
section.style.height = '60vh';
section.style.borderRadius = '30px';
section.style.color = 'white';

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
        li.style.listStyleType = "none";

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
        deletebtn.style.marginLeft = '10px';
        deletebtn.style.backgroundColor = 'purple';
        deletebtn.style.width = '80px';
        deletebtn.style.height = '4vh';
        deletebtn.style.borderRadius = '10px';
        deletebtn.style.border = 'none';
        deletebtn.style.color = 'white';
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
