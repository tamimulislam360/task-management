"use client"

import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  Typography,
  Input,
  Card,
} from "@material-tailwind/react";
 
export default function Modal({ open, handleOpen, handleClose, data, handleConfirm }) {
    const [task, setTask] = useState(data || {});

  const confirmHandle = (data) => {
    handleConfirm(data)
    setTask({})
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
        <Card color="transparent" shadow={false} className="flex flex-col items-center py-3">
      <Typography variant="h5" color="blue-gray">
         {task.title}
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" value={task.title} onChange={(e) => setTask({...task, title: e.target.value})} label="Title" />
          <Input size="lg" value={task.description} onChange={(e) => setTask({...task, description: e.target.value})} label="Description" />
          <div className="w-72">
            <Typography variant="small">Status</Typography>
            <select className="cursor-pointer outline-none focus:outline-none px-2 border-none" value={task.status} onChange={(e) => setTask({...task, status: e.target.value})} >
                <option className="border-none" value="Select Status">Select Status</option>
                <option className="border-none" value="To Do">To Do</option>
                <option className="border-none" value="In Progress">In Progress</option>
            </select>
        </div>
        </div>

        <div className="flex justify-center">
        <Button
            variant="text"
            color="red"
            onClick={handleClose}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => confirmHandle(task)}
          >
            <span>Confirm</span>
          </Button>
        </div>
      </form>
    </Card>
      </Dialog>
    </Fragment>
  );
}