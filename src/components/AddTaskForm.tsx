import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import { AddTaskFormProps } from "../types";
import styles from "./AddTaskForm.module.css";

export const AddTaskForm = ({ onSubmit }: AddTaskFormProps) => {
  const [description, setDescription] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(description);
    if (description.trim()) {
      onSubmit(description);
      setDescription("");
    }
  };

  return (
    <section className='wrapper'>
      <form className={`${styles.task_form}`} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Adicionar nova tarefa'
          aria-label='Adicionar nova tarefa'
          value={description}
          onChange={handleChange}
        />
        <button type='submit' aria-label='Criar Tarefa'>
          Criar
          <PlusCircle />
        </button>
      </form>
    </section>
  );
};
