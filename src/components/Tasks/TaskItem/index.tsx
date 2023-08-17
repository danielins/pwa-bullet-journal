import { Task } from "src/@types";

export default function TaskItem({ id, isDone, name }: Task) {
  return (
    <li>
      <input
        type="checkbox"
        name={`input_task_${id}`}
        id={`input_task_${id}`}
        checked={isDone}
      />
      <label htmlFor={`input_task_${id}`}>{name}</label>
    </li>
  );
}
