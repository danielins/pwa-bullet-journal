export interface Task {
  taskId: string;
  taskName?: string;
  isDone?: boolean;
}

export interface JournalState {
  tasks: Task[];
  // dispatch: React.Dispatch<JournalAction>;
}

export enum JournalTaskActionKind {
  ADD = 'ADD',
  DELETE = 'DELETE',
  UPDATE = 'UPDATE',
}

export interface JournalAction {
  type: JournalTaskActionKind,
  payload?: Task | Partial<Task>
}