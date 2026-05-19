document.addEventListener('DOMContentLoaded', () =>{;
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const todosContainer = document.querySelector('.todos-container')

const toggleEmptyState = () => {
    todosContainer.style.width = taskList.children.length > 0 ? '100%' : '50%'
};

taskInput.value = ''; 
const addTask= (event) => {
    event.preventDefault();
    const taskText= taskInput.value.trim();
    if(!taskText){
        return;
    }
    
    const li = document.createElement('li')
    li.innerHTML =`
    <span>${taskText}</span>
    <div class ="task-buttons">
    <button class = "edit-btn"> <i class = "fa-solid fa-pen"></i></button>
    <button class = "delete-btn"><i class = "fa-solid fa-trash"></i></button>
    </div>
    `
    const editBtn = li.querySelector('.edit-btn');
    editBtn.addEventListener('click', () => {
        taskInput.value = li.querySelector('span').textContent;
        li.remove()
    })

    li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove()
  })
  taskList.appendChild(li);
  taskInput.value = '';
};

    addTaskBtn.addEventListener('click', addTask);
});