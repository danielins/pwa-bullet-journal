export interface Task {
  id: string;
  name: string;
  day: Date;
  isDone: boolean;
}

export interface Track {
  id: string;
  name: string;
  startDate: Date;
  finalDate?: Date;
}

export type JournalState = {
  tasks: Task[];
  tracks: Track[];
}

export type Action = {
  type: string;
  payload?: any;
}

export enum ActionKind {
  ADD = 'ADD',
  DELETE = 'DELETE',
  UPDATE = 'UPDATE',
}

export type JournalReducer = (state: JournalState, action: Action) => JournalState;