import { useState, useContext } from "react";
import { JournalContext } from "src/hooks/useJournalContext";
import { JournalTaskActionKind } from "src/@types";

export default function TaskForm() {
  const [newTask, setNewTask] = useState<string>("");
  const { dispatch } = useContext(JournalContext);

  function addNewTask() {
    dispatch({
      type: JournalTaskActionKind.ADD,
      payload: newTask,
    });
    setNewTask("");
  }

  return (
    <form>
      <label htmlFor="input-newTask">Adicionar uma nova tarefa</label>
      <input
        name="input-newTask"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="button" onClick={addNewTask}>
        Adicionar
      </button>
    </form>
  );
}
