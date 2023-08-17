import { Action, ActionKind, Task, Track } from "src/@types";

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

export const INITIAL_TASKS_STATE = []
export const INITIAL_TRACKS_STATE = []

export const INITIAL_STATE = {
  tasks: INITIAL_TASKS_STATE,
  tracks: INITIAL_TRACKS_STATE,
}