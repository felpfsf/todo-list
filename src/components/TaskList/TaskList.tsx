import { Task, TaskListProps } from "../../types";
import { TaskCard } from "../TaskCard/TaskCard";

export const TaskList = ({
  onTaskCheck,
  onTaskDelete,
  tasks,
  title,
}: TaskListProps) => {
  return (
    <div>
      <h1>{title}</h1>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onCheck={() => onTaskCheck(task.id)}
          onDelete={() => onTaskDelete(task.id)}
        />
      ))}
    </div>
  );
};
