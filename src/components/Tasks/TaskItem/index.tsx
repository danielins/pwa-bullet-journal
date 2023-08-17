import { Task } from "src/@types";

export default function TaskItem({ taskId, isDone, taskName }: Task) {
  return (
    <li>
      <input
        type="checkbox"
        name={`input_task_${taskId}`}
        id={`input_task_${taskId}`}
        checked={isDone}
      />
      <label htmlFor={`input_task_${taskId}`}>{taskName}</label>
    </li>
  );
}
