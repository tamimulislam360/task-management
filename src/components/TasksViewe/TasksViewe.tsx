"use client";

import TaskColumn from "../TaskColumn/TaskColumn";

import { store } from "@/state/store";
import { observer } from "mobx-react-lite";

const TasksViewe = observer(() => {
  const todo = store?.getTodos;
  const inProgress = store?.getProgress;
  const completed = store?.getCompleted;

  const allTasks = [
    {
      title: "To Do",
      task: todo,
    },
    {
      title: "In Progress",
      task: inProgress,
    },
    {
      title: "Completed",
      task: completed,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {allTasks.map((tasks, i) => (
        <TaskColumn key={i} tasks={tasks}></TaskColumn>
      ))}
    </div>
  );
});

export default TasksViewe;
