import addedTask from "./class.js"
import displayList from "./displaylist.js";

const addToLocalStorage = () => {
    const stringifyArray = JSON.stringify(addedTask.taskArray);
    localStorage.setItem('storedTask', stringifyArray);
}

const getFromLocalStorage = () => {
    const stringifyArray = localStorage.getItem('storedTask');
    addedTask.taskArray = JSON.parse(stringifyArray);
    displayList()
}


export {addToLocalStorage, getFromLocalStorage}