import { ClipboardText } from "phosphor-react";
import styles from "./TaskEmpty.module.css";

export const TaskEmpty = () => {
  return (
    <div className={styles.task_container__empty}>
      <ClipboardText size={56} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
};
