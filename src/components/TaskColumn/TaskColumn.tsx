import { Typography } from "@material-tailwind/react";
import TaskCard from "../TaskCard/TaskCard";
import { Tasks } from "@/types";

export default function TaskColumn({ tasks }: { tasks: Tasks }) {
  return (
    <div className="flex gap-2 flex-col">
      <Typography variant="h4">{tasks.title}</Typography>

      {tasks?.task?.map((task) => (
        <TaskCard key={task.id} task={task}></TaskCard>
      ))}
    </div>
  );
}
