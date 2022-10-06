import {addToLocalStorage} from "./localstorage.js"

class Task {
        constructor(array) {
            this.taskArray = array;
        }
    
        taskObject(addTask) {
            const eachTask = {
                description : addTask,
                completed : false,
                index: 0
            }
            this.taskArray.push(eachTask);
        }

        reAssignIndex() {
            this.taskArray.forEach((element, i) => {
              element.index = i + 1;
            });
            addToLocalStorage()
        }
    
        removeTask(ptask) {
            this.taskArray = this.taskArray.filter((task) => task !== ptask);
        }

    }
    
const addedTask = new Task([])

export default addedTask;
