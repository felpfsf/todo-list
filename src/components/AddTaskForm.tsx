import { PlusCircle } from "phosphor-react";
import styles from "./AddTaskForm.module.css";

export const AddTaskForm = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <form className={styles.task_form} onSubmit={handleSubmit}>
      <input type='text' placeholder='Adicionar nova tarefa' />
      <button>
        Criar
        <PlusCircle />
      </button>
    </form>
  );
};
