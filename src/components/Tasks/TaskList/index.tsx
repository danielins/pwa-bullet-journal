import { useContext } from "react";
import TaskItem from "../TaskItem";
import { JournalContext } from "src/hooks/useJournalContext";
import { Task } from "src/@types";

export default function TaskList() {
  const {
    state: { tasks },
  } = useContext(JournalContext);

  return (
    <>
      <p>Tarefas a serem feitas: {tasks.length}</p>
      <ul>
        {tasks.map((task: Task) => (
          <TaskItem {...task} key={task.id} />
        ))}
      </ul>
    </>
  );
}
