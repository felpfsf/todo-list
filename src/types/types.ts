export interface Task {
  id: number;
  description: string;
  completed: boolean;
}

export interface TaskCardProps {
  task: Task;
  onCheck?: () => void;
  onDelete?: () => void;
}

export interface AddTaskFormProps {
  onSubmit: (description: string) => void;
}

export interface TaskListProps {
  title: string;
  tasks: Task[];
  onTaskCheck: (id: number) => void;
  onTaskDelete: (id: number) => void;
}
