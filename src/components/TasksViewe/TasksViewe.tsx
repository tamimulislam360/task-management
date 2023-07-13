"use client";

import { Chip, Typography } from "@material-tailwind/react";
import React, { useState } from "react";

import EditModal from "../EditModal/Modal";
import TaskColumn from "../TaskColumn/TaskColumn";

import { store } from '@/state/store'
import {getSnapshot} from 'mobx-state-tree'
import { observer } from "mobx-react-lite";



const TasksViewe = observer(() => {
  
  console.log(getSnapshot(store.tasks));
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
          <TaskColumn key={i}  tasks={tasks}></TaskColumn>
        ))}
  
        
      </div>
    );
  });

export default TasksViewe;
