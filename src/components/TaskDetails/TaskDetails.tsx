"use client"

import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  Typography,
  Input,
  Card,
  Chip,
} from "@material-tailwind/react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteTask } from "@/lib/lib";
 
export default function TaskDetails({ open, handleOpen, handleClose, data }) {
  const [task, setTask] = useState(data)
  
  const deleteTheTask = () => {
    deleteTask(task.id)
    handleClose()
  }

console.log(data);
 
  return (
    <Fragment>
      <div className="mb-3 flex gap-3">
        
      </div>
      <Dialog
        open={open}
        size='xs'
        handler={handleOpen}
      >
        <Card color="transparent" shadow={false} className="flex flex-col items-center py-3 px-2 gap-2">
      <Typography variant="h5" color="blue-gray">
         {task.title}
      </Typography>
      <div className="flex gap-1 justify-between items-center mt-2">
        <Chip
          variant="outlined"
          color="pink"
          className="inline-flex rounded-full"
          size="sm"
          value={task.status}
        />
        <div className="flex gap-1 items-center justify-end">
          {/* <FaRegEdit
            onClick={() => handleOpen(task)}
            className="cursor-pointer "
          /> */}
          <AiOutlineDelete onClick={deleteTheTask} className="cursor-pointer " />
        </div>
      </div>
      <Typography variant="small" color="blue-gray">
         {task.description}
      </Typography>
      <Button
            variant="text"
            color="red"
            onClick={handleClose}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
    </Card>
      </Dialog>
    </Fragment>
  );
}