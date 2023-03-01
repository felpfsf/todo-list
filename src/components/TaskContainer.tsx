import { ClipboardText } from "phosphor-react";
import styles from "./TaskContainer.module.css";
import { TaskEmpty } from "./TaskEmpty";

export const TaskContainer = () => {
  return (
    <section className={`wrapper ${styles.task_container}`}>
      <header className={styles.task_container__info}>
        <h2 className={`${styles.tasks_created} ${styles.task_info__title}`}>
          Tarefas criadas <span className={styles.task_counter}>0</span>
        </h2>
        <h2 className={`${styles.tasks_done} ${styles.task_info__title}`}>
          Concluídas <span className={styles.task_counter}>0</span>
        </h2>
      </header>
      {/* Empty task container */}
      <TaskEmpty />
    </section>
  );
};
