import { useEffect, useState } from "react";
import { Task } from "../types";
import styles from "./TaskContainer.module.css";
import { TaskCard } from "./TaskCard";
import { TaskEmpty } from "./TaskEmpty";
import { AddTaskForm } from "./AddTaskForm";
import { TaskList } from "./TaskList";

export const TaskContainer = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleTaskSubmit = (description: string) => {
    const newTask = {
      id: tasks.length + 1,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  };

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleTaskDelete = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleTaskCheck = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const completedTasks = tasks.filter((task) => task.completed);
  const activeTasks = tasks.filter((task) => !task.completed);

  return (
    <main>
      <AddTaskForm onSubmit={handleTaskSubmit} />
      <section className={`wrapper ${styles.task_container}`}>
        <header className={styles.task_container__info}>
          <h2 className={`${styles.tasks_created} ${styles.task_info__title}`}>
            Tarefas criadas{" "}
            <span className={styles.task_counter}>{tasks.length}</span>
          </h2>
          <h2 className={`${styles.tasks_done} ${styles.task_info__title}`}>
            Concluídas{" "}
            <span className={styles.task_counter}>{completedTasks.length}</span>
          </h2>
        </header>
        {tasks.length === 0 ? (
          <TaskEmpty />
        ) : (
          <>
            <TaskList
              title='Ativas'
              tasks={activeTasks}
              onTaskCheck={handleTaskCheck}
              onTaskDelete={handleTaskDelete}
            />
            {completedTasks.length > 0 ? (
              <TaskList
                title='Concluídas'
                tasks={completedTasks}
                onTaskCheck={handleTaskCheck}
                onTaskDelete={handleTaskDelete}
              />
            ) : (
              ""
            )}
          </>
        )}
      </section>
    </main>
  );
};
