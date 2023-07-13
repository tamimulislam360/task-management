import { Typography } from "@material-tailwind/react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import Modal from "../EditModal/Modal";
import TaskDetails from "../TaskDetails/TaskDetails";
import { deleteTask, updateTask } from "@/lib/lib";
import { observer } from "mobx-react-lite";
import { Task } from "@/types";

const TaskCard = observer(({ task }: { task: Task }) => {
  const [currentTask, setCurrentTask] = useState(task || {});
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Task | null>(null);

  const [detailsOpen, setDetailsOpen] = useState(false);
  const [details, setDetails] = useState<Task | null>(null);

  const handleOpen = (data: Task) => {
    setOpen((prev) => !prev);
    setEditing(data);
  };

  const detailsHandleOpen = (data: Task) => {
    setDetailsOpen((prev) => !prev);
    setDetails(data);
  };

  const handleClose = () => {
    setOpen(false);
    setEditing(null);
  };

  const detailsHandleClose = () => {
    setDetailsOpen(false);
    setDetails(null);
  };

  const handleConfirm = (data: Partial<Task>) => {
    setOpen(false);
    setEditing(null);
    const task = {
      ...data,
      id: data?.id || Math.floor(Math.random() * 100 + 50).toString(),
      title: data?.title || '',
      description: data?.description || '',
      status: data?.status || '',
    };
    console.log(task);
    updateTask(task);
  };

  const updateByStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentTask({ ...currentTask, status: e.target.value });
    updateTask(currentTask);
  };

  const color =
    task.status === "To Do"
      ? "text-pink-600"
      : task.status === "In Progress"
      ? "text-yellow-700"
      : "text-green-600";

  return (
    <div className="group p-2 border bg-white shadow-sm relative hover:border-blue-600">
      <FiExternalLink
        onClick={() => detailsHandleOpen(task)}
        className="w-6 h-6 text-white rounded-full absolute top-2 right-2 hidden group-hover:block bg-blue-600 cursor-pointer p-1"
      />

      <Typography variant="h5">{task.title}</Typography>
      <Typography variant="small">
        {task.description.slice(0, 100)}...
      </Typography>
      <div className="flex gap-1 justify-between items-center mt-2">
        <select
          className={`cursor-pointer outline-none focus:outline-none pr-2 text-sm ${color} border-none`}
          value={task.status}
          onChange={(e) => updateByStatus(e)}
        >
          <option className="border-none" value="To Do">
            To Do
          </option>
          <option className="border-none" value="In Progress">
            In Progress
          </option>
          <option className="border-none" value="Completed">
            Completed
          </option>
        </select>
        <div className="flex gap-1 items-center justify-end">
          {task.status !== "Completed" && (
            <FaRegEdit
              onClick={() => handleOpen(task)}
              className="cursor-pointer "
            />
          )}
          <AiOutlineDelete
            onClick={() => deleteTask(task.id)}
            className="cursor-pointer "
          />
        </div>
      </div>
      {editing && (
        <Modal
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          data={editing}
          handleConfirm={handleConfirm}
        />
      )}

      {details && (
        <TaskDetails
          open={detailsOpen}
          handleOpen={detailsHandleOpen}
          handleClose={detailsHandleClose}
          data={details}
        />
      )}
    </div>
  );
});

export default TaskCard;
