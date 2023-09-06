import dayjs from "dayjs";
import { Action, ActionKind, Task, Track } from "src/@types";

export const monthReducer = (state: number, action: Action): number => {
  switch( action.type ){
    case `MONTH_${ActionKind.UPDATE}`:
      return action.payload
    default:
      return state;
  }
}

export const yearReducer = (state: number, action: Action): number => {
  switch( action.type ){
    case `YEAR_${ActionKind.UPDATE}`:
      return action.payload
    default:
      return state;
  }
}

export const tasksReducer = (state: Task[], action: Action): Task[] => {
  switch( action.type ){
    case ActionKind.ADD:
      return [...state, action.payload]
    default:
      return state;
  }
}

export const trackReducer = (state: Track[], action: Action): Track[] => {
  switch( action.type ){
    case ActionKind.ADD:
      return [...state, action.payload]
    default:
      return state;
  }
}

export const INITIAL_MONTH_STATE = dayjs().month() + 1;
export const INITIAL_YEAR_STATE = dayjs().year();
export const INITIAL_TASKS_STATE = [];
export const INITIAL_TRACKS_STATE = [];

export const INITIAL_STATE = {
  month: INITIAL_MONTH_STATE,
  year: INITIAL_YEAR_STATE,
  tasks: INITIAL_TASKS_STATE,
  tracks: INITIAL_TRACKS_STATE,
}