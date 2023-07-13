import { types } from 'mobx-state-tree'
import { Task } from './modals'
import {values} from 'mobx'


const RootStore = types.model({
    tasks: types.array(Task)
})
.views(self => ({
    get getTodos() {
        return values(self.tasks).filter(task => task.status === 'To Do')
    },
    get getProgress() {
        return values(self.tasks).filter(task => task.status === 'In Progress')
    },
    get getCompleted() {
        return values(self.tasks).filter(task => task.status === 'Completed')
    },
}))
.actions(self => ({
    addTask(task) {
        self.tasks.push(task);
    },
    editTask(task) {
        const index = self.tasks.findIndex(t => t.id === task.id);
        self.tasks[index] = task;
    },
    deleteTask(id) {
        const index = self.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            self.tasks.splice(index, 1);
        }

    }
}))


// retrive tasks from localStorage
const tasks = localStorage.getItem('tasks')
let parsedTasks

if (tasks) {
    parsedTasks = JSON.parse(tasks)
}

export const store = RootStore.create({
    tasks: parsedTasks || []
})