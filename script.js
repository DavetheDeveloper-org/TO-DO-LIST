document.addEventListener('DOMContentLoaded', () => {

const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

const todosContainer =
document.querySelector('.todo-container');

const toggleEmptyState = () => {
    todosContainer.style.width =
    taskList.children.length > 0 ? '100%' : '50%';
};

const addTask = (event) => {

    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (!taskText) {
        return;
    }

    const li = document.createElement('li');

    li.innerHTML = `
    <span>${taskText}</span>

    <div class="task-buttons">

    <button type="button" class="edit-btn">
        <i class="fa-solid fa-pen"></i>
    </button>

    <button type="button" class="delete-btn">
        <i class="fa-solid fa-trash"></i>
    </button>

    </div>
    `;

    
    const editBtn = li.querySelector('.edit-btn');
    editBtn.addEventListener('click', () => {
        const span = li.querySelector('span');
        const updatedText = prompt(
            'Edit your task:',
            span.textContent
        );
        if (updatedText === null) {
            return;
        }
         span.textContent = updatedText;
    });
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
     taskList.appendChild(li);
     taskInput.value = '';
     toggleEmptyState();
};
     addTaskBtn.addEventListener('click', addTask);
});