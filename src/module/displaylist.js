import addedTask from "./class.js";
import checkBox from "./checkbox.js";


const displayList = () => {
    const list = document.getElementById('list')
    list.innerHTML = '';
    if (addedTask.taskArray.length) {
        for (let i = 0; i < addedTask.taskArray.length; i+=1){

            if (addedTask.taskArray[i].completed === false){
                const allTsk = document.createElement('div')
            list.appendChild(allTsk)
            
            const li = document.createElement('div')
            li.classList.add('eachTask')
            allTsk.appendChild(li)

            const taskInput = document.createElement('div')
            taskInput.classList.add('inputWidth')
            taskInput.innerHTML = `<input type="checkbox" name=" " class="task" id="input${addedTask.taskArray[i].index}">
            
            <input contentEditable id="edible${addedTask.taskArray[i].index}" class="task-item" onchange="handleInputChange(${addedTask.taskArray[i].index})" value="${addedTask.taskArray[i].description}" />
            
            `
            li.appendChild(taskInput)

            const deleteButton = document.createElement('button')
            deleteButton.classList.add('delButton')
            deleteButton.innerHTML = `<i class="fa fa-ellipsis-v">`
            
            deleteButton.onclick = () => {
                addedTask.removeTask(addedTask.taskArray[i]);
                addedTask.reAssignIndex()
                displayList();
                checkBox()
            }

            li.appendChild(deleteButton)   

            const horLine = document.createElement('hr')
            
            allTsk.appendChild(horLine)
            

            } else {
                const allTsk = document.createElement('div')
            list.appendChild(allTsk)
            
            const li = document.createElement('div')
            li.classList.add('eachTask')
            allTsk.appendChild(li)

            const taskInput = document.createElement('div')
            taskInput.classList.add('inputWidth')
            taskInput.innerHTML = `<input type="checkbox" name=" " class="task" id="input${addedTask.taskArray[i].index}" checked>
            
            <input contentEditable id="edible${addedTask.taskArray[i].index}" class="task-item completed-task" onchange="handleInputChange(${addedTask.taskArray[i].index})" value="${addedTask.taskArray[i].description}" />
            
            `
            li.appendChild(taskInput)

            const deleteButton = document.createElement('button')
            deleteButton.classList.add('delButton')
            deleteButton.innerHTML = `<i class="fa fa-ellipsis-v">`
            
            deleteButton.onclick = () => {
                addedTask.removeTask(addedTask.taskArray[i]);
                addedTask.reAssignIndex()
                displayList();
                checkBox()
            }

            li.appendChild(deleteButton)   

            const horLine = document.createElement('hr')
            
            allTsk.appendChild(horLine)
            
            }
            
 
        }
    } else {
        const noTask = document.createElement('p');
        noTask.classList.add('no_task');
        noTask.textContent = `No tasks added yet`;
        list.appendChild(noTask)
      }
}

export default displayList;