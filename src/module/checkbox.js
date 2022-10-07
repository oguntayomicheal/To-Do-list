import addedTask from "./class.js"
import { addToLocalStorage } from "./localstorage.js"

const checkBox = () => {
    const allBox = document.querySelectorAll('.task')

    allBox.forEach((each) => {
        each.addEventListener('change', (e) =>{
            addedTask.taskArray.forEach((task) =>{
                if((e.target.id === `input${task.index}`) && (task.completed === false)) {
                    task.completed = true
                    e.target.checked = true
                    addToLocalStorage()
                    const strikeTask = document.getElementById(`edible${task.index}`)
                    strikeTask.style.textDecoration = 'line-through'
                    strikeTask.style.color = 'grey'
                    

                } else if ((e.target.id ===`input${task.index}`) && (task.completed === true)) {
                    task.completed = false
                    e.target.checked = false
                    addToLocalStorage()
                    const strikeTask = document.getElementById(`edible${task.index}`)
                    strikeTask.style.textDecoration = 'none'
                    strikeTask.style.color = 'black'
                }
            })
        })
    })

}

export default checkBox;