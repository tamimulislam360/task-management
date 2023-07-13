import { store } from "@/state/store";
import { Task } from "@/types";

export const createTask = (task: Task) => {
  const tasks = localStorage.getItem("tasks");

  if (tasks) {
    const parsedTasks = JSON.parse(tasks);
    parsedTasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(parsedTasks));
    store.addTask(task);
  } else {
    localStorage.setItem("tasks", JSON.stringify([task]));
    store.addTask(task);
  }
};

export const updateTask = (task: Task) => {
  const tasks = localStorage.getItem("tasks");

  if (tasks) {
    const parsedTasks = JSON.parse(tasks);
    const index = parsedTasks.findIndex((t: Task) => t.id === task.id);
    parsedTasks[index] = task;
    localStorage.setItem("tasks", JSON.stringify(parsedTasks));
    store.editTask(task);
  }
};

export const deleteTask = (id: string) => {
  const tasks = localStorage.getItem("tasks");

  if (tasks) {
    const parsedTasks = JSON.parse(tasks);
    const newTasks = parsedTasks.filter((task: Task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    store.deleteTask(id);
  }
};
