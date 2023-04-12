import { CheckCircle, Circle, Trash } from "phosphor-react";
import { TaskCardProps } from "../../types";
import styles from "./TaskCard.module.css";

export const TaskCard = ({ task, onCheck, onDelete }: TaskCardProps) => {
  return (
    <div className={styles.task_card}>
      <button className={styles.task_check} onClick={onCheck}>
        {task.completed ? (
          <CheckCircle size={24} weight='fill' />
        ) : (
          <Circle size={24} />
        )}
      </button>
      <div className={styles.task_card__content}>
        <p
          className={`${styles.task_text} ${
            task.completed ? styles.task_checked : ""
          }`}
        >
          {task.description}
        </p>
      </div>
      <button className={styles.task_delete} onClick={onDelete}>
        <Trash size={24} />
      </button>
    </div>
  );
};
