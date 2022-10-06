import _ from 'lodash';
import './style.css';

class Task {
    constructor(array) {
        this.taskArray = array;
    }

    taskObject(addTask) {
        const eachTask = {
            description : addTask,
            completed : false,
            index: `${this.taskArray.length + 1}`
        }
        this.taskArray.push(eachTask);
    }

    removeTask(ptask) {
        this.taskArray = this.taskArray.filter((task) => task !== ptask);
    }
}

const addedTask = new Task([])



const filledTask = document.getElementById('addButton')
filledTask.addEventListener('click', () => {
const myTask = document.getElementById('addTask')
addedTask.taskObject(myTask.value)
addToLocalStorage();
displayList()
myTask.value = '';
})


const displayList = () => {
const list = document.getElementById('list')
list.innerHTML = '';
if (addedTask.taskArray.length) {
    for (let i = 0; i < addedTask.taskArray.length; i+=1){
        const li = document.createElement('div')
        li.classList.add('eachTask')
        list.appendChild(li)

        const taskInput = document.createElement('div')
        taskInput.innerHTML = `<input type="checkbox" name=" " class="task">
        <label for="">${addedTask.taskArray[i].description}</label>`
        li.appendChild(taskInput)


        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delButton')
        deleteButton.innerHTML = `<i class="fa fa-ellipsis-v">`
        
        deleteButton.onclick = () => {
            addedTask.removeTask(addedTask.taskArray[i]);
            
            addToLocalStorage();
            displayList();
        }

        li.appendChild(deleteButton)    
    }
} else {
    const noTask = document.createElement('p');
    noTask.classList.add('no_task');
    noTask.textContent = `No tasks added yet`;
    list.appendChild(noTask)
  }
}



const addToLocalStorage = () => {
const stringifyArray = JSON.stringify(addedTask.taskArray);
localStorage.setItem('storedTask', stringifyArray);
}

const getFromLocalStorage = () => {
const stringifyArray = localStorage.getItem('storedTask');
addedTask.taskArray = JSON.parse(stringifyArray);
displayList()
}

if (localStorage.getItem('storedTask') == null) {
addToLocalStorage();
} else {
getFromLocalStorage();
}