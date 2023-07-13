import { store } from "@/state/store"

export const createTask = (task) => {
    const tasks = localStorage.getItem('tasks')
    
    if (tasks) {
        const parsedTasks = JSON.parse(tasks)
        parsedTasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(parsedTasks))
        store.addTask(task)
    } else {
        localStorage.setItem('tasks', JSON.stringify([task]))
        store.addTask(task)
    }
}


export const updateTask = (task) => {
    const tasks = localStorage.getItem('tasks')
    
    if (tasks) {
        const parsedTasks = JSON.parse(tasks)
        const index = parsedTasks.findIndex(t => t.id === task.id);
        parsedTasks[index] = task
        localStorage.setItem('tasks', JSON.stringify(parsedTasks))
        store.editTask(task)
    }
}




export const deleteTask = (id) => {
    const tasks = localStorage.getItem('tasks')
    
    if (tasks) {
        const parsedTasks = JSON.parse(tasks)
        const newTasks = parsedTasks.filter(task => task.id !== id);
        localStorage.setItem('tasks', JSON.stringify(newTasks))
        store.deleteTask(id)
    }
}